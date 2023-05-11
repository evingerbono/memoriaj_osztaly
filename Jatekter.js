import Kartya from "./Kartya.js";
import { kepLista } from "./adat.js";

class Jatekter {
    constructor() {
        const szuloElem = document.querySelector("article");
        for (let i = 0; i < kepLista.length; i++) {
            const kep = kepLista[i];
            new Kartya(kep, i, szuloElem);
        }
    }
}

export default Jatekter;