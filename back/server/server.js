const express = require("express");
const app = express();
const port = 3006;

// Import des routes
const routes = require("./routes/passwordRoutes");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
	res.send("🚀 Backend Password Manager");
});

app.use("/api/passwords", routes);

// Démarrage du serveur
app.listen(port, () => {
	console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
	console.log(`📝 Routes disponibles:`);
	console.log(`  GET  /api/passwords/create-table - Créer la table`);
	console.log(`  POST /api/passwords/add - Ajouter un mot de passe`);
	console.log(`  GET  /api/passwords/all - Récupérer tous les mots de passe`);
	console.log(`  DELETE /api/passwords/:id - Supprimer un mot de passe`);
	console.log(`  DELETE /api/passwords/drop-table - Supprimer la table`);
});
