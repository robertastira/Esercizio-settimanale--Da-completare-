const addressBarContent = new URLSearchParams(location.search)
const userId = addressBarContent.get('userId')
  


if (userId) {
  fetch( "https://striveschool-api.herokuapp.com/api/product/" + userId, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MjE4N2U1YzAwMTgxNGM1ZjciLCJpYXQiOjE3MDU2NTIwNjYsImV4cCI6MTcwNjg2MTY2Nn0.8R1lU44Vc3oxqWwW0d9YYQonOcW4oZIX2cCH_UNosB0",
      'content-type': 'application/json'   
      }
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(
          "Non sono riuscito a recuperare l'evento"
        )
      }
    })

    const generateSingleCard = function (items) {
        items.forEach((newGame) => {
      
          console.log(newGame)
          const newCol = document.createElement('div')
          newCol.classList.add('col-12')
      
          console.log(newGame._id, newGame.userId)
          newCol.innerHTML = `
              <div class="card" style="width:100%">
                  <img src="${newGame.imageUrl}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${newGame.name}</h5>
                      <p class="card-text">${newGame.description}</p>
                      <p class="card-text">${newGame.brand}</p>
                      <p class="card-text">${newGame.price}</p>
                      <a href="#" class="btn btn-primary"><i class="bi bi-cart-check me-2">Scopri di più</i></a>
                      <a onclick="sendModify(this)" data-userId='${newGame._id}' class="btn btn-primary"><i class="bi bi-cart-check me-2">Modifica</i></a>
                  </div>
              </div>
              `
          const eventsRow = document.getElementById('single-card')
      
          console.log(newCol)
          eventsRow.appendChild(newCol)
        })
      }

      generateSingleCard()
    }