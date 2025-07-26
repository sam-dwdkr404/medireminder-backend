// backend/routes/reminderRoutes.js

const express = require("express");
const router = express.Router();
const Reminder = require("../models/reminderModel");

// CREATE reminder (POST /api/reminders)
router.post("/", async (req, res) => {
  try {
    const { medicineName, dosage, time, notes } = req.body;
    const newReminder = new Reminder({ medicineName, dosage, time, notes });
    await newReminder.save();
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create reminder" });
  }
});

// GET all reminders (GET /api/reminders)
router.get("/", async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reminders" });
  }
});

// DELETE a reminder (DELETE /api/reminders/:id)
router.delete("/:id", async (req, res) => {
  try {
    const reminder = await Reminder.findByIdAndDelete(req.params.id);
    if (!reminder) {
      return res.status(404).json({ error: "Reminder not found" });
    }
    res.json({ message: "Reminder deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete reminder" });
  }
});


router.put("/:id/taken", async (req, res) => {
  try {
    const updated = await Reminder.findByIdAndUpdate(
      req.params.id,
      { taken: true },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update taken status" });
  }
});



module.exports = router;
