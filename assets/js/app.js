let cl = console.log;

const info = document.getElementById('info')
let result = '';

countries.forEach((contry) => {
    result += `<div class="col">
                <div class="card">
                    <div class="imgcontainer">
                    <img src=${contry.flag} alt="">
                    </div>
                    <h3 class="contryname">
                         ${contry.name}
                    </h3>
                    <p >
                        <b>capital</b>: ${contry.capital}
                    </p>
                    <p class="trancatetext">
                        <b>Languages</b>: ${contry.languages}
                    </p>
                    <p>
                        <b>population</b>: ${contry.population}
                    </p>
                </div>
            </div>`

})
info.innerHTML = result;



