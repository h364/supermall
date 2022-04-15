<template>
    <div class='goodslistitem'>
        <img :src="goodsitem.show.img" alt="">
        <div>
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    props: {
        goodsitem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .goodslistitem{
        width: 48%;
    }
    .goodslistitem img{
        width: 100%;
    }
    .goodslistitem .price{
        color: var(--color-text);
    }
</style>