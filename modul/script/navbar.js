import Component from "./component.js";
import Commands from './command.js'

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
            this.closeEvent();
            this.offMenuEvent();
            setTimeout(() => {
                this.elem.classList.add("menu-open")
            }, .1);
            new Commands();
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

    static closeNavbar(){
        document.getElementById("menu").classList.remove("menu-open");
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
        this.offmenus.forEach((menu, index) => {

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
        <div class="offmenu-target1 menutarget">font- ??s text- form??z??sok, sz??nek, h??tt??rk??pek</div>
        <div class="offmenu1 offmenu">
            <p class="command" id="fontFamily">font-family: <span class="value">??rt??k</span>;</p>
            <p class="command" id="fontStyle" inplayground=".playground-text">font-style: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text" id="fontWeight">font-weight: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text" id="fontSize">font-size: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">text-align: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">text-transform: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">text-decoration: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">text-indent: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">color: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">background-color: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">background: url(<span class="value">??rt??k</span>);</p>
            <p class="command" inplayground=".playground-text">background-image: url(<span class="value">??rt??k</span>);</p>
            <p class="command" inplayground=".playground-text">background-size: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">background-repeat: <span class="value">??rt??k</span>;</p>
            <p class="command" inplayground=".playground-text">background-position: <span class="value">??rt??k</span>;</p>
        </div>

        <div class="offmenu-target2 menutarget">box model, border, padding, margin, K??pek ??sztat??sa a sz??veg mell??: float</div>
        <div class="offmenu2 offmenu">
        <p class="command"> box-sizing: <span class="value">??rt??k</span>;</p>
        <p class="command"> width: <span class="value">??rt??k</span>;</p>
        <p class="command"> height: <span class="value">??rt??k</span>;</p>

        <p class="command"> min-width: <span class="value">??rt??k</span>;</p>
        <p class="command"> max-width: <span class="value">??rt??k</span>;</p>

        <p class="command"> min-height: <span class="value">??rt??k</span>;</p>
        <p class="command"> max-height: <span class="value">??rt??k</span>;</p>
        <p class="command"> border: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-left: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-right: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-top: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-bottom: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-width: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-radius: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-style: <span class="value">??rt??k</span>;</p>
        <p class="command"> border-color: <span class="value">??rt??k</span>;</p>
        <p class="command"> padding: <span class="value">??rt??k</span>;</p>
        <p class="command"> padding-left: <span class="value">??rt??k</span>;</p>
        <p class="command"> padding-right: <span class="value">??rt??k</span>;</p>
        <p class="command"> padding-top: <span class="value">??rt??k</span>;</p>
        <p class="command"> padding-bottom: <span class="value">??rt??k</span>;</p>
        <p class="command"> margin: <span class="value">??rt??k</span>;</p>
        <p class="command"> margin-left: <span class="value">??rt??k</span>;</p>
        <p class="command"> margin-right: <span class="value">??rt??k</span>;</p>
        <p class="command"> margin-top: <span class="value">??rt??k</span>;</p>
        <p class="command"> margin-bottom: <span class="value">??rt??k</span>;</p>
        <p class="command"> float: <span class="value">??rt??k</span>;</p>
        </div>
        <div class="offmenu-target3 menutarget">Reszponzivit??s, media query haszn??lata, Oldalalak??t??s gridekkel</div>
        <div class="offmenu3  offmenu">
        <p class="command"> @media screen and (max-width: <span class="value">??rt??k </span>){ tov??bbi parancsok }
        </p>
        <p class="command"> @media screen and (min-width: <span class="value">??rt??k </span>){ tov??bbi parancsok }
        </p>
        <p class="command"> @media screen and (max-height: <span class="value">??rt??k </span>){ tov??bbi parancsok }
        </p>
        <p class="command"> @media screen and (min-height: <span class="value">??rt??k </span>){ tov??bbi parancsok }
        </p>
        <p class="command"> @media only screen and (orientation: landscape ){ tov??bbi parancsok }</p>
        <p class="command"> @media only screen and (orientation: portrait ){ tov??bbi parancsok }</p>
        <p class="command"> display: <span class="value">??rt??k</span>;</p>
        <p class="command"> display: <span class="value">block</span>;</p>
        <p class="command"> display: <span class="value">inline-block</span>;</p>
        <p class="command"> display: <span class="value">inline</span>;</p>
        <p class="command"> display: <span class="value">grid</span>;</p>
        <p class="command"> grid-template-columns: <span class="value">??rt??k</span> <span class="value">??rt??k</span>
            <span class="value">??rt??k</span>;
        </p>
        <p class="command"> grid-template-rows: <span class="value">??rt??k</span> <span class="value">??rt??k</span>
            <span class="value">??rt??k</span>;
        </p>
        <p class="command"> grid-template-areas: <span class="value">??rt??k</span> <span class="value">??rt??k</span>
            <span class="value">??rt??k</span>;
        </p>
        <p class="command"> grid-area: <span class="value">??rt??k</span>;</p>
        <p class="command"> grid-row-start: <span class="value">??rt??k</span>;</p>
        <p class="command"> grid-row-end: <span class="value">??rt??k</span>;</p>
        <p class="command"> grid-row: <span class="value">??rt??k</span>/<span class="value">??rt??k</span>;</p>
        <p class="command"> grid-column-start: <span class="value">??rt??k</span>;</p>
        <p class="command"> grid-column-end: <span class="value">??rt??k</span>;</p>
        <p class="command"> grid-column: <span class="value">??rt??k</span>/<span class="value">??rt??k</span>;</p>
        <p class="command"> justify-self: <span class="value">??rt??k</span>;</p>
        <p class="command"> align-self: <span class="value">??rt??k</span>;</p>
        <p class="command"> place-self: <span class="value">align-self / justify-self</span>;</p>
        <p class="command"> justify-items: <span class="value">??rt??k</span>;</p>
        <p class="command"> align-items: <span class="value">??rt??k</span>;</p>
        <p class="command"> place-items: <span class="value">align-items / justify-items</span>;</p>
        <p class="command"> justify-content: <span class="value">??rt??k</span>;</p>
        <p class="command"> align-content: <span class="value">??rt??k</span>;</p>
        <p class="command"> place-content: <span class="value">align-content / justify-content</span>;</p>
        <p class="command"> gap: <span class="value">??rt??k</span>;</p>
        </div>
        <div class="offmenu-target4 menutarget">CSS file import??l??sa, Bet??st??lus hozz??ad??sa CSS-hez</div>
        <div class="offmenu4  offmenu">
        <p class="command">@import url(<span class="value">??rt??k</span>);</p>
        <p class="command">@font-face {
            font-family: <span class="value">??rt??k</span>;
            src: url(<span class="value">??rt??k</span>);
            }</p>
            </div>
    </div>`
    }
}