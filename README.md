
# SpeedGoalsAPI

### Speed Goals App API wrapper

  

---

  

To use it in a test environnement, simply:

  

*  *steps* :

  

```js

$  git  clone  https://hbalty@bitbucket.org/hbalty/seedgoalsapi.git // clone repo

$  cd  seedgoalsapi  // change directory

$  npm  install  // installing thrid-party pacakages

$  nodemon  index.js  // launching server => default : listen 3000

```

  

**Authentification: **

  

The wrapper uses Json Web Tokens (jwt) for authentification. request your token directly from me ! However using a jwt you can generate as many token as you want.

  

you can create a user using the add user route :

```js

// create a user

curl  -i  http://localhost:3000/user/add\

-H  "Authorization: Bearer <TOKEN>"

```

  

```js

// consume api

curl  -i  http://localhost:3000/leagues \

-H  "Authorization: Bearer <TOKEN>"

```

  

**UPDATE : adding user favorite teams, leagues and fixtures **

The post request *body* should look like this : 
```js
{
	user_id : '<user-id>',
	team_id : '<team-id>'	
}
```
The post request *headers* shoud must have the content-type  : application/json header.  
request should look like this : 
```js
curl  -i  http://localhost:3000/leagues \
-H  "Authorization: Bearer <TOKEN>" \
-H "content-type: application/json" \
-X POST -d "user_id":"<user-id>","league-id":"33"
 
```

Routes : 
```js
// add favorite team
[POST] http://localhost:3000/favorite/team
// add favorite league
[POST] http://localhost:3000/favorite/league
// add favorite fixture
[POST] http://localhost:3000/league/favorite/fixture

```

  
  

**Available routes: **

  

leagues :

```js

// Get all leagues

http://localhost:3000/leagues

// Get a specific league infos

http://localhost:3000/league/:id

// getting teams standing in a sepecific league

http://localhost:3000/league/standing/:league_id

```

  

fixtures :

```js

// getting live matches

http://localhost:3000/live

// Get H2H history between two teams

http://localhost:3000/h2h/:firstTeamId/:secondTeamId

// Get match lineup

http://localhost:3000/lineup/:fixtureId

// Get fixtures by date

http://localhost:3000/lineup/:fixtureId

// Get fixtures by league

http://localhost:3000/fixture/league/:leagueId

// Get fixture by id

http://localhost:3000/fixture/id/:fixtureId

// Get fixture by date

http://localhost:3000/fixture/date/:date // date format : 01-10-2018

```

  

events :

```js

// Get fixture events

http://localhost:3000/event/:fixture_id

```

stats :

```js

// getting statistics of a team an a specific league

http://localhost:3000/stats/:league_id/:team_id

```

teams :

```js

// getting a specific team info

http://localhost:3000/teams/team/:team_id

// getting list of teams playing in a league

http://localhost:3000/teams/league/:league_id

```