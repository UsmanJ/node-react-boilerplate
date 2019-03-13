import Tariff from '../models/tariffModel';

module.exports = {
  getTarrifs(req, res) {
    Tariff.find({}, (err, tariffs) => {
      res.send(tariffs);
    });
  },
};
