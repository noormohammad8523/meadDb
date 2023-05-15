
// Define the function to fetch the data
const fetchProductData = () => {
  fetch(`https://100096.pythonanywhere.com/product_list/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const productListDiv = document.getElementById("product-container");
            let html = "";
            if (Array.isArray(data)) {
              for (const product of data) {
                console.log(product);
                html += `
                <button type="button" class="btn btn-outline-warning">${product}</button>
                  
                `;
              }
            } else if (typeof data === "object") {
              for (const key in data) {
                console.log(data[key]);
                html += `
                
                <button type="button" class="btn btn-outline-warning">${data[key]}</button>
                  
                `;
              }
            }
            productListDiv.innerHTML = html;
          
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the function when the UI loads
window.onload = () => {
  fetchProductData();
}

