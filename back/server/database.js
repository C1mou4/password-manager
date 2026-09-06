import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config({ path: "../.env" });

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

db.connect((err) => {
	if (err) {
		console.error("❌ Erreur connexion DB:", err);
		process.exit(1);
	} else {
		console.log("✅ Connecté à MySQL");
	}
});

export default db;
