import axios from "axios"
import { BASE_URL } from "../constants/constants"

export class HttpClient {
    createInstance() {
        this.instance = axios.create({
            baseURL: BASE_URL,
            headers: {
                "Content-Type": "application/json"
            }
        })
        this.initializeResponseInterceptor()
        return this.instance
    }

    initializeResponseInterceptor = () => {
        this.instance?.interceptors.response.use(
            this.handleResponse,
            this.handleError
        )
    }

    handleResponse = ({ data }) => data

    handleError = error => Promise.reject(error)
}
