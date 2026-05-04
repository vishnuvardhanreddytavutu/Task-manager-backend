const router = require("express").Router(); // ✅ MUST ADD THIS
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find()
    .populate("project")
    .populate("assignedTo");

  res.json(tasks);
});

// UPDATE TASK
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
});

module.exports = router;