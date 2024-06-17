/* Function for alert when order is placed */
function orderNow(truckName) {
    alert(`You have ordered from ${truckName}!`);
}

/* Function to select trucks from data set in drop down */
function showSelectedTruck() {
    const selectedTruck = document.getElementById('food-truck-select').value;
    const truckContainer = document.getElementById('truck-container');
    const truckCards = document.querySelectorAll('.truck-card');
    
    truckCards.forEach(card => {
        card.style.display = 'none';
    });

    if (selectedTruck) {
        truckContainer.style.display = 'flex';
        document.getElementById(selectedTruck).style.display = 'block';
    } else {
        truckContainer.style.display = 'none';
    }
}

/* Food truck data set */
document.addEventListener('DOMContentLoaded', function() {

const foodTrucks = [
    {
        name: "The Hotdog Hub",
        location: "W Georgia and Howe",
        menu: "Beef dog, Pork dog, Vancouver dog",
        image: "hotdog_hub.jpg"
    },
    {
        name: "Mexican Mates",
        location: "W Georgia and Granville",
        menu: "Shrimp Taco, Fish Taco, Bean Burrito",
        image: "mexican_mates.jpg"
    },
    {
        name: "All-American Grill",
        location: "W Georgia (Art Gallery)",
        menu: "Burger & Fries, Mac n' Cheese",
        image: "all_american_grill.jpg"
    }
];
        const selectMenu = document.getElementById('food-truck-select');
        const truckContainer = document.getElementById('truck-container');
        const truckCards = document.querySelectorAll('.truck-card');