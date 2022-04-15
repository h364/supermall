<template>
    <div id='home'>
        <nav-bar class="home-navbar">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommends :recommends="recommends"></home-recommends>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
        <goods-list :goods="goods[currentType].list"></goods-list>
    </div>
</template>

<script>
    import navbar from '@components/common/navbar/navbar.vue'
    import { homeRequest, homeGoods } from '@network/home.js'
    import swiper from '@components/common/swiper/swiper.vue'
    import swiperitem from '@components/common/swiper/swiperitem.vue'
    import homeswiper from '@views/home/homeswiper/Homeswiper.vue'
    import homerecommends from '@views/home/homerecommends/homerecommends.vue'
    import featureview from '@views/home/featureview/featureview.vue'
    import tabcontrol from '@components/content/tabcontrol/tabcontrol.vue'
    import goodslist from '@components/content/goodslist/goodslist.vue'

    export default {
        name: 'name',
        data() {
            return {
                currentType: 'pop',
                banners: [],
                recommends: [],
                goods: {
                    'pop': { 'page': 0, list: [] },
                    'new': { 'page': 0, list: [] },
                    'sell': { 'page': 0, list: [] },
                }
            }
        },
        components: {
            'nav-bar': navbar,
            'swiper': swiper,
            'swiper-item': swiperitem,
            'home-swiper': homeswiper,
            'home-recommends': homerecommends,
            'feature-view': featureview,
            'tab-control': tabcontrol,
            'goods-list': goodslist
        },
        created() {
            this.homeRequest()
            this.homeGoods('pop')
            this.homeGoods('new')
            this.homeGoods('sell')
        },
        methods: {
            homeRequest() {
                homeRequest().then(res => {
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                }).catch(err => {
                    console.log(err);
                })
            },
            homeGoods(type) {
                const page = this.goods[type].page + 1
                homeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                })
            },
            tabclick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break;
                    case 1:
                        this.currentType = 'new'
                        break;
                    case 2:
                        this.currentType = 'sell'
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .home-navbar {
        background-color: var(--color-text);
    }
</style>