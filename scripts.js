document.addEventListener('DOMContentLoaded', () => {
    const farmerDetails = {
        wheat: "Farmer: mahadevaprasad<br>Location: mandya<br>Contact: 8073752288",
        corn: "Farmer: vinay <br>Location: arkere<br>Contact: 7338610613",
        rice: "Farmer: chetan prakash<br>Location: arkere<br>Contact: 1122334455",
        soybeans: "Farmer: sudeep<br>Location: chikkabalapura<br>Contact: 6677889900",
        tomato: "Farmer: palgun<br>Location: nanjangudu<br>Contact: 9988776655",
        greengram: "Farmer: karthik<br>Location: nanjangudu<br>Contact: 8877665544",
        coconut: "Farmer: maaz<br>Location: mysuru<br>Contact: 7766554433",
        groundnut: "Farmer: hisham<br>Location: mysuru<br>Contact: 6655443322"
    };

    const driverDetails = {
        tractor: "Driver: Rajesh Kumar<br>Location: Punjab<br>Contact: 9876543210",
        harvester: "Driver: Mohan Singh<br>Location: Haryana<br>Contact: 8765432109",
        sprayer: "Driver: Rakesh Mehra<br>Location: Uttar Pradesh<br>Contact: 7654321098",
        harvesterchain: "Driver: Sunil Sharma<br>Location: Madhya Pradesh<br>Contact: 6543210987",
        rotary: "Driver: Anil Verma<br>Location: Rajasthan<br>Contact: 5432109876",
        trolley: "Driver: Vinod Gupta<br>Location: Gujarat<br>Contact: 4321098765",
        cultivator: "Driver: Amit Patel<br>Location: Maharashtra<br>Contact: 3210987654",
        leveler: "Driver: Suresh Reddy<br>Location: Andhra Pradesh<br>Contact: 2109876543"
    };

    // Farmer modal
    const farmerModal = document.getElementById("farmerModal");
    const farmerModalContent = document.getElementById("farmerDetails");
    const closeFarmerModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.product-item .btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const productName = document.querySelectorAll('.product-item h2')[index].innerText.toLowerCase();
            farmerModalContent.innerHTML = farmerDetails[productName] || "Details not available.";
            farmerModal.style.display = "block";
        });
    });

    closeFarmerModal.onclick = () => {
        farmerModal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == farmerModal) {
            farmerModal.style.display = "none";
        }
    }

    // Driver modal
    const driverModal = document.getElementById("driverModal");
    const driverModalContent = document.getElementById("driverDetails");
    const closeDriverModal = document.getElementsByClassName("close")[1];

    document.querySelectorAll('.service-item .btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const serviceName = document.querySelectorAll('.service-item h2')[index].innerText.toLowerCase().replace(/ /g, '');
            driverModalContent.innerHTML = driverDetails[serviceName] || "Details not available.";
            driverModal.style.display = "block";
        });
    });

    closeDriverModal.onclick = () => {
        driverModal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == driverModal) {
            driverModal.style.display = "none";
        }
    }
});
