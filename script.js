window.addEventListener('load', () => {
    const btn = document.getElementById('btn-phrase');
    const adviceNumber = document.getElementById('advice');
    const quote = document.getElementById('quote');

    btn.addEventListener('click', () => {
        fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
            .then(res => res.json())
            .then(data => {
                let {id, advice} = data.slip;
                adviceNumber.textContent = `advice #${id}`
                quote.textContent = advice;
            })
    })
})
