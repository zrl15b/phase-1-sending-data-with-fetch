// Add your code here
const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  function submitData() {fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        renderBookCard(object);
    })
    .catch(() => {handlerror()});;}

    function renderBookCard(cardData) {
        const li = document.createElement('li')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
                
        pAuthor.textContent = cardData.email
        pPrice.textContent = `${cardData.id}`
                    
        li.append(pAuthor,pPrice)
        document.querySelector('body').append(li)
    }

    submitData()

    function handlerror () {
        const h1 = document.createElement('h1')
        h1.textContent = 'Unauthorized Access'
        document.querySelector('body').append(h1)
    }