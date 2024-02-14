import {HttpClient} from "./HttpClient"
import {BASE_URL} from "../constants/constants"

const transform = response => {
    return new Promise((resolve, reject) => {
        resolve(response.result)
        reject(response.error)
    })
}

export class BaseRepository extends HttpClient {
    async get(id) {
        const instance = this.createInstance()
        return await instance
            .get(`${BASE_URL}/${id}`)
            .then(transform)
    }

    async getMany() {
        const instance = this.createInstance()
        return await instance
            .get(`${BASE_URL}/all`)
            .then(transform)
    }

    async create(item) {
        const instance = this.createInstance()
        return await instance
            .post(`${BASE_URL}/upload`, item, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then(transform)
    }

    async delete(id) {
        const instance = this.createInstance()
        return await instance
            .delete(`${BASE_URL}/${id}`)
            .then(transform)
    }
}
