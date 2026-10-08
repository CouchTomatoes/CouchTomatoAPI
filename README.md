CouchPotato API

This is what has been running on api.couchpota.to sinds 2013. It was never meant to be released to public, but I've decided to shut down the server it has been running on for these years.

I don't really have the steps on how to get it running. I think just copy the example.config.js to config.js, fill in the API keys and go from there. If anyone actually intends to run this locally, let me know, we can have a look together ;)

## Running it with Docker (CouchTomato)

1. `cp .env.example .env`, then paste your keys into `.env`. Every key comes with its sign-up steps and URL.
   TMDB and OMDb are required; the rest are optional.
2. `docker compose up -d --build`. The API listens on `127.0.0.1:3110`, with Redis next to it.
3. Smoke test: `curl http://127.0.0.1:3110/info/tt0133093` should return The Matrix with ratings.
4. After changing keys, run `docker compose up -d` and then `docker compose exec redis redis-cli FLUSHALL` to drop
   answers cached while a key was missing.

The `mdb`, `mi` and `veta` providers were the original author's private services. They are skipped unless a URL is
configured, because before this change a blank URL crashed the process on the first request.
