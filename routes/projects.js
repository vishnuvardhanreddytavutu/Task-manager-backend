const router = require("express").Router();
const auth = require("../middleware/auth");
const Project = require("../models/Project");

// ✅ Create Project (Admin only)
router.post("/", auth(["Admin"]), async (req, res) => {
  const project = await Project.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(project);
});

// ✅ Get all projects (Admin + Member)
router.get("/", auth(["Admin", "Member"]), async (req, res) => {
  const projects = await Project.find().populate("createdBy");
  res.json(projects);
});

module.exports = router;