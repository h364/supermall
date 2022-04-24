<template>
    <div class="detail">
        <detai-navbar></detai-navbar>
        <scroll class="content" :scrollProbeType="3" :pullUpLoadMore="true">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-message :message="goods"></detail-message>
            <detail-shopinfo :shopinfo="shopinfo"></detail-shopinfo>
            <detail-goodsinfo :goodsInfo="goodsInfo"></detail-goodsinfo>
            <detail-goodsparam :goodsParam="goodsParam"></detail-goodsparam>
        </scroll>
    </div>
</template>

<script>
    import { detailRequest, detailGoods, detailShop, detailParam } from '@network/detail.js'
    import detailNavbar from '@views/detail/detail/detailNavbar.vue'
    import detailswiper from '@views/detail/detail/detailswiper.vue'
    import detailmessage from '@views/detail/detail/detailmessage.vue'
    import detailshopinfo from '@views/detail/detail/detailshopinfo.vue'
    import detailGoodsInfo from '@views/detail/detail/detailGoodsInfo.vue'
    import detailGoodsParam from '@views/detail/detail/detailGoodsParam.vue'
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
                goodsParam: {}
            }
        },
        components: {
            'detai-navbar': detailNavbar,
            'detail-swiper': detailswiper,
            'detail-message': detailmessage,
            'detail-shopinfo': detailshopinfo,
            'detail-goodsinfo': detailGoodsInfo,
            'detail-goodsparam': detailGoodsParam,
            'scroll': scroll
        },
        created() {
            this.iid = this.$route.params.iid
            detailRequest(this.iid).then((res) => {
                this.topImages.push(...res.result.itemInfo.topImages)
                this.goods = new detailGoods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
                this.shopinfo = new detailShop(res.result.shopInfo)
                this.goodsParam = new detailParam(res.result.itemParams.info, res.result.itemParams.rule)
                this.goodsInfo = res.result.detailInfo
                //console.log(res.result);
                console.log(this.goodsParam);
            })
        }
    }
</script>

<style scoped>
    .detail {
        height: 100vh;
        width: 100vw;
    }
    .content{
        height: 792px;
    }
</style>