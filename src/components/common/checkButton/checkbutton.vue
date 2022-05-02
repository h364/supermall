<template>
    <div class="checkbutton">
        <img v-if="isChecked" src="@assets/img/cart/checked.png" alt="">
        <img v-else src="@assets/img/cart/unchecked.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'checkbutton',
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .checkbutton img{
        width: 25px;
    }
</style>