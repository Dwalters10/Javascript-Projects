// Data Attributes 

function displayType(character)  {
    var charactertype = character.getAttribute("data-character-type");
    alert(charactertype + "is in the " + character.innerHTML + " universe!");
}