import { getCines } from "./firebase.js";

const getCiness = async () => {
    const cines = await getCines()
    let html = `<br/><h1>Nuestros Cines</h1><br/>`
    cines.forEach(item => {
        let cine = item.data()
        html += `
            <div class="contenido-cine">
                <img src="img/cine/${cine.id}" width="227" height="170"/>
                <div class="datos-cine">
                    <h4>${cine.RazonSocial}</h4><br/>
                    <span>${cine.Direccion} - ${cine.Distrito}<br/><br/>Teléfono: ${cine.Telefonos}</span>
                </div>
                <br/>
                <a href="cine.htm?id=${cine.id}.1">
                    <img src="img/varios/ico-info2.png" width="150" height="40"/>
                </a>
            </div>
        `
    })
    document.getElementById('contenido-interno').innerHTML = html
}

getCiness()

/*
window.addEventListener('DOMContentLoaded', async() => {
    const cines = await getCines()
    const.forEach(cine => {
        console.log( cine.data() )
    })
})
*/