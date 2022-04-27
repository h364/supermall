<template>
    <div class="detail">
        <detai-navbar></detai-navbar>
        <scroll class="content" ref="detailBackTop" :scrollProbeType="3" :pullUpLoadMore="true"
            @contentScroll="contentScroll">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-message :message="goods"></detail-message>
            <detail-shopinfo :shopinfo="shopinfo"></detail-shopinfo>
            <detail-goodsinfo :goodsInfo="goodsInfo"></detail-goodsinfo>
            <detail-goodsparam :goodsParam="goodsParam"></detail-goodsparam>
            <detail-commentinfo :commentInfo="commentInfo"></detail-commentinfo>
            <goods-list :goods="recommend"></goods-list>
        </scroll>
        <back-top @click.native="backclick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
    import { detailRequest, detailGoods, detailShop, detailParam, detailRecommend } from '@network/detail.js'
    import detailNavbar from '@views/detail/detail/detailNavbar.vue'
    import detailswiper from '@views/detail/detail/detailswiper.vue'
    import detailmessage from '@views/detail/detail/detailmessage.vue'
    import detailshopinfo from '@views/detail/detail/detailshopinfo.vue'
    import detailGoodsInfo from '@views/detail/detail/detailGoodsInfo.vue'
    import detailGoodsParam from '@views/detail/detail/detailGoodsParam.vue'
    import detailCommentInfo from '@views/detail/detail/detailCommentInfo.vue'
    import goodslist from '@components/content/goodslist/goodslist.vue'
    import backtop from '@components/content/backtop/backtop.vue'
    import scroll from '@components/common/scroll/scroll.vue'
    export default {
        name: 'detail',
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shopinfo: {},
                goodsInfo: {},
                goodsParam: {},
                commentInfo: {},
                recommend: [],
                isShowBackTop: false
            }
        },
        components: {
            'detai-navbar': detailNavbar,
            'detail-swiper': detailswiper,
            'detail-message': detailmessage,
            'detail-shopinfo': detailshopinfo,
            'detail-goodsinfo': detailGoodsInfo,
            'detail-goodsparam': detailGoodsParam,
            'detail-commentinfo': detailCommentInfo,
            'goods-list': goodslist,
            'back-top': backtop,
            'scroll': scroll
        },
        methods: {
            contentScroll(position) {
                this.isShowBackTop = -position.y > 751
            },
            backclick() {
                this.$refs.detailBackTop.scroll.scrollTo(0, 0, 500)
            }
        },
        created() {
            this.iid = this.$route.params.iid
            detailRequest(this.iid).then((res) => {
                this.topImages.push(...res.result.itemInfo.topImages)
                this.goods = new detailGoods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
                this.shopinfo = new detailShop(res.result.shopInfo)
                this.goodsParam = new detailParam(res.result.itemParams.info, res.result.itemParams.rule)
                this.goodsInfo = res.result.detailInfo
                this.commentInfo = res.result.rate
            })
            detailRecommend().then((res) => {
                this.recommend = res.data.list
                //console.log(this.recommend);
            })
        },
        mounted() {
            this.$bus.$on('imgLoad', () => {
                //refresh()
                this.$refs.detailBackTop.scroll.refresh()
            })
        },
        beforeDestroy() {
            this.$bus.$off('imgLoad')
        },
    }
</script>

<style scoped>
    .detail {
        height: 100vh;
        width: 100vw;
    }

    .content {
        height: 792px;
    }
</style>