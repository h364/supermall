<template>
    <div id='goodslist'>
        <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item"></goods-list-item>
    </div>
</template>

<script>
    import goodslistitem from './goodslistitem.vue'
    export default {
        name: 'name',
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            'goods-list-item': goodslistitem
        },
    }
</script>

<style scoped>
    #goodslist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 15px 0 0;
    }
</style>