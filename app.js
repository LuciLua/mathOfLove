function combine() {
    const you = document.querySelector('#you').value
    const crush = document.querySelector('#crush').value
    const match = document.querySelector('#match')


    const combinator = {
        random: (Math.random() * 100).toFixed(0),
        match(you = "_____", crush = "____") {
            return `
            <div class="result">
                <div class="hightlight">${you}</div>
                    <span id="love"> ${this.random}%💓</span>
                <div class="hightlight">${crush}</div>
            </div>`
        }
    }

    const porUmTempo = () => {
        match.innerHTML = `<div class="notPut">Coloque seu nome e o/a do/a seu/sua crush`
        setTimeout( () => {
            match.innerHTML = '💓'
        }, 2000)
    }

    you == "" || crush == ""
        ? porUmTempo()
        : match.innerHTML = combinator.match(you, crush)
}

