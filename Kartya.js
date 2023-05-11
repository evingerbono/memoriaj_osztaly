class Kartya {
    #kep
    #id
    #divElem
    #kepElem
    constructor(kep, id, szuloElem) {
        this.#kep = kep;
        this.#id = id;
        this.#divElem = document.createElement("div");
        this.#kepElem = document.createElement("img");
        this.#kepElem.src = this.#kep;
        this.#divElem.appendChild(this.#kepElem);
        szuloElem.appendChild(this.#divElem);
    }
    getkep() {
        return this.#kep;
    }
    getid() {
        return this.#id;
    }
    SetKepElem(kep) {
        this.#kepElem = kep;
    }
}
export default Kartya;