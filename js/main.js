let tbody = document.querySelector(".tbody");
let elImg = document.querySelector(".button__search");
let elNav = document.querySelector(".header__nav");
let inputSearch = document.querySelector(".search-header");

elImg.onclick = function () {
  inputSearch.classList.add("search-header-active");
  this.classList.add("search-button-none");
  inputSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      inputSearch.classList.remove("search-header-active");
      elImg.classList.remove("search-button-none");
      elImg.classList.add("search-button-active");
    }
  });
};

const colorFunction = (names) => {
  let red = "red";
  let green = "green";
  let yellow = "yellow";

  if (name === "normal") {
    return red;
  } else if (name === "hight") {
    return green;
  } else if (nmae === "low") {
    return yellow;
  }
};

function renderUser(alluser) {
  alluser.forEach((element) => {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
      <td>
        <div class="d-flex gap-4">
         <img class = "avatar-img" src="${element.ava}" alt="${element.name}">
          <div>
          <strong>${element.company}</strong>
          <p>${element.date_of_register}</p>
          </div>
        </div>
       </td>

     <td>
        <div>
          <strong>${element.name}</strong>
          <p>${element.date_of_onliine}</p>
        </div>
      </td>

      <td>
         <strong>${element.date_of_onliine}</strong>
          <p>${element.time}</p>
      </td>

      <td>
       <button class="priroty__btn">${element.priority}</button>
      </td>

      <td>
        <button class="imgs-btn">
        <img src="./images/more-vertical.svg" alt="">
        </button>
       </td>
    `;
    console.log(newTr);
    tbody.appendChild(newTr);
  });
}
renderUser(data);




