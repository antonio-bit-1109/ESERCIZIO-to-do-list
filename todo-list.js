window.onload = () => {
    const form = document.querySelector("form");
    arraynumRandom = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        generateCard();
    });
};

const generateCard = function (event) {
    const contenitoreCard = document.querySelector("#container-card");
    const inputDaFare = document.querySelector("#input-da-fare");
    const inputAltro = document.querySelector("#input-altro");
    const inputOrario = document.querySelector("#input-orario");

    let numeroRandom;
    do {
        numeroRandom = Math.floor(Math.random() * 15);
    } while (arraynumRandom.includes(numeroRandom));
    arraynumRandom.push(numeroRandom);

    console.log(numeroRandom);

    const col = document.createElement("div");
    col.classList.add("col");
    contenitoreCard.appendChild(col);

    col.innerHTML += `
    <div style= width:250px; class="card m-3" >
    <img src="materiali-compito/Netflix-assets/assets/media/media${numeroRandom}.webp" class="card-img-top" alt="img a caso ">
    <div class="card-body">
      <h5 class="card-title"><div>Oggi devo:</div>${inputDaFare.value}</h5>
      <h5 class="card-title"><div>Alle ore:</div>${inputOrario.value}</h5>
      <p class="card-title"><div>Nient'altro?</div>${inputAltro.value}</p>
      
      <div class="d-flex" >
      <button id="btn-cancella${numeroRandom}" class="btn btn-danger">cancella</button>
      <div/>
      </div>
      </div>
      `;

    const cancellaMemo = document.querySelector(`#btn-cancella${numeroRandom}`);
    console.dir(cancellaMemo);
    cancellaMemo.addEventListener("click", cancellaPostIt);
};

const cancellaPostIt = (event) => {
    const myCard = event.target.closest(".card");

    myCard.parentNode.remove();
};
