fetch("https://dragonball-api.com/api/characters?limit=10")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data.items) {
            card += `<div class="card mb-5" style="width: 18rem;">
            <img src="${db.image}" class="card-img-top" alt="${db.name}">
            <div class="card-body">
                <h5 class="card-title">${db.name}</h5>
                <p class="card-text">${db.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Ki:</strong> ${db.ki}</li>
                <li class="list-group-item"><strong>Máximo Ki:</strong> ${db.maxKi}</li>
                <li class="list-group-item"><strong>Raza:</strong> ${db.race}</li>
                <li class="list-group-item"><strong>Género:</strong> ${db.gender}</li>
            </ul>
        </div>`
        }
        document.getElementById("lista").innerHTML = card
    })