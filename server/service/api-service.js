class APIService {

    async api(test) {
        if (test) return { test };
        return { test: 'EMPTY' };
    }
}

module.exports = new APIService();