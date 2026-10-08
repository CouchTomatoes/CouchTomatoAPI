/**
 * Check if IMDB id is a movie
 */
exports.imdb = function(req, res) {

	var imdb = 'tt'+req.params.imdb;

	api.isMovie(imdb, function(result){

		res.type('application/json');
		// Only answer when we know. CouchTomato treats an empty reply as "assume it's a movie";
		// {"is_movie": {}} would read as "no" and block adding the movie.
		res.json(result === true || result === false ? {'is_movie': result} : {});

	});

};