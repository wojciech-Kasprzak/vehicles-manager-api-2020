module.exports = function (app) {
  const func = require(`../controllers/${require("path").basename(
    __filename
  )}`)();

  app.get("/cars", func.findAll);

  app.get("/car/:id", func.findOne);

  app.post("/car", func.create);

  app.post("/car/report/:id", func.report);

  app.put("/car/:id", func.update);

  app.delete("/car/:id", func.delete);
};
