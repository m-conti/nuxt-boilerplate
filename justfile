APPLICATION_NAMES := `ls -d apps/*/ 2>/dev/null | xargs -n 1 basename` + ' ui'

default:
  @just --list

clean:
  find . -type d -name node_modules -prune -exec rm -rf {} \;

# 
# Development
# 
install:
  pnpm install

dev target="":
  #!/usr/bin/env bash
  valid_targets="{{APPLICATION_NAMES}}"
  if [ -n "{{target}}" ]; then
    if [[ ! " $valid_targets " =~ " {{target}} " ]]; then
      echo "Error: Invalid target '{{target}}'. Valid targets: $valid_targets"
      exit 1
    fi
    pnpm --filter={{target}} dev
  else
    pnpm -r --parallel dev
  fi


# 
# Linting and Type Checking
# 

[arg("fix", long="fix", short="f", value="true")]
lint fix="false":
  #!/usr/bin/env bash
  if [ "{{fix}}" = "true" ]; then
      pnpm -r --parallel lint:fix
  else
      pnpm -r --parallel lint
  fi

typecheck:
  pnpm -r --parallel typecheck

[arg("fix", long="fix", short="f", value="true")]
check fix="false": (lint fix) typecheck