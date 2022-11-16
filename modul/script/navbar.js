import Component from "./component.js";

export default class Navbar extends Component {
    constructor() {
        super();
        this.open = document.getElementById("open");
        this.init();
    }

    init() {
        this.openEvent();

    }

    openEvent() {
        this.open.addEventListener("click", () => {
            this.parent.insertAdjacentHTML('beforeend', this.render());
            this.elem = document.getElementById("menu");
            this.close = document.getElementById("close");
            this.menutargets = document.querySelectorAll(".menutarget");
            this.offmenus = document.querySelectorAll(".offmenu");
            console.log(this.offmenus)
            this.closeEvent();
            this.offMenuEvent();
            setTimeout(() => {
                this.elem.classList.add("menu-open")
            }, .1);
        });
    }

    closeEvent() {
        this.close.addEventListener("click", () => {
            this.elem.classList.remove("menu-open");
            this.elem.ontransitionend = () => {
                setTimeout(() => {
                    this.elem.remove();
                }, .1);
            }
        });
    }

    offMenuEvent() {
        this.menutargets.forEach((menu, index) => {
            menu.addEventListener("click", () => {
                this.closeoffMenus();
                this.openOffMenu(index);
            });
        });
    }

    closeoffMenus() {
        this.offmenus.forEach((menu,index) => {
           
            this.closeOffMenu(index);
        });
    }

    closeOffMenu(index) {
        this.offmenus[index].classList.remove("offmenu-active");
    }

    openOffMenu(index) {
        this.offmenus[index].classList.add("offmenu-active");
    }




