// const { response } = require("express");

console.log( 'js' );

// start Get Koalas
function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios.get('/koalas').then((response) => {
    let koalaFromServer = response.data;
    console.log('THIS IS DATA',koalaFromServer);
    let viewKoalas = document.querySelector('#viewKoalas');
    viewKoalas.innerHTML = '';
    for (const koala of koalaFromServer) {

      if (koala.transferstatus === false) {
        viewKoalas.innerHTML += `
          <tr>
              <td>${koala.name}</td>
              <td>${koala.age}</td>
              <td>${koala.gender}</td>
              <td>${koala.transferstatus}</td>
              <td>${koala.notes}</td>
              <td><button type="button" id="readyToTransferButton" onclick="readyToTransfer(event)">Ready To Transfer</button></td>
          </tr>
        `;
      } else if (koala.transferstatus === true)
      viewKoalas.innerHTML += `
      <tr>
          <td>${koala.name}</td>
          <td>${koala.age}</td>
          <td>${koala.gender}</td>
          <td>${koala.transferstatus}</td>
          <td>${koala.notes}</td>
          <td></td>
      </tr>
    `;
      }

  }).catch((error) => {
    console.log('Error in getKoalas', error);
    alert('Something exploded');
  });
} // end getKoalas

getKoalas();


function submitForm(event){
  event.preventDefault();
  let name = document.querySelector('#nameIn').value; 
  let age = document.querySelector('#ageIn').value;
  let gender = document.querySelector('#genderIn').value;
  let readyToTransfer = document.querySelector('#readyForTransferIn').value;
  let notes = document.querySelector('#notesIn').value; 

  let koalaToAdd = {
    name: name,
    gender: gender,
    age: age,
    readyToTransfer: readyToTransfer,
    notes: notes
  }

  console.log(koalaToAdd);

  axios.post('/koalas/add', koalaToAdd).then((response) => {
    console.log(response);
    document.querySelector('#nameIn').value = ''; 
    document.querySelector('#ageIn').value = '';
    document.querySelector('#genderIn').value = '' ;
    document.querySelector('#readyForTransferIn').value = '';
    document.querySelector('#notesIn').value = ''; 
    
    // getKoalas();

  }) .catch((error) => {
    console.log(error);
    alert('Something Went Wrong')
  })
}

function addKoalaToServer(newKoala){
      let viewKoalas = document.querySelector('#viewKoalas');
          viewKoalas.innerHTML += `
            <tr>
                <td>${newKoala.name}</td>
                <td>${newKoala.age}</td>
                <td>${newKoala.gender}</td>
                <td>${newKoala.readyToTransfer}</td>
                <td>${newKoala.notes}</td>
            </tr>
          `;

          console.log('new koala to add', newKoala);
  } 

  // ready to transfer code

//   function readyToTransfer(event) {
//     const row = event.target.closest('tr');
//     const koalaId = row.dataset.koalaId;

//     axios.put(`/koalas/transfer/${koalaId}`)
//     .then((response) => {
//       const updatedKoala = response.data;
//       updateKoalaRow(updatedKoala);
//     })
//     .catch((error) => {
//         console.log('Error toggling readyToTransfer status', error);
//         alert('Something went wrong');
//     })
// }


