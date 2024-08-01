const applicationDao = require('../dao/applicationDao');

module.exports = {
    async getAllApplications() {
        try {
            return await applicationDao.getAllApplications();
        } catch (error) {
            throw new Error('Failed to get applications: ' + error.message);
        }
    },

    async createApplication(name, contact, email) {
        try {
            return await applicationDao.createApplication(name, contact, email);
        } catch (error) {
            throw new Error('Failed to create application: ' + error.message);
        }
    },

    async deleteApplication(applicationId) {
        try {
            return await applicationDao.deleteApplication(applicationId);
        } catch (error) {
            throw new Error('Failed to delete application: ' + error.message);
        }
    },
};
