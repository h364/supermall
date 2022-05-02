<template>
    <div class="shopcartItem">
        <div class="check">
            <check-button @click.native="checkClick" :isChecked="cartItem.checked"></check-button>
        </div>
        <div class="image">
            <img :src="cartItem.image" alt="">
        </div>
        <div class="message">
            <div class="title">{{cartItem.title}}</div>
            <div class="desc">{{cartItem.desc}}</div>
            <div class="price-count">
                <span class="price">￥{{cartItem.price}}</span>
                <span class="count">x{{cartItem.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import checkbutton from '@components/common/checkButton/checkbutton.vue'

    export default {
        name: 'shopcartItem',
        props: {
            cartItem: {
                typeof: Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            'check-button': checkbutton
        },
        methods: {
            checkClick() {
                this.cartItem.checked = !this.cartItem.checked
            }
        }
    }
</script>

<style scoped>
    .shopcartItem {
        display: flex;
        border-bottom: 1px solid;
        height: 100%;
    }

    .check {
        line-height: 140px;
    }

    .image img {
        width: 75px;
        border-radius: 10px;
    }

    .image {
        margin-top: 10px;
    }

    .title,
    .desc {
        width: 250px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .title {
        margin: 10px 0 20px 15px;
        font-size: larger;
        color: black;
    }

    .desc {
        margin: 20px 0 25px 15px;
    }

    .price-count {
        display: flex;
        margin-left: 10px;
        font-size: larger;
        color: orange;
        justify-content: space-between;
    }

    .count {
        color: black;
    }
</style>