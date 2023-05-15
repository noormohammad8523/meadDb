const loginForm = document.getElementById("login-form");

fetch("https://100093.pythonanywhere.com/api/userinfo/", {
    method: "POST",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    // Display the data on the UI
  })
  .catch((error) => console.error(error));

