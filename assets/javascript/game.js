// Set variables
var buyerOffer = 0;
var inventory = 0;
var wins = 0;
var losses = 0;
var gem1Value = 0;
var gem2Value = 0;
var gem3Value = 0;
var gem4Value = 0;


// set variables for html elements
var buyerOfferHTM = $("#buyer-offer");
var inventoryHTM = $("#inventory");
var winsHTM = $("#wins");
var lossesHTM = $("#losses");

//Set initial values for html elements
buyerOfferHTM.text(buyerOffer);
inventoryHTM.text(inventory);
winsHTM.text(wins);
lossesHTM.text(losses);

// function to create values for gems and buyer offer
function resetValues() {
  gem1Value = Math.floor(Math.random() * 12+1);
  console.log("Gem 1: "+gem1Value);
  gem2Value = Math.floor(Math.random() * 12+1);
  console.log("Gem 2: "+gem2Value);
  gem3Value = Math.floor(Math.random() * 12+1);
  console.log("Gem 3: "+gem3Value);
  gem4Value = Math.floor(Math.random() * 12+1);
  console.log("Gem 4: "+gem4Value);
  buyerOffer = Math.floor(Math.random() * 102 +19)
  console.log("Buyer Offer: "+buyerOffer);
  buyerOfferHTM.text(buyerOffer);
  inventory = 0;
  inventoryHTM.text(inventory);
}
resetValues();

// set up win/loss trigger with modal (hopefully)
function scoring() {
  if (inventory === buyerOffer) {
    wins++;
    winsHTM.text(wins);
    // $('#myModal').modal(options);
  }
  else {
    losses++;
    lossesHTM.text(losses);
    // $('#myModal').modal(options);
  }
}

// set up functions for when gems are clicked
  // gem 1 picked
  function gem1Picked() {
    console.log("gem 1 picked");
    inventory += gem1Value;
    inventoryHTM.text(inventory);
    if (inventory >= buyerOffer) {
      console.log("Inventory: "+inventory+" Buyer Offer: "+buyerOffer);
      scoring();
      resetValues();
    }
  }

  // gem 2 picked
  function gem2Picked() {
    console.log("gem 2 picked");
    inventory += gem2Value;
    inventoryHTM.text(inventory);
    if (inventory >= buyerOffer) {
      console.log("Inventory: "+inventory+" Buyer Offer: "+buyerOffer);
      scoring();
      resetValues();
    }
  }

  // gem 3 picked
  function gem3Picked() {
    console.log("gem 3 picked");
    inventory += gem3Value;
    inventoryHTM.text(inventory);
    if (inventory >= buyerOffer) {
      console.log("Inventory: "+inventory+" Buyer Offer: "+buyerOffer);
      scoring();
      resetValues();
    }
  }

  // gem 4 picked
  function gem4Picked() {
    console.log("gem 4 picked");
    inventory += gem4Value;
    inventoryHTM.text(inventory);
    if (inventory >= buyerOffer) {
      console.log("Inventory: "+inventory+" Buyer Offer: "+buyerOffer);
      scoring();
      resetValues();
    }
  }


// Call functions with click
$("#gem1").on("click", gem1Picked);
$("#gem2").on("click", gem2Picked);
$("#gem3").on("click", gem3Picked);
$("#gem4").on("click", gem4Picked);
