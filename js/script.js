const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.printful.com/orders";

async function orderShirt(shirtType, shirtSize, shirtColor) {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            type: shirtType,
            size: shirtSize,
            color: shirtColor
        })
    });

    if (response.ok) {
        const result = await response.json();
        console.log("Order successful:", result);
    } else {
        console.error("Error ordering shirt:", response.statusText);
    }
}

document.getElementById("shirtOrderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const shirtType = document.getElementById("shirtType").value;
    const shirtSize = document.getElementById("shirtSize").value;
    const shirtColor = document.getElementById("shirtColor").value;

    orderShirt(shirtType, shirtSize, shirtColor);
});
