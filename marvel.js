const form = document.getElementById('form');
const characters = document.getElementById('characters');
const table = document.getElementById('table');

const getData= (id) =>{
    //Instanciamos el objeto XMLHttpRequest
    let xhr;
    if (window.XMLHttpRequest) xhr= new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    //Preguntamos primero si la pagina se cargo por primera vez o enviamos una peticion al clickear en button. Se abren las peticiones en cada caso del IF
    if (id == undefined){
        xhr.open('GET', 'marvel.php');
        xhr.addEventListener('load', (data)=>{
            const dataJson= JSON.parse(data.target.response);
            console.table(dataJson);
        })

        const fragment= document.createDocumentFragment();   
        for (const heroes of dataJson) {
            const option= document.createElement('OPTION');
            option.value= heroes.ID;
            option.textContent= heroes.Name;
            fragment.appendChild(option);
        }        
        characters.appendChild(fragment);

    }else{

    }

    xhr.send();
}

getData();