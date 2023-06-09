const teamList = document.getElementById('team-list')


const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  },
]

for (i in team) {
  const person = team[i]
  for (key in person) {
    console.log(key + ': ' + person[key]);

    teamList.innerHTML += `
    <li>${key}: ${person[key]}</li>
    `
  }
  console.log('-----------------');
  teamList.innerHTML += `
    <li>-----------------------</li>
    `
}