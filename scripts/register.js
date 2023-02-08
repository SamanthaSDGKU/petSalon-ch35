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

function isValid(aPet){
    let valid=true;// we start assuming that the pet is valid
    if(aPet.name === ""){
        //if i get here the pet is not valid
        valid=false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.service===""){
        valid=false;
    }
    // add validation for contact phone and owner name

    return valid;
}

function register(){
    //create a new pet
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //validation 
    if(isValid(newPet)===true){
        //push the pet into the array
        petSalon.pets.push(newPet);
        //display the number of registered pets
        updateInfo();
        displayPetCards();
        clearForm();
    }
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
    displayPetCards();
}
window.onload=init;//wait to render the html

