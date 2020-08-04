# projects
PROJECT_1 = custom1
PROJECT_2 = custom2

# Hot dev (client only)
clear:
	rimraf ./src/app/custom

copy-custom1:
	make clear && ln -s $(shell pwd)/src/app/customizations/${PROJECT_1} ./src/app/custom

copy-custom2:
	make clear && ln -s $(shell pwd)/src/app/customizations/${PROJECT_2} ./src/app/custom

