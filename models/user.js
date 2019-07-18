var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullname:  'string',
    token: 'string',
    firebase_token: 'string',
    lastconnection: 'date',
    favorites: {
        leagues: [{league_id : 'string'}],
        teams: [{team_id : 'string'}],
        fixtures: [{fixture_id : 'string'}]
    }
  }); 

  userSchema.methods.hasFavoriteTeam = function(team_id){
    var hasIt = false ;
    for (let team of this.favorites.teams){
      if (team.team_id == team_id){
        hasIt = true ; 
        return hasIt; 
      }
    }
    return hasIt ; 
  }


  userSchema.methods.removeFavoriteTeam = function(team_id){
    for (let team of this.favorites.teams){
      if (team.team_id == team_id){
          this.favorites.teams.remove(team);
          return true ;
      }
    }
    return false ;
  }



  userSchema.methods.hasFavoriteLeague = function(league_id){
    var hasIt = false ;
    for (let league of this.favorites.leagues){
      if (league.league_id == league_id){
        hasIt = true ; 
        return hasIt; 
      }
    }
    return hasIt ; 
  }


  userSchema.methods.removeFavoriteLeague = function(league_id){
    for (let league of this.favorites.leagues){
      if (league.league_id == league_id){
          this.favorites.leagues.remove(league);
          return true ;
      }
    }
    return false ;
  }

  userSchema.methods.hasFavoriteFixture = function(fixture_id){
    var hasIt = false ;
    for (let fixture of this.favorites.fixtures){
      if (fixture.fixture_id == fixture_id){
        hasIt = true ; 
        return hasIt; 
      }
    }
    return hasIt ; 
  }


  userSchema.methods.removeFavoriteFixture = function(fixture_id){
    for (let fixture of this.favorites.fixtures){
      if (fixture.fixture_id == fixture_id){
          this.favorites.fixtures.remove(fixture);
          return true ;
      }
    }
    return false ;
  }

module.exports =  mongoose.model('User',userSchema);