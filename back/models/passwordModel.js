const db = require("../config/database");

class PasswordModel {
	// Créer la table
	createTable() {
		return new Promise((resolve, reject) => {
			const sql = `
                CREATE TABLE IF NOT EXISTS password (
                    id INT AUTO_INCREMENT PRIMARY KEY, 
                    url VARCHAR(255) NOT NULL, 
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;
			db.query(sql, (err, result) => {
				if (err) reject(err);
				else resolve(result);
			});
		});
	}

	// Ajouter un mot de passe
	static addPassword(url, email, password) {
		return new Promise((resolve, reject) => {
			const sql =
				"INSERT INTO password (url, email, password) VALUES (?, ?, ?)";
			db.query(sql, [url, email, password], (err, result) => {
				if (err) reject(err);
				else resolve(result);
			});
		});
	}

	// Récupérer tous les mots de passe
	static getAllPasswords() {
		return new Promise((resolve, reject) => {
			const sql = "SELECT * FROM password ORDER BY created_at DESC";
			db.query(sql, (err, results) => {
				if (err) reject(err);
				else resolve(results);
			});
		});
	}

	// Récupérer un mot de passe par ID
	static getPasswordById(id) {
		return new Promise((resolve, reject) => {
			const sql = "SELECT * FROM password WHERE id = ?";
			db.query(sql, [id], (err, results) => {
				if (err) reject(err);
				else resolve(results[0]);
			});
		});
	}

	// Supprimer un mot de passe
	static deletePassword(id) {
		return new Promise((resolve, reject) => {
			const sql = "DELETE FROM password WHERE id = ?";
			db.query(sql, [id], (err, result) => {
				if (err) reject(err);
				else resolve(result);
			});
		});
	}

	// Supprimer la table
	static dropTable() {
		return new Promise((resolve, reject) => {
			const sql = "DROP TABLE IF EXISTS password";
			db.query(sql, (err, result) => {
				if (err) reject(err);
				else resolve(result);
			});
		});
	}
}

module.exports = PasswordModel;
