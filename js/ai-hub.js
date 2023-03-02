function lodeData() {
    const url = (`https://openapi.programming-hero.com/api/ai/tools`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayAlldata(data.data.tools))
};

function displayAlldata(data) {
    // console.log(data);
    // data slice kora holo;
    data = data.slice(0, 6)

    for (const user of data) {
        console.log(user.published_in);
        const mainContainer = document.getElementById('main-container');

        const creatElement = document.createElement('div');
        creatElement.innerHTML = `
        <div class="card mb-5" style="height: 550px;">
        <img src="${user.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text lh-base">
            1. Natural language processing. <br>
            2. Contextual understanding. <br>
            3. Text generation.
            </p>
            <hr>
            <h3 class="">${user.name}</h3>
            <div class="d-flex justify-content-between my-5">
                <p><img src="icon/calendar.png" alt=""> ${user.published_in}</p>
                <button class="border-0" style="height: 20px; width: 20px;"><img src="icon/add.png" alt=""></button>
            </div>
        </div>
    </div>
        `
        mainContainer.appendChild(creatElement);
    }
};

// show all button javascript;
// document.getElementById('btn-showall').addEventListener('click', function(){
//     const url = (`https://openapi.programming-hero.com/api/ai/tools`);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayAlldata(data.data.tools))
// });