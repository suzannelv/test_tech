// créer une class Patients
class Patients {
  constructor(avatar, name, age) {
    this.avatar = avatar;
    this.name = name;
    this.age = age;
  }
}


const avatarPath = "assets/img/avatars/"
// Instancier la class Person

let person1 = new Patients(avatarPath + "patiente-cecile.svg", "Cécile Moulin", 81);
let person2 = new Patients(avatarPath + "patiente-clara.svg", "Juliette Masselis", 39);
let person3 = new Patients(avatarPath + "patient-rene.svg", "René Guitay", 81);
let person4 = new Patients(avatarPath + "patiente-clara.svg", "Clara Camalet", 31);
let person5 = new Patients(avatarPath + "patiente-lola.svg", "Lola Dufour", 81);
let person6 = new Patients(avatarPath + "patient-etienne.svg", "Etienne Morié", 81);

// tableau des personnes
const personsArr = [person1, person2, person3, person4, person5, person6]

// créer le html
let html = ""
let count = 1
// parcourir le tableau personsArr
for(let i = 0; i < personsArr.length; i++){

  let person = personsArr[i]
  // déternimer l'index de carte est pair ou impair
  let cardClass = count % 2 === 0 ? "even" : "odd";
  // créer le template pour les cartes de patients
  html += `
    <a href="#" class="d-block text-black m-3 link-card">
      <div class="col d-flex flex-column align-items-center card-animate">
        <div class="avatar-patient">
          <img src="${person.avatar}" alt="avatar de patient ${person.name}">
        </div>
   
        <div class="card-info ${cardClass}">

          <div class="top">
            <h4 class="fw-bolder">${person.name}</h4>
            <p class="age mt-2">${person.age} ans</p>
            <div class="separator min-separator"></div>
          </div>

          <div class="base text-start ms-4 mt-4">

            <div class="info ms-2">
              <div class="icon me-2">
                <img src="assets/img/icons/tel.svg" alt="">
              </div>
              <p>04 77 36 65 95</p>
            </div>

            <div class="info align-items-center ms-2">
              <div class="icon me-2">
                <img src="assets/img/icons/mail.svg" alt="">
              </div>
              <p>cecilemoulin@gmail.com</p>
            </div>

            <div class="info ms-2">
              <div class="icon me-2">
                <img src="assets/img/icons/adress.svg" alt="">
              </div>
              <p>16 rue Maurice Bouchor 68007 Lyon</p>
            </div>

            <div class="info align-items-center ms-2">
              <div class=" me-2">
                <img src="assets/img/icons/union-plus.svg" alt="">
              </div>
              <p>voir ses ordonnances</p>
            </div>
          </div>
      </div>
    </div>
  </a>
  `
  count++

}

// insérer le template html dans l'élément avec id "persons"
const patientList = document.getElementById("persons")
patientList.innerHTML = html




