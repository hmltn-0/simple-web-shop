const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2YWQ5NjAyNGMzZWNkODNjMDhkODJjMTM4ZWFjYWFmNDg3NWU5MDhlZWMxNDMzMzgwZTJkOGNhNWVmNTEwZDQ0NjI3ZGM5MGNjOTFlOGJjIiwiaWF0IjoxNzI0NTQyNzgzLjYzMzUzLCJuYmYiOjE3MjQ1NDI3ODMuNjMzNTMyLCJleHAiOjE3NTYwNzg3ODMuNjI2NjA3LCJzdWIiOiIxOTQwODUzMyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiLCJ1c2VyLmluZm8iXX0.AtdaTG6MRq35Ze6lyFGSTlhmEEoW3CVtPXU4YdLpv_wUB2ptVcbgyRm_ED2jW4I9uMrkppRFwC6hUbwELc4";
const apiUrl = "https://api.printful.com/store";

async function getUserInfo() {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        }
    });

    if (response.ok) {
        const result = await response.json();
        console.log("User info:", result);
    } else {
        console.error("Error fetching user info:", response.statusText);
    }
}

getUserInfo();
