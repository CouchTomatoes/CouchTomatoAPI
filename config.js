// All secrets come from the environment (see .env.example) — never write a key into this file.
var env = process.env,
	list = function(v, dflt){ return (v || dflt).split(',').map(function(s){ return s.trim(); }).filter(Boolean); };

module.exports = {
	common: {
		'moviedb': {
			'apikey': env.TMDB_API_KEY || ''
		},
		// The original author's private IMDb proxy/mirror services. Unknown and gone — leave blank.
		'mdb': {
			'proxy_url': env.MDB_PROXY_URL || '',
			'info_url': env.MDB_INFO_URL || '',
			'eta_url': env.MDB_ETA_URL || '',
			'ismovie_url': env.MDB_ISMOVIE_URL || '',
			'timeout': 10000
		},
		'rotten': {
			'apikey': '',
			'timeout': 10000
		},
		'mi': {
			'url': env.MOVIEINSIDER_URL || '',
			'timeout': 10000
		},
		'omdb': {
			'apikey': env.OMDB_API_KEY || '',
			'timeout': 10000
		},
		'twitter': {
			consumer_key: env.TWITTER_CONSUMER_KEY || '',
			consumer_secret: env.TWITTER_CONSUMER_SECRET || '',
			redirect_url: encodeURI((env.PUBLIC_URL || 'http://localhost:3000') + '/authorize/twitter/')
		},
		'putio': {
			client_id: +(env.PUTIO_CLIENT_ID || 0),
			secret: env.PUTIO_SECRET || '',
			redirect_url: encodeURI((env.PUBLIC_URL || 'http://localhost:3000') + '/authorize/putio/')
		},
		'trakt': {
			client_id: env.TRAKT_CLIENT_ID || '',
			secret: env.TRAKT_CLIENT_SECRET || '',
			redirect_url: encodeURI((env.PUBLIC_URL || 'http://localhost:3000') + '/authorize/trakt/')
		},
		'veta': {
			'url': env.VETA_URL || '',
			'timeout': 10000
		},
		// Who may call the restricted routes without CouchPotato version headers. '*' = anyone
		// who can reach the port, so only use it when the port is bound to localhost/LAN.
		'whitelisted_ips': list(env.WHITELISTED_IPS, '::1,127.0.0.1'),
		'suggested_movies': list(env.SUGGESTED_MOVIES, 'tt0133093,tt0468569,tt1375666')
	},

	development: {},
	production: {}
};
