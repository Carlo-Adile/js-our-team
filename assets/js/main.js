const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

/* milestone 1: stampa su console i valori delle key di ogni oggetto */
/* for(i = 0; i < team.length; i++){
  console.log(team[i]);
} */

/* milestone 2: stampare le info su DOM sotto forma di stringhe */
let myDom = document.getElementById('my_dom_print');

/* let tentativo = 'prova a scrivere sul DOM'; */

/* myDom.innerHTML = tentativo; */
for (i = 0; i < team.length; i++) {
  /* myDom.innerHTML += team[i]; */
  const member = team[i];
  console.log(member)

  const markup =
  `<div class="col-4">
    <div class="card m-2 text-center">
      <div class="card-header">
        <h4>${member.name}</h4>
      
      </div>
      <div class="card-body">
        <img src="./assets/img/${member.image}" alt="" class="card-img">
      </div>
      <div class="card-footer">
        <h5>${member.role}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sapiente itaque tempora!
        </p>
        <a href="#" class="btn btn-info">See more</a>
      </div>
    </div>
  </div>`

  myDom.innerHTML += markup;
}


