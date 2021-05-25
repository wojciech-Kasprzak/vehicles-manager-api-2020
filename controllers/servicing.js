module.exports = function (io, sequelize) {
  // const Polls = require("../models/polls.model.js")(sequelize);

  const models = require("../models/index.js");

  // console.log(models.Owners);

  var controllers = {};
  // const _io = io;

  controllers.findAll = (req, res) => {
    models.Servicing.findAll()
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
    models.Servicing.findByPk(req.params.id, {
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
    models.Servicing.findAll({ where: { CarId: req.params.id } })
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
    console.log("body.current -> ", req.body.current);
    req.body.current = new Date(req.body.current);
    req.body.current.setUTCHours(0, 0, 0, 0);
    req.body.current.setDate(req.body.current.getDate() + 1);
    console.log("req.body.current -> ", req.body.current);
    let nextDate = new Date(
      req.body.current.getFullYear() + req.body.valid,
      req.body.current.getMonth(),
      req.body.current.getDate()
    );
    nextDate.setUTCHours(0, 0, 0, 0);
    console.log("nextDate --> ", nextDate);
    req.body.next = nextDate;
    console.log(req.body);
    models.Servicing.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Fueling.",
        });
      });
  };

  controllers.update = (req, res) => {
    models.Servicing.update(req.body, { where: { id: req.params.id } })
      .then((data) => {
        if (data[0] == 1) {
          res.send({ message: "Fueling was updated successfully!" });
        }
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error updating Fueling with id " + req.params.id,
        });
      });
  };

  controllers.delete = (req, res) => {
    models.Servicing.destroy({
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
