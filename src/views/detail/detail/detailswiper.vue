<template>
    <div class="detailswiper">
        <swiper class="swiperInDetail">
            <swiper-item v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import swiper from '@components/common/swiper/swiper.vue'
    import swiperitem from '@components/common/swiper/swiperitem.vue'
export default {
    name: 'name',
    props: {
        topImages: {
            type: Array,
            default: []
        }
    },
    components: {
        'swiper': swiper,
        'swiper-item': swiperitem
    },
    created () {
        console.log(this.topImages);
    }
}
</script>

<style scoped>
    .swiperInDetail{
        width: 100%;
    }
</style>