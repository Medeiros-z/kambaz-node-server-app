const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};

const getAssignmentTitle = (req, res) => {
  res.json(assignment.title);
};

const setAssignmentTitle = (req, res) => {
   const { newTitle } = req.params;
   assignment.title = newTitle;
   res.json(assignment);
};

const module = {
    id: "one", name: "module1",
    description: "Working with Express.js",
    course: "101",
};

const getModuleName = (req, res) => {
    res,json(module.name);
}

const setModuleName = (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
};

const setModuleDescription = (req, res) => {
    const { newDesc } = req.params;
    module.description = newDesc;
    res.json(module);
}

const setAssignmentScore = (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(module);
}

const setAssignmentCompleted = (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted;
    res.json(module);
}

export default function WorkingWithObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getModule = (req, res) => {
    res.json(module);
  }
  app.get("/lab5/assignment/title", getAssignmentTitle)
  app.get("/lab5/assignment", getAssignment);
  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
  app.get("/lab5/module", getModule);
  app.get("/lab5/module/name", getModuleName);

  app.get("/lab5/module/name/:newName", setModuleName);
  app.get("/lab5/module/description/:newDescription", setModuleDescription);
  app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
  app.get("/lab5/assignment/completed/:newCompleted", setAssignmentCompleted);
  
};
