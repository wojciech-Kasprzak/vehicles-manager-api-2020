module.exports = function (app) {
  const func = require(`../controllers/${require("path").basename(
    __filename
  )}`)();

  app.get("/fueling", func.findAll);

  app.get("/fueling/:id", func.findOne);

  app.get("/fueling/car/:id", func.findOneByCar);

  app.post("/fueling", func.create);

  app.put("/fueling/", func.update);

  app.delete("/fueling/:id", func.delete);
};
