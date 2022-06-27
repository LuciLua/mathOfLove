function combine() {
    const you = document.querySelector('#you').value
    const crush = document.querySelector('#crush').value
    const match = document.querySelector('#match')


    const combinator = {
        random: (Math.random() * 100).toFixed(0),
        match(you = "_____", crush = "____") {
            return `<div class="hightlight">${you}</div><span id="love"> ${this.random}%💓</span> <div class="hightlight">${crush}</div>`
        }
    }

    you == "" || crush == ""
        ? match.textContent = "Coloque seu nome e o/a do/a seu/sua crush"
        : match.innerHTML = combinator.match(you, crush)
}

