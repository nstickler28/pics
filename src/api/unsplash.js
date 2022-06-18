import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JFqYfzaH4mTr3GilpPPliNGHpeyELJ4GGOUv_RgwNig'
    }
});