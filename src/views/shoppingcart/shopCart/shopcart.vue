<template>
    <div id='shopCart'>
        <shopcart-item v-for="(item,index) in $store.state.cartList" :cartItem="item" :key="index"></shopcart-item>
    </div>
</template>

<script>
    import shopcartItem from '@views/shoppingcart/shopCart/shopcartItem.vue'

export default {
    name: 'shopCart',
    components: {
        'shopcart-item': shopcartItem
    }
}
</script>

<style scoped>
</style>