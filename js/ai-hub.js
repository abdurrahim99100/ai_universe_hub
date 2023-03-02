function lodeData(){
    const url = (`https://openapi.programming-hero.com/api/ai/tools`);
    fetch(url)
    .then(res => res.json())
    .then(data => displayAlldata(data.data.tools))
};

function displayAlldata(data){
    // console.log(data);
    // data slice kora holo;
    data = data.slice(0, 6)

    for(const user of data){
        console.log(user.image);
        const mainContainer = document.getElementById('main-container');

        const creatElement = document.createElement('div');
        creatElement.innerHTML = `
        <div class="card mb-5" style="height: 550px;">
        <img src="${user.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
        `
        mainContainer.appendChild(creatElement);
    }
};

// show all button javascript;
document.getElementById('btn-showall').addEventListener('click', function(){
    
});