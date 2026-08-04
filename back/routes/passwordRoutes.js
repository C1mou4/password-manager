const express = require("express");
const router = express.Router();
const PasswordController = require("../controllers/passwordController");

// Routes pour les mots de passe
router.get("/create-table", PasswordController.createTable);
router.post("/add", PasswordController.addPassword);
router.get("/all", PasswordController.getAllPasswords);
router.delete("/:id", PasswordController.deletePassword);
router.delete("/drop-table", PasswordController.dropTable);

module.exports = router;