const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks");
}

function getProjects() {
  return db("projects as p")
    .leftJoin("tasks as t", "p.project_id", "t.task_id")
    .select(
      "p.project_name",
      "p.project_description",
      "task_id",
      "task_description",
      "task_notes",
      "task_completed"
    );
}

async function getTaskById(project_id) {
  return db("tasks").where({ project_id });
}

async function addTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTasks().where({ task_id }).first();
}

module.exports = {
  getTasks,
  addTask,
  getProjects,
  getTaskById,
};
