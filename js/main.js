let tbody = document.querySelector(".tbody");

function renderUser(alluser) {
  alluser.forEach((element) => {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
      <td>
        <div class="costum">
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
        <img src="./images/more - vertical.svg" alt="">
        </button>
       </td>
    `;
    tbody.appendChild(newTr);
  });
}
renderUser(data);
