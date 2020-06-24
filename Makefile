# projects
PROJECT_1 = custom1
PROJECT_2 = custom2

# Hot dev (client only)
clear:
	rimraf ./src/custom

copy-custom1:
	make clear && ln -s $(shell pwd)/src/customizations/${PROJECT_1} ./src/custom

copy-custom2:
	make clear && ln -s $(shell pwd)/src/customizations/${PROJECT_2} ./src/custom

