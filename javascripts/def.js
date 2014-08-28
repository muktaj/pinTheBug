//Define constants for points for squashing each type of bug and duration of every level
window.def = {
	BIGPOINTS : 1,
	MEDPOINTS : 3,
	SMALLPOINTS : 5,
	LEVELTIME : 20,
	HIGHSCORESTOSTORE : 10,
	

	getLevelTime : function(){
		return window.def.LEVELTIME;
	},

	getBigPoints : function(){
		return window.def.BIGPOINTS;
	},

	getMedPoints : function(){
		return window.def.MEDPOINTS;
	},

	getSmallPoints : function(){
		return window.def.SMALLPOINTS;
	},

	getHighScoresToStore : function(){
		return window.def.HIGHSCORESTOSTORE;
	}

}
//module.exports.getLevelTime = getLevelTime;
