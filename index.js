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
//NOTE - Creates a class to pass the bands in an array, & creates menu options to create,view, & delete bands. Each band can also contain multiple musicians
class bandMenu {
  constructor() {
    this.Bands = [];
    this.selectedBand = null;
  }
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
  //NOTE - Creates a prompt for user input, and pushes to the bands array an instance of the bands class, and passes the user input into the 'bandName' property.
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
  //NOTE - Creates an empty string to store the bands array,
  displayAllBands() {
    let allBands = "";
    for (let index = 0; index < this.Bands.length; index++) {
      // Add each band to the allbands container
      allBands += "\n" + index + "-" + " " + this.Bands[index].bandName;
    }
    alert(allBands);
  }

  //Band Menu UI
  bandMenuUI(musicianListing) {
    return prompt(`
    0) back
    1) create a musician
    2) remove a musician
    ${musicianListing}
    `);
  }

  //TODO -3) Ability to View a band
  viewBand() {
    let allBands = "";
    for (let index = 0; index < this.Bands.length; index++) {
      // Add each band to the allbands container
      allBands += "\n" + index + "-" + " " + this.Bands[index].bandName;
    }

    let index = prompt(
      "Enter the index of the band you would like to view: \n" + allBands
    );
    if (index > -1 && index < this.Bands.length) {
      this.selectedBand = this.Bands[index];
      let description = "Band Name: " + this.selectedBand.bandName + "\n";

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
  createMusician() {
    let musicianName = prompt("Enter the name of the musician:");
    let instrument = prompt("Enter the instrument the musican plays:");
    this.selectedBand.Musician.push(new Musician(musicianName, instrument));
    console.log("selectedband log", this.selectedBand);
  }
  //TODO -4) Ability to Delete a musician
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
