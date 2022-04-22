<template>
    <div class="detail">
        <detai-navbar></detai-navbar>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-message :message="goods"></detail-message>
        <detail-shopinfo :shopinfo="shopinfo"></detail-shopinfo>
    </div>
</template>

<script>
    import { detailRequest, detailGoods,detailShop } from '@network/detail.js'
    import detailNavbar from '@views/detail/detail/detailNavbar.vue'
    import detailswiper from '@views/detail/detail/detailswiper.vue'
    import detailmessage from '@views/detail/detail/detailmessage.vue'
    import detailshopinfo from '@views/detail/detail/detailshopinfo.vue'
export default {
    name: 'detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shopinfo: {}
        }
    },
    components: {
        'detai-navbar': detailNavbar,
        'detail-swiper': detailswiper,
        'detail-message': detailmessage,
        'detail-shopinfo': detailshopinfo
    },
    created () {
        this.iid = this.$route.params.iid
        detailRequest(this.iid).then((res) => {
            this.topImages.push(...res.result.itemInfo.topImages)
            this.goods = new detailGoods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
            this.shopinfo = new detailShop(res.result.shopInfo)
            console.log(this.shopinfo);
        })
    }
}
</script>

<style scoped>

</style>