
let pElement = document.getElementById("p")
let body = document.body
let i = 1
let i2 = 0
pElement.innerHTML = texts[0]
let texts = [
    "Hejkaaa Milili 🐧🥰", "Jak taaam? 💋🤍", "Jak sie lulało? 🥺✨", "Jakiś sen?", "Przyśniłem Ci sie? 🫣🫣", "Kocham ciee 💋💍", "Nie budziłaś sie w nocy? 🥺🤍", "Opowiedz wszystko na messie 🤍", "Zobacz sobie który to nasz dzień 💍"]
body.addEventListener("click", () => {
    if (i === texts.length) {
        i2 += 1
        if (i2 === 1) {
            pElement.innerHTML = new Date().getHours() + ":" + new Date().getMinutes()
        }
        else {
            window.location.href = "https://przemek3woo.github.io/-/"
        }
    }
    else {
        pElement.innerHTML = texts[i]
        i += 1
    }
})
