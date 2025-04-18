#!/bin/bash

# Create app directory
mkdir -p /umbrel/app-data/wellness-tracker

# Copy configuration files
cp docker-compose.yml /umbrel/app-data/wellness-tracker/
cp umbrel-app.yml /umbrel/app-data/wellness-tracker/

# Create data directories
mkdir -p /umbrel/app-data/wellness-tracker/data
mkdir -p /umbrel/app-data/wellness-tracker/cockroach-data

# Set permissions
chown -R umbrel:umbrel /umbrel/app-data/wellness-tracker

# Start the app
cd /umbrel/app-data/wellness-tracker
docker compose up -d 