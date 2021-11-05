const express = require("express");
const Resources = require("./model");
const { handleError } = require("../project/middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.use(handleError);

module.exports = router;
