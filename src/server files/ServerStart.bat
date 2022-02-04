@echo off

call settings.bat

:start_server
echo Starting Cuboid Outpost Server...
java -server -Xms%MIN_RAM% -Xmx%MAX_RAM% -jar %SERVER_JAR% nogui
exit /B

goto start_server
