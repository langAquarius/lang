import Tab from "./js/tab"
import ajax from "./js/ajax"

new Tab("title");
let getSongList = function() {
    let wrap = document.querySelector(".recommend");
    ajax("http://localhost:9090/music").then((result) => {
        let res = JSON.parse(result.item.pageOne.recommend - sg);
        let str = `<div class="tit">${res.tit}</div>
                   <div class="row">`;
        res.map((item, index) => {
            str += ` 
                <div class="remd_img">
                    <img src="${item.pic}" alt="">
                    <p class="remd_text">${item.remd_text}</p>
                </div> `;
        });
        str += `</div>`;
        wrap.innerHTML += str;
        console.log(str);
    });
}


getSongList();