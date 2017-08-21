//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.status = "normal"
  this.color = "black"
  this.hungry= true
  this.owner = undefined

}

let sadie = new Dog()
let moonshine = new Dog()
let atticus = new Dog()

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.pet = function(dog){
    dog.status = "happy";

  }

this.feed = function (dog){
  dog.hungry = false;
  }

this.owner = function (dog){
  dog.owner = Human;
}
  this.cool = undefined;
}

let mason = new Human()
let julia = new Human()

  sadie.hungry = false
  julia.cool = true
  mason.cool = false



















// Instances of Human
// Needed: mason, julia
