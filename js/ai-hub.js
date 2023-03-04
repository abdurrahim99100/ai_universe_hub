function lodeData() {
    const url = (`https://openapi.programming-hero.com/api/ai/tools`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayAlldata(data.data.tools))
};

function displayAlldata(data) {
    // console.log(data[0]);
    // data slice kora holo;
    data = data.slice(0, 6)

    for (const user of data) {
        // console.log(user.features[0]);
        const mainContainer = document.getElementById('main-container');

        const creatElement = document.createElement('div');
        creatElement.innerHTML = `
        <div class="card mb-5" style="height: 550px;">
        <img src="${user.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text lh-base">${user.features[0]}</p>
            <p class="card-text lh-base">${user.features[1]}</p>
            <p class="card-text lh-base">${user.features[2]}</p>
            <hr>
            <h3 class="">${user.name}</h3>
            <div class="d-flex justify-content-between align-items-center my-1">
                <p><img src="icon/calendar.png" alt=""> ${user.published_in}</p>

                <button onclick="lodeModalData('${user.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="icon/add.png" alt=""></button>
            </div>
        </div>
    </div>
        `
        mainContainer.appendChild(creatElement);
    }
};




// show more all data in display;
document.getElementById('btn-showall').addEventListener('click', function() {
    const cleairMaincontainer = document.getElementById('main-container');
    cleairMaincontainer.innerHTML = '';
    
    const url = (`https://openapi.programming-hero.com/api/ai/tools`);
    fetch(url)
        .then(res => res.json())
        .then(data => showAlldata(data.data.tools))
        
        
        function showAlldata(data) {
            // console.log(data[0]);
            // data slice kora holo;
            // data = data.slice(0, 6)
        
            for (const user of data) {
                // console.log(user.features[0]);
                const mainContainer = document.getElementById('main-container');
                
        
                const creatElement = document.createElement('div');
                creatElement.innerHTML = `
                <div class="card mb-5" style="height: 550px;">
                <img src="${user.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text lh-base">${user.features[0]}</p>
                    <p class="card-text lh-base">${user.features[1]}</p>
                    <p class="card-text lh-base">${user.features[2]}</p>
                    <hr>
                    <h3 class="">${user.name}</h3>
                    <div class="d-flex justify-content-between align-items-center my-1">
                        <p><img src="icon/calendar.png" alt=""> ${user.published_in}</p>
        
                        <button onclick="lodeModalData('${user.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="icon/add.png" alt=""></button>
                    </div>
                </div>
            </div>
                `
                mainContainer.appendChild(creatElement);
            }
        };




});







const lodeModalData = async id => {
   
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data.features[1].feature_name);
    
    // discription;
    const modalDetails = document.getElementById('modal-discription');
    modalDetails.innerText = data.data.description;
    
    // price
    const priceBasec = document.getElementById('s-basic');
    priceBasec.innerText = data.data.pricing[0].plan;

    const basicAmount = document.getElementById('b-amount');
    basicAmount.innerText = data.data.pricing[0].price;

    const pricePro = document.getElementById('s-pro');
    pricePro.innerText = data.data.pricing[1].plan;

    const proAmount = document.getElementById('p-Amount');
    proAmount.innerText = data.data.pricing[1].price;

    const priceEh = document.getElementById('prich-eh');
    priceEh.innerText = data.data.pricing[2].plan;

    const ehAmount = document.getElementById('eh-amount');
    ehAmount.innerText = data.data.pricing[2].price;

    // featers
    const featersOn = document.getElementById('features-name1');
    featersOn.innerText = data.data.features[1].feature_name;
    
    const featersTwo = document.getElementById('features-name2');
    featersTwo.innerText = data.data.features[2].feature_name;
    
    const featersThree = document.getElementById('features-name3');
    featersThree.innerText = data.data.features[3].feature_name;
    
    // Integrations;
    const integOne = document.getElementById('integ-one');
    integOne.innerText = data.data.integrations[0];
    
    const integTwo = document.getElementById('integ-two');
    integTwo.innerText = data.data.integrations[1];
    
    const integThree = document.getElementById('integ-three');
    integThree.innerText = data.data.integrations[2];



    // image;
    const modalImage = document.getElementById('modal-images');
    modalImage.innerHTML = `
        <p class="bg-danger rounded px-2 mt-2" style="width: 120px; position: absolute;right: 50px;">accuracy ${data.data.accuracy.score}</p>
        <img class="rounded mx-auto" style="width: 330px; height: 200px;" src="${data.data.image_link[0]}" alt="">
        <h4>${data.data.input_output_examples[0].input}</h4>
        <p>${data.data.input_output_examples[0].output}</p>
    `;

        


};