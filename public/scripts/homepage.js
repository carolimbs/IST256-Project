//going to create do an eventlistener that is mouseover and shows
//different things the careers thing is intended to do


const purposeButton = document.getElementById("purposeButton");
//when button is hovered over it will show the purpose of the site
logInButton.addEventListener("mouseover", showPurpose);

var purposeInfo = ["find a career of your dreams", "Learn new skills", "Make connections"];

//add the info for loop
function showPurpose(){
    for (let i = 0; i < purposeInfo.length; i++){
        let list = document.getElementById("#purposeList");

        let listItem = document.createElement("li");
        let text = document.createTextNode(purposeInfo[i]);
        listItem.appendChild(text);

        list.appendChild(listItem);
    }
}