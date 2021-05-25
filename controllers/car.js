module.exports = function (io) {
  // const Polls = require("../models/polls.model.js")(sequelize);

  const models = require("../models/index.js");
  const helpers = require("../helpers/index.js");
  // console.log(models.Owners);

  var controllers = {};
  // const _io = io;

  controllers.findAll = (req, res) => {
    models.Car.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not download car lists.",
        });
      });
  };

  controllers.findOne = (req, res) => {
    models.Car.findByPk(req.params.id, {
      include: [
        {
          model: models.Fueling,
        },
        {
          model: models.Servicing,
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

  controllers.create = (req, res) => {
    // req.body.dateRegistration = req.body.dateRegistration.toISODate();
    // console.log(eq.body);
    req.body.milage;
    req.body.startMileage = req.body.milage;
    models.Car.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Car.",
        });
      });
  };

  controllers.update = (req, res) => {
    models.Car.update(req.body, { where: { id: req.params.id } })
      .then((data) => {
        if (data[0] == 1) {
          res.send({ message: "Car was updated successfully!" });
        }
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error updating Car with id " + req.params.id,
        });
      });
  };

  controllers.delete = (req, res) => {
    models.Car.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send({ message: "Car was deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete car with id " + req.params.id,
        });
      });
  };

  controllers.report = (req, res) => {
    models.Car.findByPk(req.params.id, {
      include: [
        {
          model: models.Fueling,
        },
      ],
    })
      .then((data) => {
        let filtered = helpers.report.filterByDate(data.Fuelings, {
          month: req.body.month,
          year: req.body.year,
        });

        if (filtered) {
          data = data.get();
          data.Fuelings = filtered;
          data.Report = helpers.report.count(filtered);
        }
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes.",
        });
      });
  };

  return controllers;
};
