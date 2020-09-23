import AxiosService from './AxiosClient.service';

const baseURL = process.env.API_EXPLORER_URL+'&url='+process.env.TARGET_SITE;
const timeout = parseInt(process.env.API_EXPLORER_TIMEOUT || '5000');

const defaultConfig = {
    baseURL,
    timeout,
    header: {
        'Accept': 'application/json'
    }
};

class ApiExplorerService extends AxiosService {
    constructor(){
        super(defaultConfig)
    }
}

export default new ApiExplorerService();

