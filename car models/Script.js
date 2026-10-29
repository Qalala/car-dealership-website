function changeCarModel() {
    var carType = document.getElementById("car-type").value;
    var imageElement = document.getElementById("car-model-displayer").getElementsByTagName("img")[0];
    var headingElement = document.getElementById("car-model-displayer").getElementsByTagName("h2")[0];
    var descriptionElement = document.getElementById("car-model-displayer").getElementsByTagName("p")[0];
    var carInfoElement = document.querySelector(".car-info");
    var selectButton = document.getElementById("car-model-displayer").getElementsByTagName("a")[0];

    if (carType === "hatchback") {
        imageElement.src = "https://m.atcdn.co.uk/vms/media/03de4d6ff53041b383703e3670ba4f47.jpg";
        headingElement.innerText = "VW Golf";
        descriptionElement.innerText = "Information";

        carInfoElement.style.display = "block";
        carInfoElement.innerHTML = `
            <h2><b>Category</b></h2>
            <h3>2024 A/T/Basic </h3>
            <h2><b>Starting Price</b></h2>
            <h3>1,000,000 L.E.</h3>
            <h2><b>Min.Deposit</b></h2>
            <h3>116,970 L.E.</h3>
            <h2><b>Min.Installment</b></h2>
            <h3>7,507 L.E.</h3>
            <h2><b>CC</b></h2>
            <h3>1200 N/A</h3>
        `;
        selectButton.href = "#";
    } else if (carType === "sedan") {
        imageElement.src = "https://images.dealer.com/ddc/vehicles/2024/Volkswagen/Jetta/Sedan/color/Deep%20Black%20Pearl-2T2T-18,18,20-640-en_US.jpg";
        headingElement.innerText = "VW Passat";
        descriptionElement.innerText = "Information";

        carInfoElement.style.display = "block";
        carInfoElement.innerHTML = `
            <h2><b>Category</b></h2>
            <h3>2024 Automatic/Trendline plus </h3>
            <h2><b>Starting Price</b></h2>
            <h3>1,000,000 L.E.</h3>
            <h2><b>Min.Deposit</b></h2>
            <h3>148,500 L.E.</h3>
            <h2><b>Min.Installment</b></h2>
            <h3>9,531 L.E.</h3>
            <h2><b>CC</b></h2>
            <h3>1400 Turbo</h3>
        `;
        selectButton.href = "#";
    } else if (carType === "suv") {
        imageElement.src = "https://images.jazelc.com/uploads/galpinvolkswagen/jelly_Tiguan-2018.jpg";
        headingElement.innerText = "VW Tiguan";
        descriptionElement.innerText = "Information";

        carInfoElement.style.display = "block";
        carInfoElement.innerHTML = `
            <h2><b>Category</b></h2>
            <h3>2024 A/T/Elegance</h3>
            <h2><b>Starting Price</b></h2>
            <h3>1,000,000 L.E.</h3>
            <h2><b>Min.Deposit</b></h2>
            <h3>167,970 L.E.</h3>
            <h2><b>Min.Installment</b></h2>
            <h3>10,780 L.E.</h3>
            <h2><b>CC</b></h2>
            <h3>1400 Turbo</h3>
        `;
        selectButton.href = "#";
    } else 
    {
        carInfoElement.style.display = "none";
    }
}
