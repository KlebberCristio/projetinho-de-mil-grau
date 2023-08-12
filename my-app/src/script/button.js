function button() {
  document.getElementById('suma').innerHTML = fetch('localhost:5000/get').then(resp => return(resp));
}