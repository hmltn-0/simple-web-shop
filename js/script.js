const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2YWQ5NjAyNGMzZWNkODNjMDhkODJjMTM4ZWFjYWFmNDg3NWU5MDhlZWMxNDMzMzgwZTJkOGNhNWVmNTEwZDQ0NjI3ZGM5MGNjOTFlOGJjIiwiaWF0IjoxNzI0NTQyNzgzLjYzMzUzLCJuYmYiOjE3MjQ1NDI3ODMuNjMzNTMyLCJleHAiOjE3NTYwNzg3ODMuNjI2NjA3LCJzdWIiOiIxOTQwODUzMyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiLCJ1c2VyLmluZm8iXX0.AtdaTG6MRq35Ze6lyFGSTlhmEEoW3CVtPXU4YdLpv_wUB2ptVcbgyRm_ED2jW4I9uMrkppRFwC6hUbwELc4";
const apiUrl = "https://api.printful.com/products";

async function getProductCatalog() {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        }
    });

    if (response.ok) {
        const result = await response.json();
        console.log("Product catalog:", result);
    } else {
        console.error("Error fetching product catalog:", response.statusText);
    }
}

getProductCatalog();

document.getElementById("shirtOrderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const shirtType = document.getElementById("shirtType").value;
    const shirtSize = document.getElementById("shirtSize").value;
    const shirtColor = document.getElementById("shirtColor").value;

    orderShirt(shirtType, shirtSize, shirtColor);
});
