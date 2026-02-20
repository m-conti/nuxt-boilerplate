# Project Architecture

## How to use this document

This file is the single source of truth for all architectural decisions in this codebase. Before creating or editing any file:

1. Find the target directory in the **Structure** XML below.
2. If the `<directory>` tag has a `context` attribute (e.g., `context="#Hooks"`), jump to that section in this file.
3. That section is the **authoritative ruleset** for the directory — what belongs there, what is forbidden, and how to write it.

When in doubt about where a piece of code belongs, use the **Decision guide** below before writing anything.

---

## Decision guide — where does this code go?

| I need to… | Put it in… |
|---|---|
| Store a static value, enum, or config | `domains/[name]/constants/` |
| Call an API / write a query or mutation | `domains/[name]/data/` |
| Transform, format, or validate data (no React) | `domains/[name]/libraries/` |
| Define a TypeScript type or interface | `domains/[name]/types/` |
| Manage runtime state, call data functions | `domains/[name]/stores/` |
| Compose store + library logic into a React hook | `domains/[name]/hooks/` |
| Render UI that only receives props | `components/[name]/elements/` |
| Render a page section with its own logic and store access | `components/[name]/modules/` |
| Define a route, mount providers, lay out modules | `pages/[name]/` |
| Write a generic hook (no domain, e.g. `useDebounce`) | `utils/hooks/` |
| Write a generic helper (no domain, e.g. date format) | `utils/libraries/` |

---

## Structure

Each `<directory>` tag has a `description` (short summary). When a `context` attribute is present, its value is a section anchor (`#SectionName`) in **this file** — navigate there for the full rules for that directory.

```xml
<project_structure root="/">
    <directory name="components" description="Global shared UI components that are domain-agnostic.">
        <directory name="[domain_name]" context="#Components">
            <directory name="elements" description="Dumb/presentational UI elements specific to this domain." context="#Elements" />
            <directory name="modules" description="Smart modules that centralize logic and display for a page section." context="#Modules" />
        </directory>
    </directory>

    <directory name="domains" description="Core business logic organized by domain." context="#Domains">
        <directory name="[domain_name]">
            <directory name="constants" description="Domain-specific constants, enums and frozen objects." context="#Constants" />
            <directory name="data" description="Raw async API layer: calls, queries, mutations." context="#Data" />
            <directory name="hooks" description="React hooks composing store + library logic for the UI." context="#Hooks" />
            <directory name="libraries" description="Pure, side-effect-free utility functions." context="#Libraries" />
            <directory name="stores" description="React Context providers and domain runtime state." context="#Stores" />
            <directory name="types" description="TypeScript interfaces and type definitions for this domain." context="#Types" />
        </directory>
    </directory>

    <directory name="pages" description="Next.js route entry points." context="#Pages">
        <directory name="[domain_name]" description="Routes specific to a domain feature." context="#Pages" />
    </directory>

    <directory name="utils" description="Global utilities shared across the entire application.">
        <directory name="hooks" description="Generic, reusable React hooks (e.g., useWindowSize, useDebounce)." />
        <directory name="libraries" description="General helper functions (e.g., date formatting, math helpers)." />
    </directory>
</project_structure>
```

---

# Domains

**Rule:** Each domain is a self-contained unit. No domain imports from another domain's internals. Cross-domain imports are only permitted from `types/` or `hooks/` when a structural dependency is explicitly justified. No JSX or UI belongs anywhere in a domain.

**Domain-internal import matrix** — a subdirectory may only import from columns marked ✅:

| from ↓ imports → | `constants/` | `data/` | `hooks/` | `libraries/` | `stores/` | `types/` |
|---|---|---|---|---|---|---|
| `constants/` | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `data/` | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| `hooks/` | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| `libraries/` | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |
| `stores/` | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| `types/` | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## Constants

**Path:** `domains/[name]/constants/` · **May import from:** `types/` only

Static values only. No functions, no runtime computation, no async.

✅ Can contain:
- Primitive constants (`DEFAULT_PAGE_SIZE`, route keys, label strings)
- TypeScript `enum` declarations
- `Object.freeze({})` maps used as enum-like structures

❌ Never import from: `data/`, `libraries/`, `hooks/`, `stores/`

---

## Data

**Path:** `domains/[name]/data/` · **May import from:** `constants/`, `data/`, `libraries/`, `types/`

Plain async functions. No React, no state, no side effects beyond the API call itself.

✅ Rules:
- One file per resource or API concern (e.g., `getUser.ts`, `updateOrder.ts`)
- Always type inputs and outputs using `types/`
- Return raw typed data or throw — never transform or hold state

❌ Never: use React, call stores, hold module-level state

---

## Hooks

**Path:** `domains/[name]/hooks/` · **May import from:** `constants/`, `hooks/`, `libraries/`, `stores/`, `types/`

Composes `stores/` and `libraries/` into reusable React-aware functions for `modules/` and `pages/`. Never calls `data/` directly — all async state is owned by stores.

