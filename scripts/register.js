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
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            service:"Vaccines"
        },
        {
            name:"Speedy",
            age:70,
            gender:"Male",
            breed:"Mixed",
            service:"Nails cut"
        }
    ]
}
//name, age, gender, breed, service
function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`<label>${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}</label>`;
}

displayFooterInfo();

console.log(petSalon.pets.length); // displaying the number of pets
console.log(petSalon.pets[0].name);//displaying the name

