import axios from 'axios';

const API_KEY = 'b5a7a12019471b2439fc28d16afefd1c';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // return a promise
    console.log('request', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}