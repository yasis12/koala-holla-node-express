const express = require('express');
const router = express.Router();

// DB CONNECTION
let koalaList = [
    {
    name: 'Scotty',
    gender: 'M',
    age: 4,
    notes: 'Born in Guatemala',
    readyToTransfer: true
  },
  {
    name: 'Jean',
    gender: 'F',
    age: 5,
    notes: 'Allergic to lots of lava',
    readyToTransfer: true
  },
  {
    name: 'Ororo',
    gender: 'F',
    age: 7,
    notes: 'Loves listening to Paula (Abdul)',
    readyToTransfer: false
  },
  {
    name: 'Charlie',
    gender: 'M',
    age: 9,
    notes: 'Favorite band is Nirvana',
    readyToTransfer: false
  },
  {
    name: 'Betsy',
    gender: 'F',
    age: '4',
    notes: 'Has a pet iguana',
    readyToTransfer: false
  }];
  

// GET
router.get('/', (req, res) => {
    res.send(koalaList);
    console.log(koalaList);
});

// POST
router.post('/add' , function(req, res){
    let koala = req.body;
    console.log(koala);
    koalaList.push(koala)
    console.log(koalaList);
    res.send({message: 'Success'})
});

// PUT


// DELETE

module.exports = router;