const fetchProductData = () => {
    fetch(`https://100096.pythonanywhere.com/product_list/`)
      .then((res) => res.json())
      .then((data) => {
        const productListDiv = document.getElementById("product-container");
        let html = "";
        if (Array.isArray(data)) {
          for (const product of data) {
            console.log(data)
            html += `
              <li>${product}</li>
            `;
          }
        } else if (typeof data === "object") {
          for (const key in data) {
            html += `
              <li>${data[key]}</li>
            `;
          }
        }
        productListDiv.innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  window.onload = () => {
    fetchProductData();
  }
  