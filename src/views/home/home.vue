<template>
    <div id='home'>
        <nav-bar class="home-navbar">
            <div slot="center">购物街</div>
        </nav-bar>
       <home-swiper :banners="banners"></home-swiper>
       <home-recommends :recommends="recommends"></home-recommends>
    </div>
</template>

<script>
    import navbar from '@components/common/navbar/navbar.vue'
    import { homeRequest } from '@network/home.js'
    import swiper from '@components/common/swiper/swiper.vue'
    import swiperitem from '@components/common/swiper/swiperitem.vue'
    import homeswiper from '@views/home/homeswiper/Homeswiper.vue'
    import homerecommends from '@views/home/homerecommends/homerecommends.vue'

    export default {
        name: 'name',
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        components: {
            'nav-bar': navbar,
            'swiper': swiper,
            'swiper-item': swiperitem,
            'home-swiper': homeswiper,
            'home-recommends': homerecommends
        },
        created() {
            homeRequest().then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            }).catch(err => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
    .home-navbar {
        background-color: var(--color-text);
    }
</style>