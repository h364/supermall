<template>
    <div class="detailshopinfo">
        <div class="shopLogo">
            <img :src="shopinfo.logo" alt="">
            <div class="shopName">
                <span>{{shopinfo.name}}</span>
            </div>
        </div>
        <div class="shopmessage">
            <div class="shopSell">
                <div class="allLeft">
                    <div class="sellLeft">
                        <span>{{shopinfo.sells}}</span>
                        <div>总销量</div>
                    </div>
                    <div class="sellRight">
                        <span>{{shopinfo.goodsCount}}</span>
                        <div>全部宝贝</div>
                    </div>
                </div>
            </div>
            <div class="middleLine"></div>
            <div class="shopComment">
                <div class="allRight">
                    <div v-for="item in shopinfo.score">
                        <div class="commentItem">
                            <span>{{item.name}}</span>
                            <span :class="{isBetter: item.isBetter, isBad: !item.isBetter }">{{item.score}}</span>
                            <span :class="{isBetter: item.isBetter, isBad: !item.isBetter }" v-if="item.isBetter">高</span>
                            <span :class="{isBetter: item.isBetter, isBad: !item.isBetter }" v-else>低</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailshopinfo',
        props: {
            shopinfo: {
                type: Object,
                default: {}
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .detailshopinfo {
        position: relative;
        height: 250px;
    }

    .shopLogo {
        margin: 35px 0 0 8px;
        position: relative;
    }

    .shopLogo img {
        width: 45px;
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
        border-radius: 100%;
    }

    .shopName {
        display: inline-block;
        position: absolute;
        left: 85px;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .shopSell {
        position: relative;
        width: 50%;
    }

    .allLeft {
        display: flex;
        text-align: center;
        margin-top: 30px;
        justify-content: space-around;
    }

    .allLeft span {
        font-size: 20px;
        color: black;
    }

    .allLeft div {
        margin-top: 10px;
        font-size: 16px;
        color: black;
    }

    .middleLine {
        width: 1px;
        height: 75px;
        position: absolute;
        background-color: grey;
        box-shadow: 0 0 2px rgba(128, 128, 128, 0.3);
        bottom: 75px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .allRight {
        width: 50%;
        position: absolute;
        right: 0;
        top: 60px;
    }

    .commentItem {
        position: relative;
    }

    .commentItem span {
        display: inline-block;
    }

    .commentItem :nth-child(1) {
        margin: 8px 15px 8px 30px;
    }

    .commentItem :nth-child(3) {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .isBetter{
        color: var(--color-text);
    }

    .isBad{
        color: rgba(0, 128, 0, 0.7);
    }
</style>