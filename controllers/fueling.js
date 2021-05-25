module.exports = function (io, sequelize) {
  // const Polls = require("../models/polls.model.js")(sequelize);

  const models = require("../models/index.js");
  const helpers = require("../helpers/index.js");

  // console.log(models.Owners);

  var controllers = {};
  // const _io = io;

  controllers.findAll = (req, res) => {
    models.Fueling.findAndCountAll({
      limit: 15,
      include: [
        {
          model: models.Car,
        },
      ],
      order: [["id", "DESC"]],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not download Fueling lists.",
        });
      });
  };

  controllers.findOne = (req, res) => {
    models.Fueling.findByPk(req.params.id, {
      include: [
        {
          model: models.Car,
        },
      ],
    })
      .then((data) => {
        res.send(data.get());
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes.",
        });
      });
  };

  controllers.findOneByCar = (req, res) => {
    models.Fueling.findAll({
      where: { CarId: req.params.id },
      order: [["id", "DESC"]],
      limit: 15,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes.",
        });
      });
  };

  controllers.create = (req, res) => {
    req.body.totalPrice = helpers.fuel.totalPrice(
      req.body.amountFuel,
      req.body.price
    );
    req.body.averageFuelConsumption = helpers.fuel.averageFuelConsumption(
      req.body.amountFuel,
      req.body.kilometers
    );

    req.body.date = new Date();

    models.Fueling.create(req.body).then(function (data) {
      res.send(data);
    });
  };

  controllers.update = (req, res) => {
    req.body.totalPrice = helpers.fuel.totalPrice(
      req.body.amountFuel,
      req.body.price
    );
    req.body.averageFuelConsumption = averageFuelConsumption(
      req.body.amountFuel,
      req.body.kilometers
    );
    models.Fueling.update(req.body, {
      where: { id: req.body.id },
    })
      .then(function (data) {
        res.send({ message: "Fueling was updated successfully!" });
      })
      .catch(function (err) {
        console.log("Err ->", err);
      });
  };

  controllers.delete = (req, res) => {
    models.Fueling.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send({ message: "Fueling was deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete Fueling with id " + req.params.id,
        });
      });
  };

  return controllers;
};
