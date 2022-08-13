let developers = [
    {
        "name": "Carolin Bloeme",
        "id": "carolin-bloeme"
    },
    {
        "name": "Sun Jun",
        "id": "sun-jun"
    },
    {
        "name": "Song Bao",
        "id": "song-bao"
    },
    {
        "name": "Olivia Arribas",
        "id": "olivia-arribas"
    },
    {
        "name": "Samah abu laymun ",
        "id": "samah-abu-laymun"
    }
]

let ul = document.getElementById('developers');
let li = "";
for (let i = 0; i < developers.length; i++) {
    li +=
        `
  <div class="list-item-wrapper">
  <li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <div class="item-name" id="${developers[i].id}-item">
    <i class="fa fa-user m-1"></i> ${developers[i].name}
  </div>

  <label class="custom-checkbox">
    <input
      type="checkbox"
      name="developer-names"
      value="${developers[i].name}"
      id="${developers[i].id}"
    />
    <span></span>
  </label>
  
</li>
  </div>
  `;
}
document.getElementById('developers').innerHTML = li;
var checkboxInputs = document.querySelectorAll("input[type='checkbox']");
for (let i = 0; i < checkboxInputs.length; i++) {
    checkboxInputs[i].addEventListener('click', function () {
        if (checkboxInputs[i].checked) {
            document.getElementById(checkboxInputs[i].id + "-item").style.color = "#1c1c1d";
            console.log(checkboxInputs[i].value)
        }
        else {
            document.getElementById(checkboxInputs[i].id + "-item").style.color = "#838080";

        }

    });
}




