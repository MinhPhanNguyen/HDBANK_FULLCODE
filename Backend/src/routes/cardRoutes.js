const express = require("express");
const mongoose = require("mongoose");
const Card = require("../models/cardModel");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/register", authenticate, async (req, res) => {
    const { cardNumber, expiryDate, cvv } = req.body;
    const owner = req.user.id;

    if (!cardNumber || !owner || !expiryDate || !cvv) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const newCard = new Card({ cardNumber, owner, expiryDate, cvv });
        await newCard.save();
        res.status(201).json({ message: "Card registered successfully", cardId: newCard._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/list/:ownerId", authenticate, async (req, res) => {
    const { ownerId } = req.params;

    if (ownerId !== req.user.id) {
        return res.status(403).json({ error: "Unauthorized access!" });
    }

    try {
        const cards = await Card.find({ owner: ownerId }).select("-cvv");
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
