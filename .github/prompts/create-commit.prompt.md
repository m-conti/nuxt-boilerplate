---
agent: ask
---
1. First, check git status to see what files have changed
2. Review the diff to understand the changes
3. Propose (ask a validation before) a commit with this format:
   {type}({context}): {name}
   {description}

{type}:
- feat: For a feature
- fix: For a bug fix
- docs: For documentation changes
- style: For code style changes (formatting, missing semi-colons, etc)
- refactor: For code refactoring without adding features or fixing bugs
- test: For adding or updating tests
- chore: For build process or auxiliary tool changes

{context}: The area of the codebase affected (e.g., health, example, config, etc)

{name}: A brief description of the change (use imperative mood, e.g., "add", "fix", "update", should be short and concise)

{description}: A concise explanation of the change (1-6 lines max).
- Focus ONLY on functional changes and business value
- Skip obvious/boilerplate details (config setup, lock files, standard scaffolding)
- Avoid listing every file or trivial changes (blank lines, spacing, imports)
- Describe high-level WHAT changed and WHY, not implementation details
- If changes are self-explanatory from the name, keep it extremely brief or omit description
- A new subject, a new line

4. Stage all changes and commit with the generated message