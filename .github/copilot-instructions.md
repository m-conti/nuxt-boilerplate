# Project Context: nuxt-boilerplate

## Overview
This is a monorepo boilerplate for Nuxt applications using pnpm workspaces and Just as a command runner.


## Technology Stack

- **Package Manager**: pnpm (v8+)
- **Node Version**: 24.13.0 (managed via .npmrc)
- **Monorepo**: pnpm workspaces
- **Task Runner**: Just (justfile)

## Workspace Configuration

### pnpm Workspaces
Defined in `package.json`:
```json
{
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

### pnpm Configuration (.npmrc)
- `auto-install-peers=true`: Automatically installs peer dependencies
- `use-node-versions=24.13.0`: Uses Node.js 24.13.0

## Directory Purposes

### `/apps`
- Contains individual Nuxt applications
- Each subdirectory is a separate application in the workspace
- Applications can depend on packages from `/packages`
- Each app should have its own `package.json`

### `/packages`
- Contains shared packages and libraries
- Reusable code across multiple applications
- Can include UI components, utilities, configurations, etc.
- Each package should have its own `package.json`

### `/configs`
- Shared configuration files (e.g., ESLint, TypeScript)
- Configurations that can be extended by applications
- Centralized configuration management


### `/env`
- Environment-specific configuration files
- Shared environment variables
- Configuration that shouldn't be committed (add to .gitignore as needed)


## Development Workflow

### Application Structure
Each application in `/apps` follows this structure:
```
apps/<app-name>/
├── domains/          # Domain logic and features
├── package.json      # Application dependencies
└── tsconfig.json     # TypeScript configuration
```

### Adding a New Application
1. Create a new directory in `/apps/<app-name>`
2. Initialize your application
3. Add `package.json` with proper workspace dependencies
4. Add `tsconfig.json` for TypeScript configuration
5. Create `domains/` directory for your application logic
6. Run `just install` from root
7. The app will automatically be detected by `APPLICATION_NAMES`

### Adding a New Package
1. Create a new directory in `/packages/<package-name>`
2. Add `package.json` with proper `name` field (e.g., `utils`)
3. Add source code and exports
4. Reference from apps using the package name
5. Run `just install` from root

## Conventions

### Naming
- Applications: kebab-case (e.g., `admin-dashboard`, `public-site`)
- Packages: kebab-case (e.g., `utils`, `ui`)

### File Organization
- Application-specific configs stay in app directories
- Shared configurations go in `/packages` as reusable packages
