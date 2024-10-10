const db = require('../config/db');

exports.getExamples = (req, res) => {
  db.query('SELECT * FROM examples', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

exports.createExample = (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO examples (name) VALUES (?)', [name], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Example created.');
  });
};
