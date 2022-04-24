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
                            <span :class="{isBetter: item.isBetter, isBad: !item.isBetter }"
                                v-if="item.isBetter">高</span>
                            <span :class="{isBetter: item.isBetter, isBad: !item.isBetter }" v-else>低</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="entryShop">
            <span>进店逛逛</span>
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
        height: 230px;
        box-shadow: 0 5px 3px rgba(128, 128, 128, 0.2);
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
        left: 98px;
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
        height: 65px;
        position: absolute;
        background-color: rgba(128, 128, 128, 0.5);
        box-shadow: 0 0 2px rgba(128, 128, 128, 0.3);
        bottom: 55px;
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

    .isBetter {
        color: var(--color-text);
    }

    .isBad {
        color: rgba(0, 128, 0, 0.7);
    }

    .entryShop{
        position: absolute;
        text-align: center;
        line-height: 25px;
        height: 25px;
        width: 125px;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: rgba(128, 128, 128, 0.3);
        border-radius: 10px;
    }
</style>