
let pElement = document.getElementById("p")
let body = document.body
let i = 0
let i2 = 0

let texts = [
    "Hejkaaa Piękna 😻",
    "Tak do Ciebie mówie 😘",
    "Kocham cie Mój Ty Króliczku 🥰",
    "Naprawde tak sie cieszeee, że jesteś 🎉🎉🎉",
    "Ty dajesz mi szczęście 🥰",
    "Ty mnie szanujesz ⭐",
    "Ty mnie akceptujesz 👏",
    "Tak sie starasz dla mnie ✨",
    "Dziękuje za wszystko bardzooo 😭🤍",
    "Tylko przy tobie tak super sie czuje 🎉",
    "Wiesz jak bardzo cie kocham 😘🤍",
    "Po głowie chodzi mi takie pytanko 🫣",
    "Proszeeeee 🤍😘✨",
    "Została byś Moją dziewczyną? 🫣😘🤍"
    ]

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