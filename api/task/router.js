const express = require("express");
const Tasks = require("./model");
const { handleError, binaryToBoolTasks } = require("../project/middleware");

const router = express.Router();

router.get("/", binaryToBoolTasks, (req, res, next) => {
  // Tasks.getProjects()
  //   .then(() => {
  //     res.status(200).json(req.validArr);
  //   })
  //   .catch(next);
  // Tried to implement but wouldn't return all tasks.

  Tasks.getTasks()
    .then(() => {
      res.status(200).json(req.validArr);
    })
    .catch(next);
});

router.post("/", binaryToBoolTasks, (req, res, next) => {
  Tasks.addTask(req.body)
    .then((obj) => {
      res.status(201).json({
        ...obj,
        task_completed: obj.task_completed === 0 ? false : true,
      });
    })
    .catch(next);
});

router.use(handleError);

module.exports = router;
