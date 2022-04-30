<template>
    <div id='shopping-cart'>
        <shop-cart></shop-cart>
    </div>
</template>

<script>
    import shopcart from '@views/shoppingcart/shopCart/shopcart.vue'

export default {
    name: 'shopping-cart',
    components: {
        'shop-cart': shopcart
    }
}
</script>

<style scoped>

</style>