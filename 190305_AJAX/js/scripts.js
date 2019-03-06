
let button = document.getElementById('GetUsers');
button.addEventListener("click", getUserData);


function getUserData() {
    var url = "https://randomuser.me/api/?results=10";
    var xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 ) {
        if (xhr.status === 200 || xhr.status === 201) {
          let resp = JSON.parse(xhr.response);
          document.getElementById("Output").innerHTML = "Successfully created id: " + resp.id;
        } else {
        document.getElementById("Output").innerHTML = "There was an error";
        } 
      }

  }

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
  console.log(xhr);

}



