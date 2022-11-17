import Component from "./component.js";
import Navbar from "./navbar.js";

export default class Commands {
    constructor(callback) {

        this.fontFamily = document.getElementById("fontFamily");
        this.fontStyle = document.getElementById("fontStyle");
        this.fontWeight = document.getElementById("fontWeight");
        this.events();
    }

    events() {

        this.addOnClick(this.fontFamily, () => { new FontFamily("font-family"); Navbar.closeNavbar(); });
        this.addOnClick(this.fontStyle, () => { new FontStyle("font-style"); Navbar.closeNavbar(); });
        this.addOnClick(this.fontWeight, () => { new FontWeight("font-weight"); Navbar.closeNavbar(); });
    }

    addOnClick(elem, callback) {
        elem.addEventListener("click", callback);
    }
}

class FontFamily extends Component {

    constructor(name) {
        super();
        this.name = name;
        this.link = "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family";
        this.parent = document.getElementById("playground");
        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML('beforeend', this.render());
        this.init();
    }

    init() {
        this.tester = document.querySelectorAll(".playground-text");
        this.input = document.getElementById("font");
        this.input.oninput = () => {
            this.state.text = this.input.value;
            this.tester.forEach(tester => {
                tester.style.fontFamily = this.state.text;
            })
        }
    }

    render() {
        return `
        <h1 id="command-name">
            ${this.name}
        </h1>
        <div id="container" class="command-container">
            <input type="text" name="" class="input" placeholder="Írj ide egy betűstílust pl.: Arial" id="font">
            <h1 class="playground-text" >Ez itt egy véletlenszerű cím</h1>
            <p class="playground-text" ">Ez itt egy véletlenszerű szöveg, hogy képesek legyünk tesztelni!
            </p>
            <span > Tudj meg többet: </span><a href="${this.link}" target="_blank" >${this.link}</a>
        </div>`;
    }
}

class FontStyle extends Component {

    constructor(name) {
        super();
        this.name = name;
        this.link = "https://developer.mozilla.org/en-US/docs/Web/CSS/font-style";
        this.parent = document.getElementById("playground");
        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML('beforeend', this.render());
        this.init();
    }

    init() {
        this.tester = document.querySelectorAll(".playground-text");
        this.input = document.getElementById("fontstyle");
        this.input.oninput = () => {
            this.state.text = this.input.value;
            this.tester.forEach(tester => {
                tester.style.fontStyle = this.state.text;
            })
        }
    }

    render() {
        return `
        <h1 id="command-name">
            ${this.name}
        </h1>
        <div id="container" class="command-container">
            <select id="fontstyle" class="input">
            <option value="normal">normal</option>
            <option value="italic">italic</option>
            <option value="oblique">oblique</option>
            </select>
            <h1 class="playground-text" >Ez itt egy véletlenszerű cím</h1>
            <p class="playground-text" >Ez itt egy véletlenszerű szöveg, hogy képesek legyünk tesztelni!
            </p>
            <span > Tudj meg többet: </span><a href="${this.link}" target="_blank">${this.link}</a>
        </div>`;
    }

}

class FontWeight extends Component {

    constructor(name) {
        super();
        this.name = name;
        this.link = "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight";
        this.parent = document.getElementById("playground");
        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML('beforeend', this.render());
        this.init();
    }

    init() {
        this.tester = document.querySelectorAll(".playground-text");
        this.input = document.getElementById("fontweight");
        this.input.oninput = () => {
            this.state.text = this.input.value;
            this.tester.forEach(tester => {
                tester.style.fontWeight = this.state.text;
            })
        }
    }

    render() {
        return `
        <h1 id="command-name">
            ${this.name}
        </h1>
        <div id="container" class="command-container">
            <select id="fontweight" class="input">
            <option value="lighter">lighter</option>
            <option value="normal">normal</option>
            <option value="bolder">bolder</option>
            <option value="bold">bold</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            </select>
            <h1 class="playground-text" >Ez itt egy véletlenszerű cím</h1>
            <p class="playground-text" >Ez itt egy véletlenszerű szöveg, hogy képesek legyünk tesztelni!
            </p>
            <span > Tudj meg többet: </span><a href="${this.link}" target="_blank">${this.link}</a>
        </div>`;
    }

}