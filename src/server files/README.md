# Server Setup Guide

Set up your Forge Server with version:

**`forge-1.16.5-36.2.26.jar`**

You can find out how to do that manually by reading this article on the Minecraft Wiki: [Setting up a Minecraft Forge server](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_Minecraft_Forge_server).

If you're using a server host, you will hopefully be able to choose the version and have it set up for you just by picking the above version.

Essentially, once you have a Minecraft Forge Server up and running, copy the contents of the ZIP file containing this README.md file into the server instance root, then keep reading...

## Recommended Settings for `server.properties`

The following settings in `server.properties` are recommended for servers:

```
level-type=skyblockbuilder\:custom_skyblock
allow-flight=true
difficulty=2
max-tick-time=-1
view-distance=8
```

**The reasoning behind these is as follows:**

* `level-type=skyblockbuilder\:custom_skyblock` - this MUST be set this way to ensure that the overworld is correctly generated with the Cuboid Outpost(s) in it. If you have accidentally already generated a world, either:
	* Stop the server, ensure the `level-type` setting is correct, change the `level-name=world` to something like `level-name=cuboid`, and restart the server, in which case a new `cuboid` folder will be used instead of the previously created `world` folder; 
	
	**...OR...**
	
	* Stop the server, delete the `world` folder, ensure the `level-type` setting is correct, and restart the server, in which case a new `world` folder will be created correctly when the server starts up again.
* `allow-flight=true` - there are things in the pack that let you fly. 
  If false, players might be kicked by the server.
* `difficulty=2` - this equates to normal difficulty, which is what the pack has been designed for.
* `max-tick-time=-1` - this stops the server from crashing when generating large structures, or a large number of chunks (see "Pre-Generating Chunks" section below)
* `view-distance=8` - this controls the distance that the server will generate chunks for from the player position. This is the recommended maximum. For servers expecting a large number of players, or where lag is proving to be a problem, this can be dropped to 6 or 7 if required.

## Pre-Generating Chunks

Since the overworld is basically flat and only contains one kind of structure which is fairly small, you probably don't need to worry about pre-generating chunks for the overworld (especially since individual outposts should be quite some distance apart)

