APPLICATION_NAMES := `ls -d apps/*/ 2>/dev/null | xargs -n 1 basename`

default:
  @just --list

clean:
  find . -type d -name node_modules -prune -exec rm -rf {} \;

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

lint param="":
  #!/usr/bin/env bash
  case "{{param}}" in
    fix)
      pnpm -r --parallel lint:fix
      ;;
    *)
      pnpm -r --parallel lint
      ;;
  esac
