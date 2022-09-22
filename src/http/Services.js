import $api from ".";

export default class Service {
    static async login(data) {
        return $api.post('/auth/login', data)
    }

    static async getProtocols() {
        return $api.get('/protocols')
    }

    static async setProtocol(data) {
        return $api.post('/protocols', data)
    }

    static async passProtocol(data) {
        return $api.put('/protocols', data)
    }

    static async setMeeting(data) {
        return $api.post('/meetings', data)
    }

    static async getMeetings() {
        return $api.get('/meetings')
    }

    static getUsers() {
        return $api.get('/auth/users')
    }
}

