<template>
    <div id='maintabbar'>
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-icon" src="@assets/img/tabbar/home.png">
                <img slot="item-icon-active" src="@assets/img/tabbar/home-active.png">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img slot="item-icon" src="@assets/img/tabbar/category.png">
                <img slot="item-icon-active" src="@assets/img/tabbar/category-active.png">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/shoppingcart">
                <img slot="item-icon" src="@assets/img/tabbar/shopping-cart.png">
                <img slot="item-icon-active" src="@assets/img/tabbar/shopping-cart-active.png">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img slot="item-icon" src="@assets/img/tabbar/my.png">
                <img slot="item-icon-active" src="@assets/img/tabbar/my-active.png">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import tabbaritem from '@components/common/tabbar/tabbaritem.vue'
    import tabbar from '@components/common/tabbar/tabbar.vue'
    
    export default {
        name: 'name',
        components: {
            'tab-bar-item': tabbaritem,
            'tab-bar': tabbar
        }
    }
</script>

<style scoped>

</style>