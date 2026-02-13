const messages = [
    "Tu es sûr ?",
    "Vraiment sûr??",
    "Hbiba s'il te plaît...",
    "Ne me fait pas ça :(",
    "Je t'acheterai une coupe spéculos à 13 euros! 🍫",
    "stp stp stp stp stp stp stp!",
    "Je te laisserai même gagner à la bagarre !",
    "Si tu dis non, je deviens un 3atay...",
    "et le 7lib4ever dans tout ça...",
    "T'as pas envie de me connaître ???",
    "Tu abandonnes Lou... 💔",
    "Ok, j'insite pas plus...",
    "Je rigoles, DIS OUI HMARA! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
