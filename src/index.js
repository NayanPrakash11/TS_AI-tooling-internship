
document.getElementById('save').addEventListener('click', async (e) => {

  e.preventDefault()

  const headers = new Headers()

  headers.append('Content-Type', 'application/json')
  headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  headers.append('Access-Control-Allow-Credentials', true)


  let blade = document.getElementById('blade').value
  let pattern = document.getElementById('pattern').value
  let size = document.getElementById('size').value

  if (!blade || !pattern || !size) {
    alert('please fill all the fields')
    return
  }

  let obj = {
    blade,
    pattern,
    size
  }

  fetch('http://localhost:5000/config', {
    method: 'post',
    headers: headers,
    body: JSON.stringify(obj)
  }).then((response) => {
    console.log(JSON.stringify(response))
  })

  document.getElementById('blade').value = "" 
  document.getElementById('pattern').value = "" 
  document.getElementById('size').value = "" 

})


document.getElementById('reset').addEventListener('click', async (e) => {

  e.preventDefault()

  let blade = document.getElementById('blade')
  let pattern = document.getElementById('pattern')
  let size = document.getElementById('size')

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      blade.value = data.blade
      pattern.value = data.pattern
      size.value = data.size
    }
  };
  xhttp.open("GET", "http://localhost:5000/config", true);
  xhttp.send();

})