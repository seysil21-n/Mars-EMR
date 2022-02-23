import axios from "axios"
import App from "../App"

class APIs {
    constructor(){
        this.BASE_SERVER_URI = process.env.REACT_APP_SERVER_URI
        this.API_ENDPOINT = this.BASE_SERVER_URI + '/api'
    }


        get = async (endpoint) => {
        const response = await axios.get(this.API_ENDPOINT + endpoint)
        const {data, error} = response;

            if(data)
            {
                return data
            }

            if(!response.data)
            {
                return error
            }
    }

        post = async (endpoint , requestBody) => {
        const response = await axios.post(this.API_ENDPOINT + endpoint, requestBody)
        const {data, error} = response;

            if(data)
            {
                return data
            }

            if(!response.data)
            {
                return error
            }
    }
}

const APIREQUESTS = new APIs()

export default APIs
export {APIREQUESTS}