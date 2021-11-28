help: ## Prints help for targets with comments
	@cat $(MAKEFILE_LIST) | grep -E '^[/a-zA-Z_-]+:.*?## .*$$' | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: db/up
db/up: ## database start
	./scripts/local/create_cache_dir.sh
	docker container run -d --rm \
	  --name strapi-corporate-sample \
	  -p 5433:5432 \
	  -e POSTGRES_PASSWORD=strapi-sample \
	  -e POSTGRES_DB=corporate_site \
	  -e PGDATA=/var/lib/postgresql/data/pgdata \
	  -v ${PWD}/.cache/psql:/var/lib/postgresql/data \
	  postgres:14.1-alpine

.PHONY: db/down
db/down: ## database stop
	docker container stop strapi-corporate-sample

.PHONY: terraform/apply
terraform/apply: ## apply terraform
	./scripts/apply_terraform.sh
