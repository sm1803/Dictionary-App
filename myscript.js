const dictionary =  (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '273e9946b2mshbd93c51e94af148p14fd14jsnbaafb6b48711',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response =>  response.json())
        .then((response) =>  {
            console.log(response)
            wordheading.innerHTML = response.word;
            definition.innerHTML = response.definition.replace("1.", "<br>1.").replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
            
        })
        .catch(err =>  console.err(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})