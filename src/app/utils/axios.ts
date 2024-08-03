import axios from "axios"

export let getData =async (url:string,) => {
    try {
        let response = await axios.get('http://localhost:3000/' + url, {
            headers: {
                "Content-Type": 'application/json'
            }
        })         
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

