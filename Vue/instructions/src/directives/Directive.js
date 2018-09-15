import Vue from 'vue'
Vue.directive('Drag', {
    bind() {},
    inserted(el, value) {
        console.log(el)
        console.log(value)
        let startX = 0
        let startY = 0
        let flag = true
        el.ontouchstart = (event) => {
            let thous = event.touches[0];
            startX = thous.clientX - el.offsetLeft
            startY = thous.clientY - el.offsetTop
            console.log(startX)
            console.log(startY)
            flag = true;
        }
        el.ontouchmove = (event1) => {
            let thous1 = event1.touches[0];
            let moveX = thous1.clientX - startX
            let moveY = thous1.clientY - startY
            let w = document.body.clientWidth - el.offsetWidth;
            let h = document.body.clientHeight - el.offsetHeight;
            console.log(startX)
            console.log(startY)
            console.log(w)
            console.log(h)
            if (moveX < 0) moveX = 0;
            if (moveY < 0) moveY = 0;
            if (moveX > w) moveX = w;
            if (moveY > h) moveY = h;
            if (flag) {
                el.style.left = moveX + 'px';
                el.style.top = moveY + 'px';
            }
        }
        el.ontouchend = (event2) => {
            let thous2 = event2.touches[0];
            flag = false;
        }
    },
    updata(el, value) {
        console.log(value)
    }
})