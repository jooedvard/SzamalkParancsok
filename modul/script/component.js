export default class Component {
    constructor() {
        this.parent = document.getElementById("app");
        this.state = {
            
        }
    }

    addOnClick(elem, callback) {
        elem.addEventListener("click", () => {
            callback();
        })
    }
}