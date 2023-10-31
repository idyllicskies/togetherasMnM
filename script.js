document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const drink = document.getElementById("drink").value;
    const response = document.getElementById("response");

    response.innerHTML = `Thank you, ${name}! Your RSVP is confirmed. You've requested ${food} and ${drink}.`;
});
