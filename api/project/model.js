const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

async function addProject(project) {
  const [project_id] = await db("projects").insert(project);
  console.log(project_id);
  return getProjects().where({ project_id }).first();
}

module.exports = {
  getProjects,
  addProject,
};
