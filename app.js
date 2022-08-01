const get_data = async () => {
    return fetch('PeriodicTableJSON.json')
        .then(response => response.json())
        .then(data => {
            return data;
        });
}


async function colour(property, subproperty) {

    const data = await get_data();
    let property_array = [];

    console.log(data.elements[5]);

    for (i in data.elements) {
        let prop = subproperty == undefined ?
            data.elements[i][property] :
            data.elements[i][property][subproperty];
        property_array.push(prop)
    }

    fill_in(property_array)
}


function fill_in(property_array) {
    init_elem();
    console.log(property_array);

    let min = null
    max = null;

    for (i in property_array) {

        if (property_array[i] != null
            && property_array[i] != undefined
            && min == null) {

            min = property_array[i];
            max = property_array[i];
            continue;

        }

        max = property_array[i] > max ?
            property_array[i] : max;
        min = (property_array[i] < min && property_array[i]) ?
            property_array[i] : min;
    }

    console.log(min, max);

    for (i in property_array) {
        let x = property_array[i];

        let element = document.querySelector(`.a${i}`)
        if (x == null || x == undefined) {
            element.style.background = 'gray';
            continue;
        }

        x = (x - min) / (max - min);
        x = parseInt(x * 255);
        x = 255 - x;

        element.style.background = `rgb(255,${x},${x})`
    }
}

const init_elem = () => {
    for (i = 0; i < 118; i++) {
        document.querySelector(`.a${i}`).style.background = 'white';
    }
}

const get_array = (data, property) => {
    let array = []
    for (i in data.elements) {
        array.push(data.elements[i][property])
    } return array;
}


/* ===================*/
/*       IEEEEEE      */
/* ===================*/

let ie = 0;
const ieinput = document.getElementById('ie');
const iebtn = document.querySelector('.iebtn');
ieinput.addEventListener('input', (e) => {
    ie = e.target.value;
    const ievalue = document.querySelector('.ievalue');
    const str = ('0' + (parseInt(ie) + 1)).slice(-2)
    ievalue.innerHTML = `(${str})`;
    colour('ionization_energies', ie)
})
iebtn.addEventListener('click', (e) => {
    colour('ionization_energies', ie)
})