<template>
    <div id='home'>
        <nav-bar class="home-navbar">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll class="content" ref="backtop" @contentScroll="contentScroll" :scrollProbeType="3" :pullUpLoadMore="true"
            @pullUpLoad="loadMore">
            <home-swiper :banners="banners"></home-swiper>
            <home-recommends :recommends="recommends"></home-recommends>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
            <goods-list :goods="showgoods"></goods-list>
        </scroll>
        <back-top @click.native="backclick" v-show="isShowBackTop"></back-top>
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
    import scroll from '@components/common/scroll/scroll.vue'
    import backtop from '@components/content/backtop/backtop.vue'

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
                },
                isShowBackTop: false
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
            'goods-list': goodslist,
            'scroll': scroll,
            'back-top': backtop
        },
        created() {
            this.homeRequest()
            this.homeGoods('pop')
            this.homeGoods('new')
            this.homeGoods('sell')
        },
        mounted() {
            const refresh = this.debounce(this.$refs.backtop.scroll.refresh, 20)
            this.$bus.$on('imgLoad', () => {
                //refresh()
                this.$refs.backtop.scroll.refresh()
            })
        },
        beforeDestroy() {
            this.$bus.$off('imgLoad')
        },
        computed: {
            showgoods() {
                return this.goods[this.currentType].list
            }
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
                    this.goods[type].page += 1
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
            },
            backclick() {
                this.$refs.backtop.scroll.scrollTo(0, 0, 500)
            },
            contentScroll(position) {
                this.isShowBackTop = -position.y > 751
            },
            loadMore() {
                this.homeGoods(this.currentType)
                this.$refs.backtop.scroll.finishPullUp()
            },
            debounce(func, delay) {
                let timer
                return function (...args) {
                    if(timer){
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        func.apply(this, args)
                    },delay)
                }
            }
        }
    }
</script>

<style scoped>
    #home {
        height: 100vh;
    }

    .home-navbar {
        background-color: var(--color-text);
    }

    .content {
        height: 751px;
    }
</style>