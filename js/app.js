document.addEventListener('DOMContentLoaded', () => {
    baseURL = 'https://dattebayo-api.onrender.com/clans/?name=Uzumaki'

    fetch(baseURL)
        .then((Response) => {
            if (!Response.ok) {
                throw new Error('Error de servidor' + Response.status)
            }
            return Response.json()
        })
        .then((data) => {
            (catchClasn(data))
        })
        .catch((err) => {
            console.error('Erro de banco de dados' + err)
        })
})

const catchClasn = (arrayClans) => {
    characterURL = 'https://dattebayo-api.onrender.com/characters/?limit=1431'
    fetch(characterURL)
        .then((Response) => {
            if (!Response.ok) {
                throw new Error('Error de servidor' + Response.status)
            }
            return Response.json()
        })
        .then((data) => {
            test(data.characters, arrayClans)
            
        })
        .catch((err) => {
            console.error('Erro de banco de dados' + err)
        })
}   

const test = (arrayCharacter, arrayClans) => {
    ArrayPerso = []
    arrayPersoCorrect = []

    arrayClans.clans.forEach(eClans => {
        eClans.characters.forEach(eCharacters => {
            ArrayPerso.push(eCharacters)
        })
    });    

    console.log(ArrayPerso)

    for (let i = 0; i < ArrayPerso.length; i++) {
        if (ArrayPerso[i] !== ArrayPerso[i + 1]) {
            
        }
        
    }
}