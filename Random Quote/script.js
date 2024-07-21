function generatequote() {
    fetch('https://api.quotable.io/random')
    .then(Response => Response.json())
    .then(data => {
        const quote = `${data.content}-${data.author}`;
        document.getElementById('quote').innerHTML = quote;
    })

    .catch(error => {
        document.getElementById('quote').innerHTML = 'An error occured'
    });
}

