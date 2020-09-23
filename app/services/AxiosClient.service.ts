import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


class AxiosService {
    client: AxiosInstance;;
    constructor({ baseURL, timeout, headers }: AxiosRequestConfig) {
        this.client = axios.create({
            baseURL,
            timeout,
            headers
        })
    }

    get = (url: string = '') => {
        return this.client.get(url);
    }

}

export default AxiosService;