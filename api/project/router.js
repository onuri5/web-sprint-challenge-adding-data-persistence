const express = require("express");
const Projects = require("./model");
const { handleError, binaryToBool } = require("./middleware");

const router = express.Router();

router.get("/", binaryToBool, (req, res, next) => {
  Projects.getProjects()
    .then(() => {
      res.status(200).json(req.validArr);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.addProject(req.body)
    .then((project) => {
      res.status(201).json({
        ...project,
        project_completed: project.project_completed === 0 ? false : true,
      });
    })
    .catch(next);
});

router.use(handleError);

module.exports = router;
