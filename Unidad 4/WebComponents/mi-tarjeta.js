class MiTarjerta extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Hola , mundo";
    }
}

window.customElements.define('mi-tarjeta', MiTarjerta);