    render() {
        return `<div class="menu" id="menu">
        <div class="menu-head">
        <div class="menutitle">Parancsok</div><button class="close" id="close"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </button></div>
        <div class="offmenu-target1 menutarget">font- és text- formázások, színek, háttérképek</div>
        <div class="offmenu1 offmenu">
            <p class="command">font-family: <span class="value">érték</span>;</p>
            <p class="command">font-style: <span class="value">érték</span>;</p>
            <p class="command">font-style: <span class="value">érték</span>;</p>
            <p class="command">font-weight: <span class="value">érték</span>;</p>
            <p class="command">font-size: <span class="value">érték</span>;</p>
            <p class="command">text-align: <span class="value">érték</span>;</p>
            <p class="command">text-transform: <span class="value">érték</span>;</p>
            <p class="command">text-decoration: <span class="value">érték</span>;</p>
            <p class="command">text-indent: <span class="value">érték</span>;</p>
            <p class="command">color: <span class="value">érték</span>;</p>
            <p class="command">background-color: <span class="value">érték</span>;</p>
            <p class="command">background: url(<span class="value">érték</span>);</p>
            <p class="command">background-image: url(<span class="value">érték</span>);</p>
            <p class="command">background-size: <span class="value">érték</span>;</p>
            <p class="command">background-repeat: <span class="value">érték</span>;</p>
            <p class="command">background-position: <span class="value">érték</span>;</p>
        </div>

        <div class="offmenu-target2 menutarget">box model, border, padding, margin, Képek úsztatása a szöveg mellé: float</div>
        <div class="offmenu2 offmenu">
        <p class="command"> box-sizing: <span class="value">érték</span>;</p>
        <p class="command"> width: <span class="value">érték</span>;</p>
        <p class="command"> height: <span class="value">érték</span>;</p>

        <p class="command"> min-width: <span class="value">érték</span>;</p>
        <p class="command"> max-width: <span class="value">érték</span>;</p>

        <p class="command"> min-height: <span class="value">érték</span>;</p>
        <p class="command"> max-height: <span class="value">érték</span>;</p>
        <p class="command"> border: <span class="value">érték</span>;</p>
        <p class="command"> border-left: <span class="value">érték</span>;</p>
        <p class="command"> border-right: <span class="value">érték</span>;</p>
        <p class="command"> border-top: <span class="value">érték</span>;</p>
        <p class="command"> border-bottom: <span class="value">érték</span>;</p>
        <p class="command"> border-width: <span class="value">érték</span>;</p>
        <p class="command"> border-radius: <span class="value">érték</span>;</p>
        <p class="command"> border-style: <span class="value">érték</span>;</p>
        <p class="command"> border-color: <span class="value">érték</span>;</p>
        <p class="command"> padding: <span class="value">érték</span>;</p>
        <p class="command"> padding-left: <span class="value">érték</span>;</p>
        <p class="command"> padding-right: <span class="value">érték</span>;</p>
        <p class="command"> padding-top: <span class="value">érték</span>;</p>
        <p class="command"> padding-bottom: <span class="value">érték</span>;</p>
        <p class="command"> margin: <span class="value">érték</span>;</p>
        <p class="command"> margin-left: <span class="value">érték</span>;</p>
        <p class="command"> margin-right: <span class="value">érték</span>;</p>
        <p class="command"> margin-top: <span class="value">érték</span>;</p>
        <p class="command"> margin-bottom: <span class="value">érték</span>;</p>
        <p class="command"> float: <span class="value">érték</span>;</p>
        </div>
        <div class="offmenu-target3 menutarget">Reszponzivitás, media query használata, Oldalalakítás gridekkel</div>
        <div class="offmenu3  offmenu">
        <p class="command"> @media screen and (max-width: <span class="value">érték </span>){ további parancsok }
        </p>
        <p class="command"> @media screen and (min-width: <span class="value">érték </span>){ további parancsok }
        </p>
        <p class="command"> @media screen and (max-height: <span class="value">érték </span>){ további parancsok }
        </p>
        <p class="command"> @media screen and (min-height: <span class="value">érték </span>){ további parancsok }
        </p>
        <p class="command"> @media only screen and (orientation: landscape ){ további parancsok }</p>
        <p class="command"> @media only screen and (orientation: portrait ){ további parancsok }</p>
        <p class="command"> display: <span class="value">érték</span>;</p>
        <p class="command"> display: <span class="value">block</span>;</p>
        <p class="command"> display: <span class="value">inline-block</span>;</p>
        <p class="command"> display: <span class="value">inline</span>;</p>
        <p class="command"> display: <span class="value">grid</span>;</p>
        <p class="command"> grid-template-columns: <span class="value">érték</span> <span class="value">érték</span>
            <span class="value">érték</span>;
        </p>
        <p class="command"> grid-template-rows: <span class="value">érték</span> <span class="value">érték</span>
            <span class="value">érték</span>;
        </p>
        <p class="command"> grid-template-areas: <span class="value">érték</span> <span class="value">érték</span>
            <span class="value">érték</span>;
        </p>
        <p class="command"> grid-area: <span class="value">érték</span>;</p>
        <p class="command"> grid-row-start: <span class="value">érték</span>;</p>
        <p class="command"> grid-row-end: <span class="value">érték</span>;</p>
        <p class="command"> grid-row: <span class="value">érték</span>/<span class="value">érték</span>;</p>
        <p class="command"> grid-column-start: <span class="value">érték</span>;</p>
        <p class="command"> grid-column-end: <span class="value">érték</span>;</p>
        <p class="command"> grid-column: <span class="value">érték</span>/<span class="value">érték</span>;</p>
        <p class="command"> justify-self: <span class="value">érték</span>;</p>
        <p class="command"> align-self: <span class="value">érték</span>;</p>
        <p class="command"> place-self: <span class="value">align-self / justify-self</span>;</p>
        <p class="command"> justify-items: <span class="value">érték</span>;</p>
        <p class="command"> align-items: <span class="value">érték</span>;</p>
        <p class="command"> place-items: <span class="value">align-items / justify-items</span>;</p>
        <p class="command"> justify-content: <span class="value">érték</span>;</p>
        <p class="command"> align-content: <span class="value">érték</span>;</p>
        <p class="command"> place-content: <span class="value">align-content / justify-content</span>;</p>
        <p class="command"> gap: <span class="value">érték</span>;</p>
        </div>
        <div class="offmenu-target4 menutarget">CSS file importálása, Betűstílus hozzáadása CSS-hez</div>
        <div class="offmenu4  offmenu">
        <p class="command">@import url(<span class="value">érték</span>);</p>
        <p class="command">@font-face {
            font-family: <span class="value">érték</span>;
            src: url(<span class="value">érték</span>);
            }</p>
            </div>
    </div>`
    }
}