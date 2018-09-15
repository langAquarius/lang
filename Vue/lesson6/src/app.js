console.log("hello world!");

import Tab from "./js/tab"
import Ajax from "./js/ajax"

new Tab("title");
//渲染内容；
let getSongsList = function() {
    let wrap = document.getElementById("songsList");
    Ajax("http://localhost:8080/songs").then((result) => {
        let res = JSON.parse(result);
        let str = "";
        res.map((item, index) => {
            str += ` <li class="col-xs-4 pl0 pr0">
                    <span>
                        <i class="fa fa-music "></i>
                        ${item.paly}
                    </span>
                    <dl>
                        <dt>
                            <img src="${item.url}">
                        </dt>
                        <dd>${item.name}</dd>
                    </dl>
                </li>`;

        });
        wrap.innerHTML += str;
    });
}
getSongsList();