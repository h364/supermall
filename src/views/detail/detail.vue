<template>
    <div class="detail">
        <detai-navbar></detai-navbar>
        <detail-swiper :topImages="topImages"></detail-swiper>
    </div>
</template>

<script>
    import { detailRequest } from '@network/detail.js'
    import detailNavbar from '@views/detail/detail/detailNavbar.vue'
    import detailswiper from '@views/detail/detail/detailswiper.vue'
export default {
    name: 'detail',
    data() {
        return {
            iid: null,
            topImages: []
        }
    },
    components: {
        'detai-navbar': detailNavbar,
        'detail-swiper': detailswiper
    },
    created () {
        this.iid = this.$route.params.iid
        detailRequest(this.iid).then((res) => {
            this.topImages.push(...res.result.itemInfo.topImages)
        })
    }
}
</script>

<style scoped>

</style>