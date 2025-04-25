// http-common.js
import axios from 'axios';

export default axios.create({
    baseURL: 'https://musical-succotash-5wg5wvrv677fv5pw-8080.app.github.dev/api/auth',
    headers: {
        "Content-Type": "application/json",
    }
});