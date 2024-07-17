import axios from 'axios';

export const httpClientPlugin = {

    
    get: async(url:string) => {
        const {data} = await axios.get(url);
        return data;
    },

    // post: (url, body) => {},
    // put: (url, body) => {},
    // delete: (url) => {},

};


