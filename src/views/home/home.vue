<template>
    <div id='home'>
        <nav-bar class="home-navbar">
            <div slot="center">购物街</div>
        </nav-bar>
        <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import navbar from '@components/common/navbar/navbar.vue'
    import { homeRequest } from '@network/home.js'
    import swiper from '@components/common/swiper/swiper.vue'
    import swiperitem from '@components/common/swiper/swiperitem.vue'

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
            'swiper-item': swiperitem
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