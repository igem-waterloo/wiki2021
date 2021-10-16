#!/bin/bash

# Sourced from UWashington iGEM 2019 wiki github
# PREREQUISITES: 
# 	Install the iGEM-CLI globally: `npm install -g igem-cli`
#	Set the environment variables inside .bashrc:
#		export IGEM_USERNAME=username
#		export IGEM_PASSWORD=password
#		export IGEM_TEAM=Waterloo
#		export IGEM_YEAR=2021
#	Requires version: 1.0.2
#
# To run this file, do `npm run deploy`

export IGEM_USERNAME=tszyanau
export IGEM_PASSWORD=kMg!W*27k9
export IGEM_TEAM=Waterloo
export IGEM_YEAR=2021
igem-cli -t JavaScript ./build/static/js/main.js
igem-cli -t CSS ./build/static/css/main.css