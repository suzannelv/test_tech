class Patients {
  constructor(avatar, name, age) {
    this.avatar = avatar;
    this.name = name;
    this.age = age;
  }
}


 const avatarPath = "/assets/img/avatars/"
// Instancier la class Person

let person1 = new Patients(avatarPath + "patient_1.png", "Cécile Moulin", 81);
let person2 = new Patients(avatarPath + "patiente_2_4.png", "Juliette Masselis", 39);
let person3 = new Patients(avatarPath + "patient_3.png", "René Guitay", 81);
let person4 = new Patients(avatarPath + "patiente_2_4.png", "Clara Camalet", 31);
let person5 = new Patients(avatarPath + "patiente_5.png", "Lola Dufour", 81);
let person6 = new Patients(avatarPath + "patient_6.png", "Etienne Morié", 81);

// tableau des personnes
const personsArr = [person1, person2, person3, person4, person5, person6]

// créer le html
let html = "";

for(i = 0; i < personsArr.length; i++){

  let person = personsArr[i];

  html += `
    <div class="col info d-flex flex-column align-items-center">
      <div class="avatar-patient">
        <img src="${person.avatar}" alt="avatar de patient ${person.name}">
      </div>

      <div class="card-info">

        <div class="top">
          <h6>${person.name}</h6>
          <p class="age">${person.age} ans</p>
          <div class="separator min-separator"></div>
        </div>

        <div class="base text-start ms-4">

          <div class="info">
            <div class="icon">
              <img src="./assets/img/icons/tel.png" alt="">
            </div>
            <p>04 77 36 65 95</p>
          </div>

          <div class="info align-items-center">
            <div class="icon">
              <img src="./assets/img/icons/mail.png" alt="">
            </div>
            <p>cecilemoulin@gmail.com</p>
          </div>

          <div class="info">
            <div class="icon">
              <img src="./assets/img/icons/adress.png" alt="">
            </div>
            <p>16 rue Maurice Bouchor 68007 Lyon</p>
          </div>

          <div class="info align-items-center">
            <div class="icon">
              <img src="./assets/img/icons/Union_plus.png" alt="">
            </div>
            <p>voir ses ordonnances</p>
          </div>

        </div>
    </div>  
  </div>
  `

}

// insérer le template html dans l'élément avec id "persons"
const patientList = document.getElementById("persons");

patientList.innerHTML = html



