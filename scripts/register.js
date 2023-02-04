let petSalon ={
    name:"The Fashion Pet",
    phone:"555-555-555",
    workingHours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
    address:{
        street:"Palm ave",
        zip:"22345",
        city:"San Diego"
    },
    pets:[]
}
//name, age, gender, breed, service
function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`<label>${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}</label>`;
}

//this is the constructor
function Pet(n,a,g,b,s){
    this.name = n;
    this.age =a;
    this.gender =g;
    this.breed=b;
    this.service =s;
}
// global vars for the html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    console.log("Register a new pet");
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //create a new pet
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    // display the pet on the console
    console.log(newPet);
    //push the pet into the array
    petSalon.pets.push(newPet);
    //display the number of registered pets
    updateInfo();
    clearForm();
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}
//create a clearForm function
function clearForm(){
   inputName.value="";
   inputAge.value="";
   inputGender.value="";
   inputBreed.value="";
   inputService.value="";

}
function init(){
    //events

    //call the funcitons
    displayFooterInfo();
    //create obj
    let scooby = new Pet("Scooby",60,"Male","Dane","Grooming");
    let scrappy = new Pet("Scrappy",50,"Male","Mixed","Vaccines");
    petSalon.pets.push(scooby,scrappy);//adding the pets into the array
    updateInfo();
}
window.onload=init;//wait to render the html

