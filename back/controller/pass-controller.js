const PasswordModel = require("../models/passwordModel");

class PasswordController {
	// Créer la table
	async createTable(_req, res) {
		try {
			await PasswordModel.createTable();
			res.status(200).json({
				success: true,
				message: "Table créée avec succès",
			});
		} catch (error) {
			console.error("Erreur création table:", error);
			res.status(500).json({
				success: false,
				error: error.message,
			});
		}
	}

	// Ajouter un mot de passe
	static async addPassword(req, res) {
		try {
			const { url, email, password } = req.body;

			if (!url || !email || !password) {
				return res.status(400).json({
					success: false,
					error: "URL, email et password sont requis",
				});
			}

			const result = await PasswordModel.addPassword(url, email, password);
			res.status(201).json({
				success: true,
				message: "Mot de passe ajouté",
				id: result.insertId,
			});
		} catch (error) {
			console.error("Erreur ajout password:", error);
			res.status(500).json({
				success: false,
				error: error.message,
			});
		}
	}

	// Récupérer tous les mots de passe
	static async getAllPasswords(_req, res) {
		try {
			const passwords = await PasswordModel.getAllPasswords();
			res.status(200).json({
				success: true,
				data: passwords,
			});
		} catch (error) {
			console.error("Erreur récupération passwords:", error);
			res.status(500).json({
				success: false,
				error: error.message,
			});
		}
	}

	// Supprimer un mot de passe
	static async deletePassword(req, res) {
		try {
			const { id } = req.params;
			await PasswordModel.deletePassword(id);
			res.status(200).json({
				success: true,
				message: `Mot de passe ${id} supprimé`,
			});
		} catch (error) {
			console.error("Erreur suppression password:", error);
			res.status(500).json({
				success: false,
				error: error.message,
			});
		}
	}

	// Supprimer la table
	static async dropTable(_, res) {
		try {
			await PasswordModel.dropTable();
			res.status(200).json({
				success: true,
				message: "Table supprimée",
			});
		} catch (error) {
			console.error("Erreur suppression table:", error);
			res.status(500).json({
				success: false,
				error: error.message,
			});
		}
	}
}

module.exports = PasswordController;
