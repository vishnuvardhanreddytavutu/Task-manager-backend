const router = require("express").Router();
const Project = require("../models/Project");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// GET DASHBOARD DATA
router.get("/", auth, async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();

    const totalTasks = await Task.countDocuments();

    const completedTasks = await Task.countDocuments({ status: "Done" });

    const pendingTasks = await Task.countDocuments({ status: "Todo" });

    res.json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;