<template>
    <div class="detail">
        <detai-navbar></detai-navbar>
    </div>
</template>

<script>
    import detailNavbar from '@views/detail/detail/detailNavbar.vue'
export default {
    name: 'detail',
    components: {
        'detai-navbar': detailNavbar
    }

}
</script>

<style scoped>

</style>