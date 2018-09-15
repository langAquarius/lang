class Carousel { //轮播图；
    constructor(obj) {
        this.obj = obj;
        this.init();
    }
    init() {
        this.box = this.obj.ele;
        this.imgBox = this.box.children[0];
        this.pagBox = this.box.children[1];
        this.img = this.imgBox.children;
        this.pag = this.pagBox.children;
        this.h = this.box.offsetWidth;
        this.n = 1;
        this.hasclass = 0;
        this.timer = null;
        this.randem();
        this.bindEvent();
        this.autoplay();
    }
    randem() {
        let sImg = '';
        let spag = '';
        for (let i = 0; i < this.obj.data.length; i++) {
            sImg += '<li><a href="#"><img src="' + this.obj.data[i].src + '" alt=""></a></li>';
            if (i === 0) {
                spag += '<li class="active">' + (i + 1) + '</li>';
            } else {
                spag += '<li>' + (i + 1) + '</li>';
            }
        }

        let lbtn = document.createElement('span');
        lbtn.className = 'left';
        lbtn.innerHTML = '<img src="img/l.png" alt="">';
        let rbtn = document.createElement('span');
        rbtn.className = 'right';
        rbtn.innerHTML = '<img src="img/r.png" alt="">';
        this.box.appendChild(lbtn);
        this.box.appendChild(rbtn);
        this.imgBox.innerHTML = sImg;
        this.pagBox.innerHTML = spag;
        this.cloneEle();
    }
    cloneEle() {
        let oneLi = this.img[0].cloneNode(true);
        this.imgBox.appendChild(oneLi);
        let endLi = this.img[this.img.length - 2].cloneNode(true);
        this.imgBox.insertBefore(endLi, this.imgBox.children[0]);
        this.imgBox.style.width = this.h * 2 + this.imgBox.offsetWidth + 'px';
        this.imgBox.style.marginLeft = -this.h + 'px';
        this.length = this.imgBox.children.length;

    }
    autoplay() {
        this.timer = setInterval(() => {
            this.rightBtn.onclick();
        }, 3000);
    }
    slide(ins) {
        if (this.box.timer) clearInterval(this.box.timer);
        this.box.timer = setInterval(() => {
            let imgboxLeft = parseFloat(this.imgBox.style.marginLeft);
            let flag = ins - imgboxLeft < 0 ? -1 : 1;
            if (Math.abs(ins - imgboxLeft) < 1) {
                this.imgBox.style.marginLeft = ins + 'px';
                clearInterval(this.box.timer);
            } else {
                let step = Math.abs(ins - imgboxLeft) / 5;
                this.imgBox.style.marginLeft = step * flag + imgboxLeft + 'px';
            }
        }, 40)
    }
    bindEvent() {
        for (let i = 0; i < this.pag.length; i++) {
            this.pag[i].onclick = () => {
                this.n = i + 1;
                this.change();
            }
        };
        let leftBtn = this.box.querySelector(".left");
        this.rightBtn = this.box.querySelector(".right");
        this.rightBtn.onclick = () => {
            this.n++;
            if (this.n === this.length - 1) {
                this.n = 1;
                this.imgBox.style.marginLeft = 0;
            }
            this.change();
        }
        leftBtn.onclick = () => {
            this.n--;
            if (this.n === 0) {
                this.n = this.length - 2;
                this.imgBox.style.marginLeft = -(this.length - 1) * this.h + 'px';
            }
            this.change();
        }
        this.box.onmouseover = () => {
            clearInterval(this.timer);
        };
        this.box.onmouseout = () => {
            this.autoplay();
        };
    }
    change() {
        this.pag[this.hasclass].className = '';
        this.pag[this.n - 1].className = 'active';
        this.hasclass = this.n - 1;
        this.slide(-this.n * this.h);
    }
}
export default Carousel;