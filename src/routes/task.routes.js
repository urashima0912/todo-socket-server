const { Router } = require("express");
const taskModels = require("../models/task.models");

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { title, description, photo } = req.body;
    const task = await taskModels.create({ title, description, photo });
    return res.status(201).json({ task });
  } catch (e) {
    return res.json({ error: e });
  }
});

router.get("/all", async (req, res) => {
  const tasks = await taskModels.find();
  return res.json({ tasks });
});

module.exports = router;
