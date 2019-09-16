import People from "./modules/DataObject.js"
// import{ Team, People}

// IIFE - Immediately Invoced Function Expression

(() => {

console.log("fired!");

console.log (People);
// grab the bio container and get ready to populate its content
const bioInfo = document.querySelector(".bio-wrapper").children;
     


     function  showProfData  () {
         //change the data on a page
         // this is the label on the button (the name)
         let currentProf = this.textContent;

        // this refers to the heading tag (the first child of the bio-wrapper div)
          bioInfo[0].textContent = People[currentProf].name;
        // this refers to the paragraph tag ( the second child)
        bioInfo[1].textContent = People[currentProf].role;
        bioInfo[2].textContent = People[currentProf].bio;
        
         bioInfo[3].src = `images/${People[currentProf].image}`;
         //bioInfo[2].src = "images/" + Person.image;
         debugger;
     }

     for (let prof in People){
         console.log(prof);

         //create a button for every prof (every entry) in our object
         let teamButton = document.createElement("button");
         // set the buttons label(text) to the prof name (the cuttent entry in the object)

         teamButton.textContent = prof;
         // add some event handling so that when we click one of our new buttons we can show the right data
         teamButton.addEventListener("click", showProfData);

         //add the button to the section on our web page
         document.querySelector('#section1').appendChild(teamButton);

     }

debugger;

})();