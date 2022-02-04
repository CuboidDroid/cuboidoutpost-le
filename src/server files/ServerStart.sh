#!/bin/sh

# Read the settings.
. ./settings.sh

# Start the server.
start_server() {
    java -server -Xms${MIN_RAM} -Xmx${MAX_RAM} -jar ${SERVER_JAR} nogui
}

echo "Starting Cuboid Outpost Server..."
start_server