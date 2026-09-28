```javascript
// ================================
// ROHAN RGYT GAMING WEBSITE
// ================================


// POPUP

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");


function showMessage() {
    popupTitle.textContent = "WELCOME GAMER! 🔥";

    popupText.textContent =
        "Welcome to Rohan RGYT Gaming Zone. Your gaming adventure starts here!";

    popup.classList.add("active");
}


function playGame(gameName) {
    popupTitle.textContent = gameName;

    popupText.textContent =
        "🚀 " + gameName + " is ready! Game launch system connected.";

    popup.classList.add("active");
}


function closePopup() {
    popup.classList.remove("active");
}


// CLOSE POPUP WHEN CLICKING OUTSIDE

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        closePopup();
    }
});


// SCROLL TO GAMES

function scrollToGames() {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}


// GAME SEARCH

function searchGames() {

    const input =
        document.getElementById("gameSearch").value.toLowerCase();

    const cards =
        document.querySelectorAll(".game-card");

    cards.forEach(function(card) {

        const gameName =
            card.getAttribute("data-name").toLowerCase();

        if (gameName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// CATEGORY FILTER

function filterCategory(category) {

    const cards =
        document.querySelectorAll(".game-card");

    cards.forEach(function(card) {

        const categoryName =
            card.querySelector(".game-info span").textContent;

        if (categoryName === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}


// MOBILE MENU

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.padding = "25px";
        nav.style.background = "#080808";
        nav.style.borderBottom = "1px solid #ff003c";

    }
}


// BUTTON RIPPLE EFFECT

document.querySelectorAll("button").forEach(function(button) {

    button.addEventListener("click", function() {

        button.style.transform = "scale(0.95)";

        setTimeout(function() {
            button.style.transform = "";
        }, 120);

    });

});


// SIMPLE CONSOLE MESSAGE

console.log(
    "🔥 Rohan RGYT Gaming Zone loaded successfully!"
);
```