✅ Right place for:
- Derived values computed from store state (filtered lists, formatted strings, computed flags)
- Event handlers that delegate to store actions, optionally passing through library logic
- Combining values from multiple stores into a unified interface for a module or page

❌ Never: call `data/` functions, own `useState`/`useReducer`, fetch data independently

```ts
export const useDomainItems = () => {
  const { items, loading } = useDomainStore()
  const formatted = items.map(formatItem) // from libraries/
  const isEmpty = !loading && formatted.length === 0

  return { items: formatted, loading, isEmpty }
}
```

---

## Stores

**Path:** `domains/[name]/stores/` · **May import from:** `constants/`, `data/`, `stores/`, `types/`

The **only layer** allowed to call `data/` functions. Owns all runtime state for the domain: loading, errors, results, and UI state (selected item, pagination, filters).

✅ Each store must export exactly:
- **`[Domain]Provider`** — React Context provider. Wraps the relevant page. Holds state and calls `data/` on actions or lifecycle events.
- **`use[Domain]Store`** — the only way to consume the store from `hooks/` or `modules/`.

❌ Never: import from `hooks/`, expose more than one context per store file

```ts
const DomainContext = createContext<ContextType>()

export const DomainProvider = ({ children }) => {
  const [state, setState] = useState(initialState)
  const someAction = () => setState(...)
  return <DomainContext.Provider value={{ state, someAction }}>{children}</DomainContext.Provider>
}

export const useDomainStore = () => useContext(DomainContext)
```

---

## Libraries

**Path:** `domains/[name]/libraries/` · **May import from:** `constants/`, `libraries/`, `types/`

Pure functions only. Input in, output out. No React, no async, no state, no side effects.

✅ Right place for: data transformations, formatters, validators, business rule helpers

❌ If a function needs React → move to `hooks/`. If it needs async → move to `data/`.

---

## Types

**Path:** `domains/[name]/types/` · **May import from:** `constants/` only

Base layer of the domain. Every other subdirectory imports from here.

✅ Must define: API response shapes, store state types, hook return types, function signatures

❌ Never: import from `data/`, `hooks/`, `libraries/`, or `stores/`

---

# Components

## Components

**Path:** `components/[domain_name]/` · Applies to all subdirectories (`elements/`, `modules/`)

**Shared rules for all components:**

❌ Never:
- **Define types inline** — always import from `domains/[name]/types/`
- **Contain business logic** — keep it in `domains/[name]/hooks/` or `domains/[name]/libraries/`
- **Control own placement** — do not set `margin`, `position: absolute`, `top`, `left`, etc. on the root element. The page or parent decides placement. Only `position: fixed` and `position: sticky` are self-contained exceptions.

⚠️ Allowed exceptions:
- **Global store access** — both elements and modules may read from the global store (auth, theme, UI state)
- **Cross-domain imports** — only when the dependency is structural and stable; import from `domains/[other]/types/` or `domains/[other]/hooks/` only

**Capability matrix:**

| | `elements/` | `modules/` |
|---|---|---|
| Domain store | ❌ | ✅ |
| Domain hooks | ⚠️ only if hook does not access domain store | ✅ |
| Data fetching | ❌ | ⚠️ via hooks only |
| Render child elements | ✅ | ✅ |
| Import from another domain | ⚠️ types/hooks only | ⚠️ types/hooks only |
| Embed another module | ❌ | ⚠️ last resort only |

---

## Pages

**Path:** `pages/[domain_name]/`

The entry point of a route. Owns the provider tree and composes the modules that make up the view. Contains no logic of its own.

✅ Do:
- **Mount providers here** — `[Domain]Provider` belongs on the page, nowhere else
- **Own layout** — use divs/semantic elements freely to position modules on screen
- **Compose modules** — the page body is a layout declaration, not a logic layer

❌ Never:
- Call `use[Domain]Store` or `use[Domain]Hook` directly
- Write conditional rendering based on state — delegate that to the relevant module

```tsx
export default function OrdersPage() {
  return (
    <OrdersProvider>
      <div className="orders-layout">
        <OrdersHeaderModule />
        <OrdersListModule />
      </div>
    </OrdersProvider>
  )
}
```

---

## Modules

**Path:** `components/[domain_name]/modules/`

A module centralizes both logic and display for one section of a page. It is a direct child of a page, accesses the domain store, and composes elements.

✅ Do:
- Wire domain hooks, store values, and elements into a coherent page section
- Access `use[Domain]Store` via `domains/[name]/hooks/`
- Trigger data fetching on mount or user interaction through hooks

❌ Never: embed inside another module (unless no better option exists and it is explicitly justified)

---

## Elements

**Path:** `components/[domain_name]/elements/`

Purely presentational. Renders what it receives via props. No domain awareness whatsoever.

✅ Do:
- One file = one exported element
- All data comes from props — no exceptions
- Return JSX only — no hooks that reach domain stores

❌ Never: access the domain store, even indirectly through a hook
