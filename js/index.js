elBtn = document.querySelector(".btn");
let elList = document.querySelector(".pokemons__list");
let elInputSearch = document.querySelector('.check__search')

elBtn.addEventListener("click", function () {
  elList.innerHTML = null
  render();

});

function render() {
  let searchValue = elInputSearch.value


  for (let i = 0; i < pokemons.length; i++) {
    const item = pokemons[i];

    if (item.name == searchValue) {

      elList.innerHTML = `
        <li class="pokemon__item">
          <h2>${item.name}</h2>
          <i class="ok fa-regular fa-heart"></i>
          <img src="${item.img}" alt="${item.name}" >
          <p class="pokemon__item-text">${item.height}</p>
        </li>
      `

      return
    } else {
      let li = document.createElement("li");
      let cardweight = document.createElement("div");
      let img = document.createElement("img");
      let cardtitle = document.createElement("div");
      let heart = document.createElement("i");
      let title = document.createElement("h2");
      let type = document.createElement("p");
      let candy = document.createElement("h2");
      let weight = document.createElement("h2");
      let height = document.createElement("h2");
      let btnfir = document.createElement("button");
      let btnsec = document.createElement("button");
      li.classList = "pokemon__item";
      img.classList = "pokemon__img";
      title.classList = "pokemon__title";
      type.classList = "pokemon__type";
      candy.classList = "pokemon__candy";
      cardweight.classList = "cardweight";
      weight.classList = "pokemon__weight";
      height.classList = "pokemon__height";
      btnfir.classList = "pokemon__btnfir";
      btnsec.classList = "pokemon__btnsec";
      cardtitle.classList = "pokemon__cardtitle";
      heart.classList = "ok fa-regular fa-heart";

      img.src = item.img;
      title.textContent = item.name;
      type.textContent = item.type;
      candy.textContent = item.candy;
      height.textContent = item.height;
      weight.textContent = item.weight;

      elList.appendChild(li);
      li.appendChild(img);
      li.appendChild(cardtitle);
      cardtitle.appendChild(title);
      cardtitle.appendChild(heart);
      li.appendChild(type);
      li.appendChild(candy);
      li.appendChild(cardweight);
      cardweight.appendChild(weight);
      cardweight.appendChild(height);
      li.appendChild(btnfir);
      li.appendChild(btnsec);

      btnfir.textContent = "more info";
      btnsec.textContent = "document";

    }





  }



}

render();
