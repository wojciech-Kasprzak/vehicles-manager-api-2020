module.exports = function (app) {
  const func = require(`../controllers/${require("path").basename(
    __filename
  )}`)();

  app.get("/servicing", func.findAll);

  app.get("/servicing/:id", func.findOne);

  app.get("/servicing/car/:id", func.findOneByCar);

  app.post("/servicing", func.create);

  app.put("/servicing/:id", func.update);

  app.delete("/servicing/:id", func.delete);
};
