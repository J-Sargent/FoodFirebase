//console.log(JSON.stringify(obj))
//firebase call testing
window.onload = init();

// NO TOUCHY
async function init() {
  try {
    var devUrl = "config";
    var response = await fetchUrl(devUrl);

    window.NODE_ENV = response.config;
    console.log("config: " + NODE_ENV);
  } catch (error) {
    window.NODE_ENV = "production";
  }

  window.allFood = {};
  // NO TOUCHY ABOVE

  // Your code that runs when the app starts after here:
  console.log("Hello Foodie!");

  var numbers = [1, 2, 3, 4];
  var sum = await addition(numbers);
  console.log(sum);

  var testNumberFoodJS = 3;
  var testNumberPath = await testNumberFunction(testNumberFoodJS);
  console.log(testNumberPath);
}

async function addition(numbers) {
  var additionResult = await fetchUrl("addNumbers", {
    numberArray: numbers
  });
  return additionResult.output;
}

///
async function testNumberFunction(testNumberFoodJS) {
  var insideTestNumberFunction = await fetchUrl("pushNumber", {
    testNumberSite: testNumberFoodJS
  });
  return insideTestNumberFunction.output;
}
////

var orange = ["fruit", "orange", ".33", "Florida", "orange"];
var apple = ["fruit", "apple", ".50", "Kansas", "Red", "organic"];
//Ex 1
// var allFood = [];
// allFood.push({
//   category: "",
//   type: ""
// });
// allFood = [{}, {}];
// allFood.forEach(function(obj) {
//   if (obj.type === "banana") {
//   }
// });

// Ex 2
// var allFood = {};
// var newFruit = {
//   category: "",
//   type: ""
// };
// newFruit.color = "red";
//
// allFood[newFruit.type] = newFruit;
//
// allFood.banana;

class Food {
  constructor(props) {
    this.category = props.category;
    this.type = props.type;
    this.price = props.price;
  }
  displayCategory() {
    console.log("This " + this.type + " is a " + this.category);
  }
}

class Fruit extends Food {
  constructor(props) {
    super(props);
    this.color = props.color;
    this.location = props.location;
  }
  displayFruit() {
    console.log("This is a fruit");
  }
}

class Local extends Fruit {
  constructor(props) {
    super(props);
    this.growingMethod = props.growingMethod;
  }
  displayLocal() {
    console.log("This food is local, from " + this.location);
  }
  displayGrowingType() {
    console.log("This food is " + this.growingMethod + "ally grown.");
  }
}

class NotLocal extends Fruit {
  constructor(props) {
    super(props);
    this.distance = props.distance;
  }
  displayDistance() {
    console.log("This food traveled " + this.distance + " many miles.");
  }
}

function makeNewFruitArray() {
  console.log("makeNewFruitArray called");
  var formData = {};
  //document.getElementsByClassName("inputs").forEach(function(input) {
  for (var i = 0; i < document.getElementsByClassName("inputs").length; i++) {
    var input = document.getElementsByClassName("inputs").item(i);
    console.log(formData);
    console.log(input);
    var key = input.id;
    var value = input.value;
    formData[key] = value;
  }
  // allFood[formData.type] = formData;
  let newFruit = new Fruit(formData);
  allFood[newFruit.type] = newFruit;
  console.log(newFruit);
}

// function sortLocal() {
//   console.log("sortLocal called");
//   if (newFruitArray.includes("Kansas")) {
//     console.log("Kansas");
//     //let apple = new Local("fruit", "apple", ".50", "Kansas", "Red", "organic");
//     var category = newFruitArray[0];
//     var type = newFruitArray[1];
//     var price = newFruitArray[2];
//     var location = newFruitArray[3];
//     var color = newFruitArray[4];
//     var growingMethod = newFruitArray[5];
//
//     console.log("catogory is " + category);
//     //  apple.displayCategory();
//     //  apple.displayFruit();
//     //  apple.displayGrowingType();
//     //note, it would actually be allFood.banana.displayCategory();
//   }
// }
//
// sortLocal();
