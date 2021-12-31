const getDb = require('../services/db');

//SQL Injection
exports.create = async (req, res) => {
  const db = await getDb();
  const { name, genre } = req.body;

  try {
    await db.query('INSERT INTO Artist (name, genre) VALUES (?, ?)', [
      name,
      genre,
    ]);

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500).json(err);
  }

  db.close();
};

// Code without SQL Injection
//exports.create = async (req, res) => {
//   const db = await getDb();
//   const { name, genre } = req.body;

//   try {
//     await db.query(
//       `INSERT INTO Artist (name, genre) VALUES ('${name}', '${genre}')`
//     );

//     res.sendStatus(201);
//   } catch (err) {
//     res.sendStatus(500).json(err);
//   }

//   db.close();
// };

// the above written in a different way

// const getDb = require('../services/db');

// const createArtistController = async (req, res) => {
//   const db = await getDb();
//   const artistName = req.body.name;
//   const artistGenre = req.body.genre;
//   try {
//     console.log(artistName, artistGenre);
//     await db.query(
//       `INSERT INTO Artist (name, genre)
//     VALUES (?, ?)`,
//       [artistName, artistGenre]
//     );
//     res.sendStatus(201);
//   } catch (err) {
//     res.sendStatus(500).json(err);
//   }
//   db.close();
// };

//simple example
// exports.create = (req, res) => {
//   res.sendStatus(201);
// };