If you do decide to pre-generate chunks, you'll probably want to restrict doing so to the nether, the end, and the final dimension - the Cuboid Overworld (resource id: `cuboidmod:cuboid_overworld`). I'm also going to assume you know what you're doing, or are willing to seek advice elsewhere as it's not something I personally know much about at the time of writing this! (i.e. please **don't ask me for help on this!**)

## If not running on a server host

If running on a server host, you probably won't need these - typically this stuff is just managed via your server host's control panel, and most ask you not to use startup scripts like this...

However, if you're running your own server, I've included some basic scripts as follows in case you are not sure how to start up your server:

### For Windows

Edit `settings.bat` and set the memory to match what you want to allocate. The default is a minimum of 2Gb and a max of 8Gb.

Run `ServerStart.bat` to start up the server. It will probably fail the first time you run it due to EULA not being accepted. This is totally normal and expected. You will need to manually edit the `eula.txt` file and change `false` to `true` to in a text editor to indicate your acceptance of Mojang's End User License Agreement. Running `ServerStart.bat` again should get your server up and running.

### For Linux

Edit `settings.sh` and set the memory to match what you want to allocate. The default is a minimum of 2Gb and a max of 8Gb.

Run `ServerStart.sh` to start up the server. It will probably fail the first time you run it due to EULA not being accepted. This is totally normal and expected. You will need to manually edit the `eula.txt` file and change `false` to `true` to in a text editor to indicate your acceptance of Mojang's End User License Agreement. Running `ServerStart.sh` again should get your server up and running.

# Upgrading

To upgrade, the process is basically the same as installing for the first time, except that if you have made any custom changes to config files, you will need to re-apply them after the upgrade has taken place.

Follow these steps:
* stop your server
* I recommend that you backup your server files at this point in case you need to go back to the previous state if the upgrade fails
* delete the contents of the mods folder on your server (if you have added additional mods on your server, you won't want to delete those, or if you do, you will just have to put them back again after the upgrade)
* copy the contents of this ZIP file into your server root (just)
* double-check the settings in config, especially if you previously made changes
* start your server

# Setting up for multiple players

Behind the scenes, Cuboid Outpost uses [Skyblock Builder](https://github.com/MelanX/SkyblockBuilder) to create the "island" (Outpost) that players spawn on. What this means is that all players will spawn on the "main island" - i.e. the same outpost!

If you are wanting to provide players on your server with the option to create their own islands, here's what you should consider doing before people start joining your server...

## The Cuboid Outpost Server Guide Book

By default, on a server players will be given a patchouli book on first joining that explains the commands available to them. Hopefully this will be enough!

If you do not want the book to be given to players, open the file in the kubejs/... folder called `server_guide.js` and change "true" to "false" on the following line:

```
var giveServerGuide = true as bool;
```

If you do not want the book to be craftable by players, change "true" to "false" on the following line:

```
var addRecipe = true as bool;
```

If you want to make changes to the book, or provide your own, I will leave that up to you to figure out!

**Note that if you're doing an upgrade and previously changed these settings, you will need to change them again after the upgrade.**

## Create a spawn area (optionally with instructions)

* Get onto your server with op permissions.
* Ensure that your spawn area is protected (I recommend both using the spawn protection setting in the `server.properties` file as well as using FTB Chunks to claim your spawn area as an extra precaution).
* Clear out the initial starter area and build some sort of spawn area that you want to use as your server's world spawn. If you decide not to use the Guide Book above, a simple idea here might be to just keep the "shell" of the existing outpost that was generated, and put up a bunch of signs explaining the options available to players and rules for your server.

The details of the commands available can be found in the [Skyblock Builder readme](https://github.com/MelanX/SkyblockBuilder/blob/1.16.x/README.md) - just in case that ever "disappears", what follows is the stuff you need to know (pretty-much copy-pasted from that README file in case it gets removed at some point in the future).

## Check settings

Open up `config/skylblockbuilder/common-config.json5` using a text editor.

Look for the "Utility" section and change settings to match the experience you want to offer players on your server.

The defaults would probably be a good place to start. They mean that teams must be created by server admins, but once a team is created, users can pretty-much manage their team themselves. This would be better for an "open" server so as to stop too many Outposts being created by people just popping in.

If yours is a "closed" server - i.e. not open to the general public, and you trust the players on there to behave themselves, then you might want to consider setting the "createOwnTeam" value to true so that the workload on admins is a bit less.

Depending on how nice you are or aren't, you may also want to change the setting under "Inventory" to stop players dropping all their stuff when they leave / get kicked from a team - but that's up to you!

**Note that if you're doing an upgrade and previously changed these settings, you will need to change them again after the upgrade.**

### Normal user

#### Listing teams
Everyone can list the teams. For that, you can use `/skyblock list <name>`. That will list either all the teams if no name is provided or the names of all players in a team.

#### Teleporting back to home island
If home command is enabled in the config, you can teleport back to your teams island with `/skyblock home`.

#### Teleporting to spawn island
If teleporting to spawn is enabled in the config, you can teleport to spawn island with `/skyblock spawn`.

#### Visiting other islands
If visits are enabled in the config, and a team enabled visiting, you can visit an island with `/skyblock visit <team>`.

#### Enable visiting
You can see your teams current visiting state with `/skyblock team allowVisit` and enable/disable it with `/skyblock team allowVisit <true/false>`.

#### Create an own island
If users can create islands with their own command, you can use `/skyblock create <name> <players>`. This will create a team, and the given players will be added to the new team. If no players are given, the user who executes the command will be added to the team. If no name is given, a random name will be generated.

#### Rename team island
You can rename a/your team by using `/skyblock team <new name> <team name>`. `<team name>` is optional. Can be used by any team member. Users with permission level 2 could also edit other teams' name.

#### Modify spawns
If enabled in the config, you can modify spawns from your team. You can add them with `/skyblock team spawns add <pos>`. If no position is given, the current position will be used. Remove them with `/skyblock team spawns remove <pos>`. Same as before: position is optional. For users with permission level 2: `/skyblock team spawns reset <team>` will reset the spawn points to the default ones. To add the spawns, you need to be within the range specified in the config.

### Invitations

#### Inviting users
Everyone in a team can invite other players. For that, you can use `/skyblock invite <player>`. That will send an invitation to the given player. Only players with no team can be invited.

#### Accepting invitations
Everyone with an invitation can accept them. You can only accept invitations if you're in no team. For that, you use the command `/skyblock accept <team>`. You can also decline an invitation by using the command `/skyblock decline <team>`.

### Join requests

#### Sending a join request
You can send a join request to all teams if you're currently in no team by using `/skyblock join <team>`. That will send a request to the team and each player in the team can accept or deny your request.

#### Accepting requests
Each user of a team can use `/skyblock team accept <player>` to accept the given player. That will teleport the player to your island. You can also deny the request by using `/skyblock team deny <player>`.

#### Disabling requests
You can see your teams current join request state with `/skyblock team allowRequests` and enable/disable it
with `/skyblock team allowRequests <true/false>`.

### Using teams
Only an operator with permission level 2 or higher can change anything in the `/skyblock manage` category.

#### Creating teams
Use the `/skyblock manage teams create <name>` command to generate a team with the given name. If no name is provided, a random name will be generated.

Alternatively (good for servers) you can use `/skyblock manage teams createAndJoin <name>` to create the team and join it.

#### Deleting teams
Use the `/skyblock manage teams delete <name>` to delete the team with the given name. WARNING! This cannot be undone. The island will still exist but you can't re-bind a new team to that island. If users are in the team, they will be teleported to spawn after dropping all their items.

#### Clearing teams
Because teams can be empty, you can "clear" all islands. If you use `/skyblock manage teams clear <name>`, all empty teams will be deleted as in [Deleting teams](#deleting-teams).

If you provide a team name, all players from this team will be removed and teleported to spawn island.

#### Joining a team
An operator need to add players to a team. For that, they need to use `/skyblock manage addPlayer <player> <team_name>`. Then the player will be teleported to the teams' island.

#### Leaving a team
An operator need to remove players from a team. For that, they need to use `/skyblock manage kickPlayer <player>`. The removed player will be teleported back to spawn after dropping all the items in the inventory.

If you're not op and want to leave your team, you can simply type in `/skyblock leave`. You will drop all your items and be teleported to spawn.