/**
 * Home page: what this API is and every endpoint, with examples you can click.
 */
var endpoints = [
	['GET', '/info/tt0133093', 'Movie info by IMDb id: titles, year, plot, genres, runtime, IMDb rating/votes, posters (TMDB + OMDb merged).'],
	['GET', '/search/the matrix 1999', 'Search movies by name (optionally ending in a year). ?limit=5'],
	['GET', '/ismovie/tt0133093', 'Is this IMDb id a movie (not a TV show)? Empty {} = unknown; CouchTomato then assumes yes.'],
	['GET', '/ismovie/tt0903747', '…a TV show, for comparison (Breaking Bad).'],
	['GET', '/eta/tt0133093', 'Release dates (DVD / theater / Blu-ray). Needs a release-date source; zeros until one is configured.'],
	['GET', '/validate/The.Matrix.1999.1080p.BluRay.x264-GROUP', 'Check a release name against release databases (fake/nuked releases).'],
	['GET', '/suggest/?movies=tt0133093', 'Suggestions based on movies in a library (built from crowd data; thin with one user).'],
	['GET', '/messages/', 'Notices shown in CouchTomato\'s notification bell.'],
	['GET', '/updater/', 'Where the updater downloads source zips from.']
];

var esc = function(s){
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

exports.index = function(req, res) {

	var rows = endpoints.map(function(e){
		return '<tr><td><code>' + e[0] + '</code></td><td><a href="' + esc(encodeURI(e[1])) + '"><code>' + esc(e[1]) + '</code></a></td><td>' + esc(e[2]) + '</td></tr>';
	}).join('');

	res.type('text/html');
	res.send('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
		'<title>CouchTomato API</title><style>' +
		':root{color-scheme:light dark;--bg:#fff;--fg:#1d1d1f;--mute:#6b6b70;--line:#e3e3e8;--accent:#c0392b}' +
		'@media (prefers-color-scheme:dark){:root{--bg:#161618;--fg:#ececf0;--mute:#9a9aa2;--line:#2c2c31;--accent:#ff6b5b}}' +
		'body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 system-ui,sans-serif}' +
		'main{max-width:960px;margin:0 auto;padding:24px 16px}h1{margin:0 0 4px}p{color:var(--mute);margin:0 0 20px}' +
		'table{width:100%;border-collapse:collapse}td{padding:10px 8px;border-top:1px solid var(--line);vertical-align:top}' +
		'a{color:var(--accent)}code{font:13px ui-monospace,Menlo,monospace;word-break:break-all}' +
		'@media (max-width:600px){td:first-child{display:none}}' +
		'</style></head><body><main><h1>🍅 CouchTomato API</h1>' +
		'<p>Self-hosted replacement for the retired api.couchpota.to. Every link below is a live example; responses are JSON, cached in Redis.</p>' +
		'<table>' + rows + '</table></main></body></html>');
};
