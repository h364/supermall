<template>
    <div id='shopCart'>
        <div class="shopCartItem" v-for="item in $store.state.cartList">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: 'shopCart',

}
</script>

<style scoped>

</style>