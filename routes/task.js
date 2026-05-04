const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// ✅ Create Task (Admin only)
router.post("/", auth(["Admin"]), async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// ✅ Get Tasks (Admin + Member)
router.get("/", auth(["Admin", "Member"]), async (req, res) => {
  const tasks = await Task.find()
    .populate("project")
    .populate("assignedTo");
  res.json(tasks);
});

// ✅ Update Task (Admin only)
router.put("/:id", auth(["Admin"]), async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(task);
});

module.exports = router;