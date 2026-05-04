const router = require("express").Router();
const Project = require("../models/project");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

// CREATE PROJECT (Admin)
router.post("/", auth, role("Admin"), async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET PROJECTS
router.get("/", auth, async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;