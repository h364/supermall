<template>
    <div id='shopping-cart'>
        <nav-bar class="cart-navbar">
            <div slot="center">购物车({{$store.state.cartList.length}})</div>
        </nav-bar>
        <scroll ref="scroll" class="content" :scrollProbeType="3" :pullUpLoadMore="true">
            <shop-cart></shop-cart>
        </scroll>
        <cart-bottombar></cart-bottombar>
    </div>
</template>

<script>
    import navbar from '@components/common/navbar/navbar.vue'
    import scroll from '@components/common/scroll/scroll.vue'
    import shopcart from '@views/shoppingcart/shopCart/shopcart.vue'
    import cartbottombar from '@views/shoppingcart/shopCart/cartbottombar.vue'

    export default {
        name: 'shopping-cart',
        components: {
            'nav-bar': navbar,
            'scroll': scroll,
            'shop-cart': shopcart,
            'cart-bottombar': cartbottombar
        },
        activated() {
            this.$refs.scroll.scroll.refresh()
        }
    }
</script>

<style scoped>
    #shopping-cart {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }

    .content {
        height: 711px;
    }

    .cart-navbar {
        background-color: var(--color-text);
    }
</style>