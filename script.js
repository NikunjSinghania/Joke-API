async function joke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        const data = await response.json()
        document.querySelector('p').textContent = data.joke
    }
    catch(err) {
        console.log('Error', err);
    }
}

document.querySelector('button').addEventListener('click', (e) => {
    joke()
})

joke()