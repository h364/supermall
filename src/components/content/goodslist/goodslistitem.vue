<template>
    <div class='goodslistitem'>
        <img :src="goodsitem.show.img" alt="" @load="imgLoad" @click="imgClick">
        <div class="message">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">
                <img v-if="isCollection" @click="collection" src="@assets/img/common/collection-active.png">
                <img v-else @click="collection" src="@assets/img/common/collection.png">
                <span>{{goodsitem.cfav}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name',
        data() {
            return {
                isCollection: false
            }
        },
        props: {
            goodsitem: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            imgLoad() {
                this.$bus.$emit('imgLoad')
            },
            imgClick() {
                this.$router.push('/detail/' + this.goodsitem.iid);
            },
            collection() {
                this.isCollection = !this.isCollection
                if (this.isCollection) {
                    this.goodsitem.cfav++
                } else {
                    this.goodsitem.cfav--
                }
            }
        }
    }
</script>

<style scoped>
    .goodslistitem {
        width: 48%;
    }

    .goodslistitem img {
        width: 100%;
    }

    .goodslistitem .price {
        color: var(--color-text);
    }

    .message {
        display: flex;
        flex-wrap: wrap;
    }

    .price,
    .collect {
        text-align: center;
        flex: 1;
        height: 23px;
        line-height: 23px;
        position: relative;
    }

    .collect img {
        width: 20px;
    }

    .collect span {
        position: absolute;
    }
</style>