<template>
    <ul class="list">
        <el-tree :data="data" accordion @node-expand="open" @current-change="check">
        </el-tree>
    </ul>
</template>
<script>
import data from '@/mock/data/slideBar';
import bus from '@/utils/eventBus';

export default {
    name: 'slideBar',
    data() {
        return {
            data: data.sliderMenu
        };
    },
    methods: {
        open(obj) {
            this.bus.$emit('toggleNav', obj.label);
        },
        check(obj, evt) {
            if (!evt.isLeaf) return;
            this.$router.push({ name: obj.path });
            this.bus.$emit('togglePage', obj.label);
        }
    }
};
</script>