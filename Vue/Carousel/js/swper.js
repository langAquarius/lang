Vue.component('swaper-component', {
    template: ` <div class="swaper-conation">
                    <ul class="swaper-slide">
                        <li v-for="(img,idx) in imgList"><img :src="img" alt=""></li>
                    </ul>
                    <ol>
                        <li v-for="(img,idx) in imgList" :class="[idx==index?'active':'']" @click="change(idx)">{{idx+1}}</li>
                    </ol>
                </div>`,
    props: {
        type: Array,
        required: true
    },
    mounted() {

    },
    methods: {
        change(idx) {
            this.index = idx;
        }
    }

})