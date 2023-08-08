const express = require('express');
const router = express.Router();

const pg = require('pg'); // import just we need

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'koala_library', 
});



// Get SQL

router.get('/' , (req, res) => { // we might have to change the route on this one
  // selecting all data from the data base
  let queryText = 'SELECT * FROM koalas;';  
  pool.query(queryText)
  .then((result) => {
      res.send(result.rows);
  })
  .catch((err) => {
      console.log(`Error making query ${queryText}`,err);
      res.sendStatus(500)
  })
});

// POST SQL
router.post('/', (req,res) => {  // maybe have to alter the route 
  let newKoala = req.body;
  let queryText = `INSERT INTO koalas (name, age, gender, transferStatus, notes)
      VALUES ($1, $2, $3, $4, $5);`;
      //by using this, we are avioding SQL injeciton.
  pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.transferStatus, newKoala.notes])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((err) => {
          console.log(`Error making query ${queryText}`, err);
          res.sendStatus(500);
      })
});

// PUT SQL
// app.put('/:id', (req,res) => {
//   let id = req.params.id;
//   let updateTransferStatus = req.body.transferStatus;

//   let queryText = `UPDATE "koalas" SET "transferStatus" = $1 WHERE "id" = $2;`;
//   let queryParams = [updateTransferStatus, id];
//   pool.query(queryText, queryParams)
//   .then((result) => {
//       res.sendStatus(200);
//   })
//   .catch((err) => {
//       console.log(`Error making query ${queryText}`, err);
//       res.sendStatus(500);
//   })
// });

// DELETE SQL not needed becuase there is not even a button to delete the nice Koalas


module.exports = router;


// ---------------------------------- OLD CODE ------------------------------------------------------
// let koalaList = [
//   {
//   name: 'Scotty',
//   gender: 'M',
//   age: 4,
//   notes: 'Born in Guatemala',
//   readyToTransfer: true
// },
// {
//   name: 'Jean',
//   gender: 'F',
//   age: 5,
//   notes: 'Allergic to lots of lava',
//   readyToTransfer: true
// },
// {
//   name: 'Ororo',
//   gender: 'F',
//   age: 7,
//   notes: 'Loves listening to Paula (Abdul)',
//   readyToTransfer: false
// },
// {
//   name: 'Charlie',
//   gender: 'M',
//   age: 9,
//   notes: 'Favorite band is Nirvana',
//   readyToTransfer: false
// },
// {
//   name: 'Betsy',
//   gender: 'F',
//   age: '4',
//   notes: 'Has a pet iguana',
//   readyToTransfer: false
// }];


// // GET
// router.get('/', (req, res) => {
//   res.send(koalaList);
//   console.log(koalaList);
// });

// // POST
// router.post('/add' , function(req, res){
//   let koala = req.body;
//   console.log(koala);
//   koalaList.push(koala)
//   console.log(koalaList);
//   res.send({message: 'Success'})
// });

