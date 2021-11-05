const Projects = require("./model");
const Tasks = require("../task/model");

function handleError(err, req, res, next) {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    prodMessage: "something went really wrong!",
  });
}

const binaryToBool = (req, res, next) => {
  Projects.getProjects().then((projects) => {
    const finalArr = [];

    projects.forEach((project) => {
      const validObj = {
        ...project,
        project_completed: project.project_completed === 0 ? false : true,
      };
      finalArr.push(validObj);
    });

    req.validArr = finalArr;

    next();
  });
};

const binaryToBoolTasks = (req, res, next) => {
  Tasks.getProjects().then((tasks) => {
    const finalArr = [];
    tasks.forEach((task) => {
      finalArr.push({
        ...task,
        task_completed: task.task_completed === 0 ? false : true,
      });
    });

    req.validArr = finalArr;
    next();
  });
};

module.exports = {
  handleError,
  binaryToBool,
  binaryToBoolTasks,
};
