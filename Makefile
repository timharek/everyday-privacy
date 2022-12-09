install: ## Install dependencies
	bundle install

update: ## Update dependencies
	bundle update

serve: ## Run local Jekyll development server
	bundle exec jekyll serve --livereload --open-url

build: ## Builds for production
	bundle exec jekyll build

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

