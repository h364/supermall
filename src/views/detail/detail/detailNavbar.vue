<template>
    <div class="detaiNavbar">
        <navbar class="navbar">
            <div slot="left" class="detailImg" @click="imgClick">
                <img src="@assets/img/detail/back.png" alt="">
            </div>
            <div slot="center" class="detail">
                <div v-for="(item,index) in titles" :class="{active: index == currentIndex}" class="detailItem" @click="titleClick(index)">
                    {{item}}
                </div>
            </div>
        </navbar>
    </div>
</template>

<script>
    import navbar from '@components/common/navbar/navbar.vue'

export default {
    name: 'detailNavbar',
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0,
        }
    },
    components: {
        'navbar': navbar
    },
    methods: {
       titleClick(index) {
           this.currentIndex = index
       },
       imgClick() {
           this.$router.back()
       }
    }
}
</script>

<style scoped>
    .detail{
        display: flex;
    }
    .detailItem{
        flex: 1;
    } 
    .detailImg img{
        margin-top: 10px;
    }
    .active{
        color: var(--color-text);
    }
</style>