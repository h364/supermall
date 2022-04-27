<template>
    <div class="detailGoodsParam">
        <div class="goodsSize" v-for="items in goodsParam.sizes">
            <div class="sizeInfo" v-for="item in items">
                <span v-for="it in item">{{it}}</span>
            </div>
        </div>
        <div class="goodsinfo">
            <div class="infoItem" v-for="item in goodsParam.infos">
                <span class="itemKey">{{item.key}}</span>
                <span class="itemValue">{{item.value}}</span>
            </div>
        </div>
        <div class="goodsService" v-if="goodsParam.image != 0">
            <img :src="goodsParam.image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailGoodsParam',
        props: {
            goodsParam: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style scoped>
    .goodsinfo {
        padding: 15px;
        box-shadow: 0 5px 3px rgba(128, 128, 128, 0.2);
    }

    .goodsSize {
        padding-bottom: 15px;
        box-shadow: 0 5px 3px rgba(128, 128, 128, 0.2);
    }

    .sizeInfo {
        display: flex;
        margin: 26px 32px 17px;
    }

    .sizeInfo span {
        flex: 1;
    }

    .infoItem {
        position: relative;
        margin: 26px 17px 17px;
    }

    .infoItem .itemKey {
        display: inline-block;
    }

    .infoItem .itemValue {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        top: 50%;
        transform: translate(0, -50%);
        color: var(--color-text);
        left: 100px;
    }
    .goodsService{
        margin-top: 15px;
    }
    .goodsService img{
        width: 100vw;
    }
</style>