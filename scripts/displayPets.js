function displayPetCards(){
    //get the DIV form the html
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array
    for(let i=0;i< petSalon.pets.length;i++ ){
        let pet = petSalon.pets[i];
        //create the card tmp
        card += `
        <div class="pet">
            <h5>${pet.name}</h5>
            <p>Age:${pet.age}</p>
            <p>Service:${pet.service}</p>
        </div>`;

        console.log(card);
        
    }
   //add the card into the DIV 
   DIV.innerHTML=card;   
}

function displayPetTable(){

}

//dont forget to replace displayPetCards by displayPetTable in the register.js