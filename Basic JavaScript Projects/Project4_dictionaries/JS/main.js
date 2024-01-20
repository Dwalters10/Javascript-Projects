function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound:"Bark!",
        Age: 7
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

