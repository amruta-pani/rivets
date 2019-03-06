This project uses goecode, meta weather and api on water APIs to retrieve the nearby cities and gather weather information for one random nearby city.
Each module has JSDoc styled comments though the repo does not have the doc files generated.

Before Testing, run:

npm run setup //for the first time

npm start //assuming that nodemon is installed globally

(OR)

npm install
nodemon index.js

Usage:

http://localhost:3000/city/search/?q=Visakhapatnam

Header: {
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmlrYS5hbXJ1dGEucGFuaUBnbWFpbC5jb20iLCJnZW5kZXIiOiJtYWxlIiwiZmlyc3ROYW1lIjoiSGFudW1hbnRodSIsImxhc3ROYW1lIjoiSW5kcmFrYW50aSIsImp0aSI6IjZlNWY5M2IyLTRhY2ItNDM3NC05NzViLTJiMWMyZDNiYWQxZCIsImlhdCI6MTU1MDAzNjk5MiwiZXhwIjoxNTU1MjIwOTkyLCJpc3MiOiJhbWJpa2EuYW1ydXRhLnBhbmkiLCJhdWQiOiJhbWJpa2EuYW1ydXRhLnBhbmkifQ.Pp8kEgHKFmWHFREKcs0DR3IrEZXpF5OUv8dW3MkL3yw
}

This is a secured API and hence a Bearer JW token has to be sent in the header with 'Authorization' key. Any tokens created using the secret key available at TOKEN_SECRET in the .env file are valid.

The response consists of weather information from multiple sources of one random nearby city that resulted from metaweather API.
API on Water API provides water tag for a given lat long which is merged into the above weather information response.

Sample Output:

{
"weather_forecast_for_nearby_city": {
"onWater": false,
"consolidated_weather": [
{
"id": 6057056761020416,
"weather_state_name": "Clear",
"weather_state_abbr": "c",
"wind_direction_compass": "WNW",
"created": "2019-03-06T09:38:19.700945Z",
"applicable_date": "2019-03-06",
"min_temp": 13.713333333333333,
"max_temp": 31.246666666666666,
"the_temp": 26.01,
"wind_speed": 5.209295845595058,
"wind_direction": 302.9530451421986,
"air_pressure": 1012.34,
"humidity": 43,
"visibility": 9.997862483098704,
"predictability": 68
},
{
"id": 5072172676546560,
"weather_state_name": "Clear",
"weather_state_abbr": "c",
"wind_direction_compass": "N",
"created": "2019-03-06T09:38:22.612136Z",
"applicable_date": "2019-03-07",
"min_temp": 14.1,
"max_temp": 33.34666666666667,
"the_temp": 28.75,
"wind_speed": 3.72635369442456,
"wind_direction": 356.3630485212837,
"air_pressure": 1011.32,
"humidity": 31,
"visibility": 9.997862483098704,
"predictability": 68
},
{
"id": 4620447209488384,
"weather_state_name": "Clear",
"weather_state_abbr": "c",
"wind_direction_compass": "NNE",
"created": "2019-03-06T09:38:26.180936Z",
"applicable_date": "2019-03-08",
"min_temp": 15.126666666666665,
"max_temp": 33.54,
"the_temp": 28.43,
"wind_speed": 3.9526291789283916,
"wind_direction": 21.999999999999996,
"air_pressure": 1012.05,
"humidity": 26,
"visibility": 9.997862483098704,
"predictability": 68
},
{
"id": 4702692947525632,
"weather_state_name": "Clear",
"weather_state_abbr": "c",
"wind_direction_compass": "NNE",
"created": "2019-03-06T09:38:28.579395Z",
"applicable_date": "2019-03-09",
"min_temp": 15.766666666666666,
"max_temp": 34.44,
"the_temp": 29.11,
"wind_speed": 4.242176224184099,
"wind_direction": 16.60103295724103,
"air_pressure": 1012.76,
"humidity": 25,
"visibility": 9.997862483098704,
"predictability": 68
},
{
"id": 4797942974119936,
"weather_state_name": "Light Cloud",
"weather_state_abbr": "lc",
"wind_direction_compass": "WNW",
"created": "2019-03-06T09:38:31.678778Z",
"applicable_date": "2019-03-10",
"min_temp": 16.576666666666664,
"max_temp": 34.96,
"the_temp": 31.23,
"wind_speed": 4.4727259471353955,
"wind_direction": 285,
"air_pressure": 1013.67,
"humidity": 26,
"visibility": 9.997862483098704,
"predictability": 70
},
{
"id": 6303146273931264,
"weather_state_name": "Clear",
"weather_state_abbr": "c",
"wind_direction_compass": "WNW",
"created": "2019-03-06T09:38:34.592325Z",
"applicable_date": "2019-03-11",
"min_temp": 17.30333333333333,
"max_temp": 34.056666666666665,
"the_temp": 30.5,
"wind_speed": 5.186868421750311,
"wind_direction": 295.5139108905405,
"air_pressure": 1013.6,
"humidity": 28,
"visibility": 9.997862483098704,
"predictability": 68
}
],
"time": "2019-03-06T16:42:40.603390+05:00",
"sun_rise": "2019-03-06T06:20:20.107666+05:00",
"sun_set": "2019-03-06T18:11:49.380755+05:00",
"timezone_name": "zzz",
"parent": {
"title": "India",
"location_type": "Country",
"woeid": 23424848,
"latt_long": "21.786600,82.794762"
},
"sources": [
{
"title": "BBC",
"slug": "bbc",
"url": "http://www.bbc.co.uk/weather/",
"crawl_rate": 180
},
{
"title": "Forecast.io",
"slug": "forecast-io",
"url": "http://forecast.io/",
"crawl_rate": 480
},
{
"title": "HAMweather",
"slug": "hamweather",
"url": "http://www.hamweather.com/",
"crawl_rate": 360
},
{
"title": "OpenWeatherMap",
"slug": "openweathermap",
"url": "http://openweathermap.org/",
"crawl_rate": 360
},
{
"title": "Weather Underground",
"slug": "wunderground",
"url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
"crawl_rate": 720
},
{
"title": "World Weather Online",
"slug": "world-weather-online",
"url": "http://www.worldweatheronline.com/",
"crawl_rate": 360
},
{
"title": "Yahoo",
"slug": "yahoo",
"url": "http://weather.yahoo.com/",
"crawl_rate": 180
}
],
"title": "Pune",
"location_type": "City",
"woeid": 2295412,
"latt_long": "18.53611,73.85218",
"timezone": "Indian/Kerguelen"
}
}
