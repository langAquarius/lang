class Tab {
    constructor(id) {
        this.wrap = this.$(id);
        this.init();
    }
    $(id) {
        return document.getElementById(id);
    }
    init() {
        this.addEvent();
    }
    changTitle($index) {
        let tits = this.wrap.querySelectorAll("ul li");
        [...tits].map((item, index) => {
            if ($index == index) {
                item.className = "act";
            } else {
                item.className = "";
            }
        });
    }
    changContent(index) {
        let cons = document.querySelectorAll("main section");
        [...cons].map(($item, $index) => {
            $item.style.display = "none";
            if (index == $index) {
                $item.style.display = "block";
            }
        });
    }
    addEvent() {
        let tits = document.querySelectorAll("ul li");
        [...tits].map((item, index) => {
            item.addEventListener("click", (event) => {
                this.changTitle(index);
                this.changContent(index);
            });
        });
    }
}
export default Tab;