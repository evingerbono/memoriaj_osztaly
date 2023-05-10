class Kartya{
    #kep
    #id
    #divElem
    #kepElem
    constructor(kep,id,szuloElem){
        this.#kep=kep;
        this.#id=id;
        this.szuloElem=szuloElem;
    }
    getkep(){
        return this.#kep;
    }
    getid(){
        return this.#id;
    }
    SetKepElem(kep){
        this.#kepElem=kep;
    }
}
export default Kartya;