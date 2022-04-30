<template>
    <div id='detailBottomBar'>
        <div class="barLeft">
            <div class="service">
                <img src="@assets/img/detail/service.png" alt="">
                <div>客服</div>
            </div>
            <div class="shop">
                <img src="@assets/img/detail/shop.png" alt="">
                <div>店铺</div>
            </div>
            <div class="collect">
                <img src="@assets/img/common/collection.png" alt="">
                <div>收藏</div>
            </div>
        </div>
        <div class="barRight">
            <div class="addToShopCart" @click="addCart">加入购物车</div>
            <div class="purchase">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailBottomBar',
        methods: {
            addCart() {
                this.$emit('addToCart')
            }
        }
    }
</script>

<style scoped>
    #detailBottomBar {
        position: fixed;
        height: 50px;
        width: 100%;
        bottom: 0;
        z-index: 99;
        display: flex;
        background-color: #fff;
    }

    #detailBottomBar img {
        width: 25px;
    }

    .barLeft {
        width: 50%;
        display: flex;
    }

    .service,
    .shop,
    .collect {
        text-align: center;
        flex: 1;
    }

    .barRight {
        width: 50%;
        display: flex;
    }

    .addToShopCart,
    .purchase {
        width: 50%;
        text-align: center;
        line-height: 50px;
    }

    .addToShopCart {
        background-color: rgb(251, 211, 137);
    }

    .purchase {
        background-color: var(--color-text);
    }
</style>