/*
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

//SECTION - Music & Band Classes
//ANCHOR Create a Musician Class, and passes the band name and instrument
//NOTE - Creates a class to define a musician and the instruments they play
class Musician {
  constructor(musicianNameValue, instrumentValue) {
    this.musicianName = musicianNameValue;
    this.instrument = instrumentValue;
  }
}

//ANCHOR Create a Band Class, and passes the array of musician names and the instruments they play
//NOTE - Creates a class to define the band name and the musicians tied to each band.
class Band {
  constructor(bandNameValue) {
    this.bandName = bandNameValue;
    this.Musician = [];
  }
}
//SECTION - Music Class & Menu Logic
//TODO - 1) Create a class for the menu logic
//NOTE - Creates a class to pass the bands in an array
class bandMenu {
  constructor() {
    this.Bands = [];
    this.selectedBand = null;
  }
  //NOTE - creates menu options to create,view, & delete bands using a switch statement.
  StartMenu() {
    let selection = this.startMenuUI();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createBand();
          break;
        case "2":
          this.viewBand();
          break;
        case "3":
          this.deleteBand();
          break;
        case "4":
          this.displayAllBands();
          break;
        default:
          selection = 0;
      }
      selection = this.startMenuUI();
    }
    alert("Sorry, you're not in the band, GoodBye!");
  }

  //SECTION  UI for band main menu
  //NOTE - Creates a simple UI for the user to view menu selections
  startMenuUI() {
    return prompt(`
          0) exit
          1) create a band
          2) view a band
          3) delete band
          4 display all bands
          `);
  }
  //TODO -2)Add ability to create a band
  //NOTE - Creates a prompt for user input and pushes to the bands array which is an instance of the bands class, and passes the user input into the 'bandName' property.
  createBand() {
    let userInputValue = prompt("Enter name of the band:");
    this.Bands.push(new Band(userInputValue));
  }

  //TODO Add the ability to delete a band
  //NOTE - Creates a prompt for the user to enter the index number of the band they wish to delete. If the index matches matches an index in the bands array, that element will be removed from the array.
  deleteBand() {
    let index = prompt("Enter the index of the band you wish to delete:");
    if (index > -1 && index < this.Bands.length) {
      this.Bands.splice(index, 1);
    }
  }

  //TODO Add the ability to display all bands
  //NOTE - Creates an empty string to store the name and index of the band(s). The information is then displayed in an alert popup.
  displayAllBands() {
    let allBands = "";
    for (let index = 0; index < this.Bands.length; index++) {
      // Add each band to the allbands container
      allBands += "\n" + index + " - " + this.Bands[index].bandName; //Takes the index of a specifc band from the bands array.
    }
    alert(allBands);
  }

  //Band Menu UI
  //NOTE - creates a Simple UI when adding musicians to a band.
  bandMenuUI(musicianListing) {
    return prompt(`
    0) back
    1) create a musician
    2) remove a musician
    ${musicianListing}
    `);
  }

  //TODO -3) Ability to View a band
  //NOTE - Created a blank string that will be used to populate the
  viewBand() {
    let allBands = "";
    for (let index = 0; index < this.Bands.length; index++) {
      // Add each band to the allbands container
      allBands += "\n" + index + " - " + this.Bands[index].bandName;
    }
    //NOTE - The above code is populating the index number and the index of the created band into the 'allBands' string
    let index = prompt(
      "Enter the index of the band you would like to view: \n" + allBands
    );
    //NOTE - if the index is between 0 and the index of the number of bands, the band is added to the selectedBand variable.
    if (index > -1 && index < this.Bands.length) {
      this.selectedBand = this.Bands[index];
      let description = "Band Name: " + this.selectedBand.bandName + "\n";
      //NOTE - The for loop will iterate over the musician array of the selectedBand. After each iteration a string will be added to the description variable.
      console.log(this.selectedBand);
      console.log(this.selectedBand.Musician);
      for (let i = 0; i < this.selectedBand.Musician.length; i++) {
        description +=
          i +
          ") " +
          this.selectedBand.Musician[i].musicianName +
          " - " +
          this.selectedBand.Musician[i].instrument +
          "\n";
      }
      //TODO create selection menu
      //NOTE - the selection variable assignes the value returned by 'bandmenuUI'. Then the description variable is passes as an argument of 'bandMenuUI'
      let selection = this.bandMenuUI(description);
      switch (selection) {
        case "1":
          this.createMusician();
          break;
        case "2":
          this.deleteMusician();
          break;
      }
    }
  }

  //TODO - 4) Ability to create a musician
  //NOTE - Creates a prompt for the user to enter the name of the musician and the instrument they play. Then a new musician is added to the musician array, which is a property of selectedBand.
  createMusician() {
    let musicianName = prompt("Enter the name of the musician:");
    let instrument = prompt("Enter the instrument the musican plays:");
    this.selectedBand.Musician.push(new Musician(musicianName, instrument));
    console.log("selectedband log", this.selectedBand);
  }
  //TODO -4) Ability to Delete a musician
  //NOTE - You are prompted to enter an index number, if the index exists in musician array, it will be removed using the splice method to select the index number the user input, and removing 1 element.

  deleteMusician() {
    let index = prompt("Enter the index of the musician you wish to delete:");
    console.log(index < -1);
    console.log(index < this.selectedBand.Musician.length);
    if (index > -1 && index < this.selectedBand.Musician.length) {
      console.log(
        "this is the output of this.selectedband",
        this.selectedBand.Musician
      );
      this.selectedBand.Musician.splice(index, 1);
    }
  }
}

let BandMenuApp = new bandMenu(); //created an instance of the band menu class
BandMenuApp.StartMenu(); //called on the start menu method
