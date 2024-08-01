const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = {
    async getAllApplications() {
        try {
            const [rows] = await pool.query('SELECT * FROM applications');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    async createApplication(name, contact, email) {
        try {
            const [result] = await pool.query('INSERT INTO applications (name, contact, email) VALUES (?, ?, ?)', [name, contact, email]);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    },

    async deleteApplication(applicationId) {
        try {
            const [result] = await pool.query('DELETE FROM applications WHERE id = ?', [applicationId]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    },
};
