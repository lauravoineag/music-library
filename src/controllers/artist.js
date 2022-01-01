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

//Read artist
exports.read = async (_, res) => {
  const db = await getDb();

  try {
    const [artists] = await db.query('SELECT * FROM Artist');

    res.status(200).json(artists);
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};

// Same as above for reading artists
//const readArtistController = async (req, res) => {
//   const db = await getDb();
//   try {
//     const result = await db.query('SELECT * FROM Artist');
//     const [artists] = result;
//     res.status(200).send(artists);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
//   db.close();
// };

//Reading a single artist
exports.readById = async (req, res) => {
  const db = await getDb();
  const { artistId } = req.params;

  const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [
    artistId,
  ]);

  if (!artist) {
    res.sendStatus(404);
  } else {
    res.status(200).json(artist);
  }

  db.close();
};
