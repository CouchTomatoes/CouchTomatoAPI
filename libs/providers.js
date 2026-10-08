var providers = ['omdb', 'mdb', 'tmdb', 'mi', 'veta', 'corruptnet'],
	apis_calls = ['eta', 'info', 'search', 'ismovie', 'validate'],
	apis = {};

// Loop over providers and merge the calls
// Providers that only work with a configured URL. The original author's private services
// (mdb/mi/veta) are gone; a blank URL used to crash the process on the first request.
var needs_url = {
	'mdb': function(s){ return s.mdb && s.mdb.info_url; },
	'mi': function(s){ return s.mi && s.mi.url; },
	'veta': function(s){ return s.veta && s.veta.url; }
};

providers.forEach(function(provider_name){
	if(needs_url[provider_name] && !needs_url[provider_name](global.settings)) return;

	var provider = require('./providers/' + provider_name)
	apis_calls.forEach(function(api){
		if(!provider[api]) return;

		if(!apis[api]) apis[api] = [];
		apis[api].push(provider[api]);

	});
});

// Bind param and callback
apis_calls.forEach(function(api){

	exports[api] = function(arg){
		var ret = [];
		(apis[api] || []).forEach(function(provider){
			ret.push(function(callback){
				provider(arg, callback);
			});
		});
		return ret
	}

});
