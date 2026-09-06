import cors from "cors";
import express from "express";
import db from "./database.js";

const app = express();
const port = 3006;

app.use(express.json());
app.use(cors());

// Route de base test
app.get("/", (_req, res) => {
	res.send("🚀 Backend Password Manager");
});

// Route de création test
app.get("/test", (_req, res) => {
	res.send({ message: "OK" });
	console.clear();
	console.log("API OK");
});

// Enregistrement d'un mot de passe
app.post("/create", (req, res) => {
	const { login, password } = req.body;
	const query = "INSERT INTO password (login, password) VALUES (?, ?)";
	db.query(query, [login, password]);
	res.send(`Mot de passe créer : ${login} ${password}`);
});

app.put("/delete", (req, res) => {
	const { id } = req.body;
	const requete = `DELETE FROM password WHERE id = ${id}`;
	db.query(requete);
	res.send("Mot de passe supprimé");
});

// Lancement du backend
app.listen(port, () => {
	console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});
