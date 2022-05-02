<template>
    <div class="detailNavbar">
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
           this.$emit('detailTitleClick',index)
       },
       imgClick() {
           this.$router.back()
           this.$emit('backClick')
       }
    }
}
</script>

<style scoped>
    .detailNavbar{
        background-color: #fff;
        position: relative;
        height: 44px;
        z-index: 9;
    }
    .detail{
        display: flex;
    }
    .detailItem{
        flex: 1;
    } 
    .detailImg{
        height: 44px;
    }
    .detailImg img{
        margin-top: 10px;
    }
    .active{
        color: var(--color-text);
    }
</style>