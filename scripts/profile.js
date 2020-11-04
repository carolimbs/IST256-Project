var usersJSON = '{ "users": [' +
            '{ "firstName": "Kelvin", "lastName": "Trang", "major": "Human-Centered Design & Development",' +
            '"experiences": { "experience1": { "company": "Hughes Network Systems", "title": "Network Security Intern",' +
                    '"location": "Germantown, MD", "startDate": "June 2019", "endDate": "Jan 2020" },' +
            '"experience2": { "company": "Penn State IT Service Desk", "title": "IT Consultant", "location": "University Park, PA",' +
                    '"startDate": "Oct 2020", "endDate": "Present" } },' +
            '"skills": [ "Java", "Linux", "HTML", "CSS", "JavaScript"], "profilePic": "./images/kelvin_profile.jpg" } ] }';

let users = JSON.parse(usersJSON);
let header = document.querySelector("#header");

let img = document.createElement("img");
img.src = users.users[0].profilePic;
img.alt = users.users[0].firstName + "'s Profile Picture";
img.width = 200;
img.height = 200;
header.appendChild(img);

let profileHeader = document.createElement("h1");
profileHeader.innerText = users.users[0].firstName + " " + users.users[0].lastName;
header.appendChild(profileHeader);

let body = document.querySelector("#body");
Object.keys(users.users[0].experiences).forEach(key => {
        let experience = users.users[0].experiences[key];

        let company = document.createElement("h3");
        company.innerText = experience.company;
        company.class = "company";

        let title = document.createElement("p");
        title.innerText = experience.title;
        title.class = "title";

        let location = document.createElement("p");
        location.innerText = experience.location;
        location.class = "location";

        let startDate = experience.startDate;
        let endDate = experience.endDate;
        let date = document.createElement("p");
        date.innerText = startDate + " - " + endDate;
        date.class = "date";

        body.append(company);
        body.append(location);
        body.append(title);
        body.append(date);
      });

let skills = document.createElement("h4");
skills.innerText = "Skills";
skills.class = "skills";
body.append(skills);

let skillsList = document.createElement("ul");
for(let i = 0; i < users.users[0].skills.length; i++) {
        let skill = document.createElement("li");
        skill.innerText = users.users[0].skills[i];
        skillsList.appendChild(skill);
}
body.append(skillsList);