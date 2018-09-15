class Tab {
    constructor(id) {
        this.navBox = this.$(id);
        this.init();
    }
    $(id) {
        return document.getElementById(id);
    }
    init() {
        this.addEvent();
    }
    changeNav($index) {
            let navs = this.navBox.querySelectorAll("div");
            let a = navs.querySelectorAll("a");
            [...navs].map((item, index) => {
                console.log(item > a)
                if ($index == index) {
                    (item > a).className = "act";
                } else {
                    (item > a).className = "";
                }
            });
        }
        // changeSection(index) {
        //     let cons = document.querySelectorAll("main section");
        //     [...cons].map(($item, $index) => {
        //         $item.style.display = "none";
        //         if (index == $index) {
        //             $item.style.display = "block";
        //         }
        //     });
        // }
        // addEvent() {
        //     let navs = document.querySelectorAll("ul li");
        //     [...navs].map((item, index) => {
        //         item.addEventListener("click", (event) => {
        //             this.changeNav(index);
        //             this.changeSection(index);
        //         });
        //     });
        // }
}
export default Tab;