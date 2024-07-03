CONTAINER_NAME = mesonmontesdetoledo_website
CONTAINER_PATH = /var/www/html/mesonmontesdetoledo_website

build:
	docker-compose up -d --remove-orphans --build
	@echo "Waiting for containers to start..."
	@while [ $$(docker ps --filter "status=running" --format "{{.Names}}" | grep -c "${CONTAINER_NAME}") -eq 0 ]; do \
		sleep 3; \
	done
	docker exec ${CONTAINER_NAME} sh -c "cd ${CONTAINER_PATH} && chmod 777 -R ."
	cp ./.env.dist ./.env.local
	cp ./.env.dist ./.env
	docker exec ${CONTAINER_NAME} sh -c "cd ${CONTAINER_PATH} && composer install"

start:
	docker-compose up -d --remove-orphans
	$(MAKE) npm-run-dev

restart:
	docker-compose down
	docker-compose up -d --remove-orphans

stop:
	docker-compose down --remove-orphans

delete:
	docker rm -f ${CONTAINER_NAME}

exec:
	docker exec -it ${CONTAINER_NAME} bash

npm-run-dev:
	docker exec ${CONTAINER_NAME} sh -c "cd ${CONTAINER_PATH} && npm run dev"
