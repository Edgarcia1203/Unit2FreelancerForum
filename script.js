const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

function calculateAverageStartingPrice() {
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    return totalStartingPrice / freelancers.length;
}

function updateTable() {
    const freelancerList = document.getElementById("freelancer-list");
    const averageStartingPrice = document.getElementById("average-starting-price");

    freelancerList.innerHTML = "";

    freelancers.forEach((freelancer) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.startingPrice}</td>`;
        freelancerList.appendChild(row);
    });

averageStartingPrice.textContent = `$${calculateAverageStartingPrice()}`;
}

updateTable();

setInterval(() => {
    freelancers.push({ name: "Carol", occupation: "Programmer", startingPrice: 70 });
    updateTable();
}, 5000);
