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

{description}: A more detailed description of the change (can be multiple lines) and a list of useful changes if necessary. max of 8 lines.
- Focus on functional changes and business value
- Avoid obvious formatting details (blank lines, spacing, etc.)
- Describe WHAT changed and WHY, not trivial HOW details

4. Stage all changes and commit with the generated message