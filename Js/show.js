
  const data = { session_id: "6s1y5uplxa31ga26zc39jzxndlqheqea" };
  fetch("https://100093.pythonanywhere.com/api/userinfo/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const userinfoElement = document.getElementById("userinfo");
    userinfoElement.textContent = JSON.stringify(data);
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });


