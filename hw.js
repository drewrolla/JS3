console.log("hello world")
// Using what we learned in class, create a mockup of a Pokedex.. when you enter a Pokemon name, 
// it should make an API call and get all the data.. then display some of that information to your html page
// (couple of pokemon names to try: "ditto", "pikachu", "charizard")

// Features should include:
// -name
// -image(hint: the path to the image is 'sprites' -> 'front_default')

// Extra credit: List out all the pokemon's abilities

// preventDefault() should be used if submit is present

// API STUFF 
// using async & await
const getPoke = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) // fetch always returns a promise
    const data = await res.json() // JSON is also a promise
    const pokeName = data.forms[0].name
    const pokeImg = data.sprites.front_default
    const pokeList = [pokeName, pokeImg]

    // stuff wasn't dispalying
    addToPage(pokeList)
    return pokeList
};


// const loadData = async () => {
//     const data = await getPoke();
//     if (document.querySelector('section').innerHTML != ''){
//         clearBtn.click()
//     }
//     const pokemon = data.pokemon
//     pokemon.map(addToPage)
// };

// // DOM/HTML STUFF
// const form1 = document.getElementById('poke_data')
// console.log(form1)

// form1.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log(e)
//     const poke_name = form1.PokeName.value
//     console.log(`Grabbed data: ${poke_name}`)
// });


const pokemans = document.querySelector('#poke_data')
pokemans.addEventListener('submit', (e)=>{
    e.preventDefault();
    const pokemonName = e.path[0][0].value
    const pokemonInfo = getPoke(pokemonName)
    return
});



// load data and display
const addToPage = (list) => {
    const p = document.createElement('p')
    p.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${list[1]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${list[0]}</h5>
            </div>
        </div>
    ` //backsticks are multiline
    document.querySelector('#showPoke').append(p)
};


const clearBtn = document.getElementById('clear');
const clearData = () => {
    document.querySelector('section').innerHTML=''
};
clearBtn.addEventListener('click', clearData)


