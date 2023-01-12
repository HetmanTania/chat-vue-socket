const apiService = require('../service/api-service');

class APIController {

    async API(req, res, next) {
        try {
            const { test } = req.body;
            const userData = await apiService.api(test);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    
}

module.exports = new APIController();