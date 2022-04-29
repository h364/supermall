<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'name'

}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 99;
    }
    .nav-bar img{
        width: 25px;
    }

    .left, .right{
        width: 60px;
        height: 44px;
    }

    .center{
        flex: 1;
    }
</style>