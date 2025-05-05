// 1) form prevent default to stop reloading:
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
});

// 2) Selecting the required fields:
const btn = document.querySelector('input[type="submit"]');
const img = document.querySelector('img');
const h2 = document.querySelector('h2');
const bio = document.querySelector('.bio');
const user = document.querySelector('.user');
const details = document.querySelectorAll('.details');

// 3) Getting userData using fetch and assigning them to their keys:
// 4) Now on submitting we take the value by adding eventListener to input:

btn.addEventListener('click', function(){ 
    const userName = document.querySelector('input[type="text"]').value.trim();
    const userData = fetch(`https://api.github.com/users/${userName}`).then((raw) => {
        if(!raw.ok) throw new Error("User not Found!");
        return raw.json();
    });
    userData.then(function(raw){
        // console.log(raw);
      
    img.setAttribute('src', `${raw.avatar_url}`);
    h2.innerText = `${raw.name}`;
    bio.innerText = `${raw.bio ? raw.bio : "Sorry there is no bio..."}`;
    user.innerText = `${raw.login}`;
    const label = ["Followers:", "Following:", "Public Repos:", "Company:", "Location:"]
    const det = [`${raw.followers}`, `${raw.following}`, `${raw.public_repos}`, `${raw.company}`, `${raw.location}`];
    for(let i=0; i<details.length; i++) {
    details[i].innerText = `${label[i]} ${det[i]}`;
    }
});
});



