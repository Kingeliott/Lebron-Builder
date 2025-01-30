let images = {
    head: ["imagehead1.webp", "imagehead2.webp", "imagehead3.webp", "imagehead4.webp", "imagehead5.webp",
        "imagehead6.webp", "imagehead7.webp" ], 
    chest: ["imagechest1.webp", "imagechest2.webp", "imagechest3.webp", "imagechest4.webp", "imagechest5.webp"
        , "imagechest6.webp"],
    shorts: ["imageshorts1.webp", "imageshorts2.webp", "imageshorts3.webp", "imageshorts4.webp", "imageshorts5.webp"],
    shoes: ["imageshoes1.webp", "imageshoes2.webp", "imageshoes3.webp", "imageshoes4.webp", "imageshoes5.webp"
        , "imageshoes6.webp" , "imageshoes7.webp" ],
   
}

function getRandomItem(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let randomHead = getRandomItem(images.head);
let randomChest = getRandomItem(images.chest);
let randomShorts = getRandomItem(images.shorts);
let randomShoes = getRandomItem(images.shoes);

console.log(randomChest, randomShorts, randomShoes, randomHead)

let headImageElement = document.querySelector(".headImage");
let chestImageElement = document.querySelector(".chestImage");
let shortsImageElement = document.querySelector(".shortsImage");
let shoesImageElement = document.querySelector(".shoesImage");

headImageElement.src = "/lebronImgs/" + getRandomItem(images.head);
chestImageElement.src = "/lebronImgs/" + getRandomItem(images.chest);
shortsImageElement.src = "/lebronImgs/" + getRandomItem(images.shorts);
shoesImageElement.src = "/lebronImgs/" + getRandomItem(images.shoes);

let randomizeHead = document.querySelectorAll(".randomizeHead");
let randomizeChest = document.querySelectorAll(".randomizeChest");
let randomizeShorts = document.querySelectorAll(".randomizeShorts");
let randomizeShoes = document.querySelectorAll(".randomizeShoes");

randomizeHead.forEach(button => {
    button.addEventListener("click", function() {
        headImageElement.src = "/lebronImgs/" + getRandomItem(images.head);
    });
});
randomizeChest.forEach(button => {
    button.addEventListener("click", function() {
        chestImageElement.src = "/lebronImgs/" + getRandomItem(images.chest);
    });
});
randomizeShorts.forEach(button => {
    button.addEventListener("click", function() {
        shortsImageElement.src = "/lebronImgs/" + getRandomItem(images.shorts);
    });
});
randomizeShoes.forEach(button => {
    button.addEventListener("click", function() {
        shoesImageElement.src = "/lebronImgs/" + getRandomItem(images.shoes);
    });
});

document.querySelector(".generate").addEventListener("click", function() {
    // Create a new window or tab
    let newWindow = window.open("", "_blank");

    // Get the images currently displayed on the page
    let headImageSrc = document.querySelector(".headImage").src;
    let chestImageSrc = document.querySelector(".chestImage").src;
    let shortsImageSrc = document.querySelector(".shortsImage").src;
    let shoesImageSrc = document.querySelector(".shoesImage").src;

    // Prepare the content for the new window, including the original images and new ones
    let newWindowContent = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated Lebron</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    background-color: #fefefe;
                }
                .stacked-images {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                }
                .stacked-images img {
                    margin: -25px 0;
                    max-width: 300px; 
                    max-height: 400px; 
                }
            </style>
        </head>
        <body>
            <h1>!!Your Generated Lebron!!</h1>
            <div class="stacked-images">
                <!-- Display the original images from the main page -->
                <img src="${headImageSrc}" alt="head" style="border: none">
                <img src="${chestImageSrc}" alt="chest" style="border: none">
                <img src="${shortsImageSrc}" alt="shorts" style="border: none">
                <img src="${shoesImageSrc}" alt="shoes" style="border: none">
            </div>
            <h2>WOW, looking leChic!!</h2>

            <!-- Special Message JS -->
            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    // Define the exact images that should trigger the special message
                    const specialImages = {
                        head: "imagehead6.webp",
                        chest: "imagechest6.webp",
                        shorts: "imageshorts3.webp",
                        shoes: "imageshoes7.webp"
                    };

                    // Get the current images on the page
                    const headImg = document.querySelector("img[alt='head']").src;
                    const chestImg = document.querySelector("img[alt='chest']").src;
                    const shortsImg = document.querySelector("img[alt='shorts']").src;
                    const shoesImg = document.querySelector("img[alt='shoes']").src;

                    // Check if all four images match the special set
                    if (
                        headImg.includes(specialImages.head) &&
                        chestImg.includes(specialImages.chest) &&
                        shortsImg.includes(specialImages.shorts) &&
                        shoesImg.includes(specialImages.shoes)
                    ) {
                        // Remove the <h2> element
                        const h2Element = document.querySelector("h2");
                        if (h2Element) {
                            h2Element.remove();
                        }

                        // Create a new <p> element dynamically
                        const specialMessage = document.createElement("p");
                        specialMessage.textContent = "🔥 Secret Style Unlocked! 🔥";
                        specialMessage.style.color = "gold";
                        specialMessage.style.fontSize = "22px";
                        specialMessage.style.textAlign = "center";
                        specialMessage.style.fontWeight = "bold";

                        // Find the <h1> tag and insert the new message below it
                        const title = document.querySelector("h1");
                        title.parentNode.insertBefore(specialMessage, title.nextSibling);
                    }
                });
            </script>
        </body>
        </html>
    `;

    // Set the content of the new window
    newWindow.document.write(newWindowContent);
    newWindow.document.close(); // Ensure the new window content is loaded
});
