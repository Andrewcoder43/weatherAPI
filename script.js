const btn = document.querySelector('button');
const output = document.querySelector('#output');
const intake = document.querySelector('#intake');
const data = null;
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';

btn.addEventListener('click', getInput);
function getInput() {
  const xhr = new XMLHttpRequest();
  let tempVal = intake.value;
  //confirm that the intake value field is working
  console.log(tempVal);
  //the url makes a request from API based on that last string value added to the url
  let tempURL = url + tempVal;
  //clear previous results
  output.innerHTML = '';
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        //change the 'data' into a JSON format that should be easier to loop through once we figure it out.
        let data = JSON.parse(xhr.responseText);
        outputHTML(data);
      } else {
        // handle api request errors here
        output.innerHTML = 'error fetching data from the api';
      }
    }
  };
  // sends the GET request with the added tempVal from submission field
  xhr.open('GET', tempURL);
  xhr.withCredentials = true;

  xhr.setRequestHeader(
    'X-RapidAPI-Key',
    '08b3788151msh5d5ef5962a99453p1df6cajsnd6595740168d'
  );
  xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

  xhr.send();
}

// xhr.addEventListener('readystatechange', function () {
//   if (this.readyState === this.DONE) {
//     // we need to loop through this info, I think, so that only what we want is displayed
//     output.innerHTML += this.responseText;
//   }
// });

//   console.log(intake.value);

// function outputHTML(data) {
//   console.log(data);
//   for (let x = 0; x < data.length; x++) {
//     output.innerHTML += data[x].condition;
//   }
// }

// function callBackfn(e) {
//   console.log(e);
// }
