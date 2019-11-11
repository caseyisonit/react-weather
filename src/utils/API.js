import axios from 'axios';

const weatherKey = process.env.REACT_APP_WEATHERBIT_API_KEY;

export default {
    getWeather: function(city) {
        //returning a promised object
        return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?days=7&units=I&key=${weatherKey}&city=${city}`)
    }
}