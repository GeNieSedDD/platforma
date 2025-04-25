// http-common.js
import axios from 'axios';

export default axios.create({
    baseURL: 'https://improved-eureka-4j6pgxxj7jrrfqr6g-8080.app.github.dev/api/auth',
    headers: {
        "Content-Type": "application/json",
    }
});