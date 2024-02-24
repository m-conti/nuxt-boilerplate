PACKAGE_FOLDER = packages/*
NVM_VERSION = lts/iron

.PHONY: all install clean fclean dev dev-ui


# INIT RULES
install:
	. $(HOME)/.nvm/nvm.sh && nvm install ${NVM_VERSION}
	bash -l -c '. $(HOME)/.nvm/nvm.sh && nvm exec ${NVM_VERSION} pnpm i --workspace-root'

clean:
	find . -type d -name node_modules -prune -exec rm -rf {} \;

fclean: clean
	find . -type d -name .nuxt -prune -exec rm -rf {} \;
	find . -type d -name .output -prune -exec rm -rf {} \;
	find . -type l -name dist -delete

all: fclean install


# DEVELOPMENT RULES
prepare:
	pnpm --filter=shared fetch-langs
	bash -l -c '. $(HOME)/.nvm/nvm.sh && nvm exec ${NVM_VERSION} pnpm -r --parallel prepare'

dev: prepare
	bash -l -c '. $(HOME)/.nvm/nvm.sh && nvm exec ${NVM_VERSION} pnpm -r --parallel dev'

dev-ui: prepare
	bash -l -c '. $(HOME)/.nvm/nvm.sh && nvm exec ${NVM_VERSION} pnpm --filter=ui dev'
