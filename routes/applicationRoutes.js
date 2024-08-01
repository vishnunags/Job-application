const express = require('express');
const router = express.Router();
const applicationService = require('../service/applicationService');

// Get all applications (if needed)
router.get('/applications', async (req, res) => {
    try {
        const applications = await applicationService.getAllApplications();
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new application
router.post('/applications', async (req, res) => {
    const { name, contact, email } = req.body;
    try {
        const applicationId = await applicationService.createApplication(name, contact, email);
        res.status(201).json({ id: applicationId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an application (if needed)
router.delete('/applications/:id', async (req, res) => {
    const applicationId = req.params.id;
    try {
        const success = await applicationService.deleteApplication(applicationId);
        if (success) {
            res.status(200).json({ message: 'Application deleted successfully' });
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
