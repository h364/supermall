<template>
    <div class="detailGoodsInfo">
        <div class="goodsMessage">
            <div class="goodsDesc">
                <span>{{goodsInfo.desc}}</span>
            </div>
            <div class="goodsKey" v-for="item in goodsInfo.detailImage">
                <span>{{item.key}}</span>
            </div>
        </div>
        <div class="goodsImage">
            <div class="goodslist" v-for="item in goodsInfo.detailImage">
                <div class="goodsItem" v-for="imgItem in item.list">
                    <img :src="imgItem" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name',
        props: {
            goodsInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .goodsMessage {
        margin-top: 30px;
    }

    .goodsMessage .goodsDesc {
        margin: 0 15px;
    }

    .goodsMessage .goodsKey {
        color: black;
        font-size: 18px;
        margin: 30px 0 15px 15px;
    }

    .goodsImage {
        box-shadow: 0 5px 3px rgba(128, 128, 128, 0.2);
    }

    .goodsItem img {
        width: 100vw;
    }
</style>