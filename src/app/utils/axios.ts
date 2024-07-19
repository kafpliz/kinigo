import axios from "axios"

export let getData =async (token:string, url:string) => {
    try {
        let response = await axios.get('https://api.kinopoisk.dev/'+url, {
            headers: {
                'X-API-KEY': token
            }
         })         
         return response.data
    } catch (error) {
        console.log(error);
        
    }
}

