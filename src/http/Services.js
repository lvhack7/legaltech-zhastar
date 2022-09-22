import $api from ".";

export default class Service {
    static async login(data) {
        return $api.post('/login', data)
    }
}

