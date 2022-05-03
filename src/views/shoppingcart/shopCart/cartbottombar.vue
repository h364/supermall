<template>
    <div id='cartbottombar'>
        <div class="checkbottombar">
            <check-button @click.native="selectAll" :isChecked="isSelectAll"></check-button>
            <span>全选</span>
        </div>
        <div class="totalPrice">合计:{{totalPrice}}</div>
        <div class="calculate" @click="calClick">去购买:{{totalGoods}}</div>
    </div>
</template>

<script>
    import checkbutton from '@components/common/checkButton/checkbutton.vue'

    export default {
        name: 'cartbottombar',
        components: {
            'check-button': checkbutton
        },
        computed: {
            totalPrice() {
                return '￥' + this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.count
                }, 0).toFixed(2)
            },
            totalGoods() {
                return this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.count
                }, 0)
            },
            isSelectAll() {
                if (this.$store.state.cartList.length == 0) {
                    return false
                } else {
                    return !this.$store.state.cartList.find(item => !item.checked)
                }
            }
        },
        methods: {
            selectAll() {
                if (this.isSelectAll) {
                    this.$store.state.cartList.forEach(item => item.checked = false)
                } else {
                    this.$store.state.cartList.forEach(item => item.checked = true)
                }
            },
            calClick() {
                if (this.$store.state.cartList.length == 0) {
                    this.$toast.show('购物车为空,请添加商品', 2000)
                } else if (this.$store.state.cartList.length != 0 && this.totalGoods == 0) {
                    this.$toast.show('您还没有选择商品', 2000)
                }
            }
        }
    }
</script>

<style scoped>
    #cartbottombar {
        position: relative;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: #eee;
    }

    .checkbottombar {
        width: 100px;
        display: flex;
        align-items: center;
    }

    .totalPrice {
        text-align: center;
        flex: 1;
    }

    .calculate {
        width: 100px;
        text-align: center;
    }
</style>