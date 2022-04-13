<template>
    <div id='homeswiper'>
        <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
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
            banners: Array
        },
        components: {
            'swiper': swiper,
            'swiper-item': swiperitem
        }
    }
</script>

<style scoped>

</style>