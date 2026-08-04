import "dotenv/config";
import "mysql2/promise";

const db = mysql.createConnection({
	host: path.DB_HOST,
	port: path.DB_PORT,
	user: path.DB_USER,
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

module.exports = db;
