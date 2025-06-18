let languages = [];

await fetch('https://codestats.net/api/users/oreo')
    .then(res=>{
        if(!res.ok){
            console.log('Problem');
            return;
        }
        return res.json();
    })
    .then(data=>{
        languages=data.languages;
    })
    .catch(error=>{
        console.log('ERROR')
    });


let language_name = [];
let language = [];
var xp = [];

for (language_name in languages){
    xp.push(languages[language_name].xps);
    language.push(language_name);
}

console.log(language);
console.log(xp);


