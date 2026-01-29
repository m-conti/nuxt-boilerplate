APPLICATION_NAMES := `ls -d apps/*/ 2>/dev/null | xargs -n 1 basename`

default:
  @just --list

clean:
  find . -type d -name node_modules -prune -exec rm -rf {} \;

install:
  pnpm install