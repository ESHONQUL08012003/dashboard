let tbody = document.querySelector(".tbody");
let elImg = document.querySelector(".search-img");
let elNav = document.querySelector(".header__nav");
let searchInput = document.querySelector(".search-input");
let selestSorting =document.querySelector(".controllers__sort");
let selectFilter = document.querySelector(".controllers__filter");
elImg.addEventListener("click", () => {
  searchInput.classList.toggle("actives");
  let serchInputName = [];
  searchInput.addEventListener("input", () =>{
    let valueInput = searchInput.value.trim().toLowerCase()

    function renderSearchItem(searching){
      let serchInputName = [];
      tbody.innerHTML = "";
      searching.forEach(users => {
        if(users.name.toLowerCase().includes(valueInput)){
          serchInputName.push(users)
          console.log(serchInputName);
          console.log(serchInputName);
        }
      });
      renderUser(serchInputName);
    }
    renderSearchItem(data);
  });
});

const colorFunction = (names) => {
  let red = "red";
  let green = "green";
  let yellow = "yellow";

  if (names === "normal") {
    return green;
  } else if (names === "hight") {
    return red;
  } else if (names === "low") {
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
       <button class="priroty__btn text-black ${colorFunction(element.priority)}">${element.priority
    }</button>
      </td>

      <td>
        <button class="imgs-btn">
        <img src="./images/more-vertical.svg" alt="">
        </button>
       </td>
    `;
    tbody.appendChild(newTr);
  });
}
renderUser(data);

//sort

selestSorting.addEventListener('change', (evt)=> {

  function sortingName(users) {
    if(evt.target.value === 'a-z'){
      tbody.innerHTML = ""
      let sorting = users.sort((abc, xzy)=>abc.name.localeCompare(xzy.name))
      renderUser(sorting);
    }else if(evt.target.value ==='z-a'){
      tbody.innerHTML = ""
      let sorting = users.sort((abc, xyz) => xyz.name.localeCompare(abc.name)) 
      renderUser(sorting);
    }else{
      let sorting = users.sort((abc,xyz)=> abc.nmae.localeCompare(xyz.nmae))
      tbody.innerHTML = ""
      renderUser(sorting);
    }
  }

  sortingName(data);
})


//filter

selectFilter.addEventListener('change', (event)=>{

 
  function filterName(users){
    if(event.target.value === "high"){
      tbody.innerHTML = "";
      let filtered = users.filter((priority) => priority.priority === "high")
      renderUser(filtered);
    }
    else if(event.target.value === "normal"){
      tbody.innerHTML = "";
      let filtered = users.filter((priority) => priority.priority === "normal")
      renderUser(filtered);
    }
    else if(event.target.value === "low"){
      tbody.innerHTML = "";
      let filtered = users.filter((priority) => priority.priority === "low")
      renderUser(filtered);
    }
  }
  filterName(data)
})


