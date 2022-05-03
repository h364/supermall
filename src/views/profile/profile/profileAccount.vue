<template>
    <div class="profileAccount">
        <div class="account">
            <div class="balance">
                <div>0.00元</div>
                <div>我的余额</div>
            </div>
            <div class="preferential">
                <div>0个</div>
                <div>我的优惠</div>
            </div>
            <div class="integral">
                <div>0分</div>
                <div>我的积分</div>
            </div>
        </div>
        <div class="application">
            <div class="message">
                <img src="@assets/img/profile/message.png" alt="">
                我的消息
            </div>
            <div class="preferMall">
                <img src="@assets/img/profile/preferential.png" alt="">
                积分商城
            </div>
            <div class="vipCart">
                <img src="@assets/img/profile/profileVip.png" alt="">
                会员卡
            </div>
            <div class="myShopCart" @click="cartClick">
                <img src="@assets/img/profile/profileCart.png" alt="">
                我的购物车
            </div>
            <div class="downLoad">
                <img src="@assets/img/profile/downLoad.png" alt="">
                下载购物APP
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profileAccount',
        methods: {
            cartClick() {
                this.$router.push('/shoppingcart')
            }
        }
    }
</script>

<style scoped>
    .account {
        height: 80px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0 10px 3px rgba(128, 128, 128, 0.2);
    }

    .application {
        margin-top: 10px;
    }

    .application img {
        width: 20px;
        margin-right: 7px;
    }

    .application div {
        height: 60px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    }
</style>