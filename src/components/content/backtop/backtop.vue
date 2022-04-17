<template>
    <div class='backtop'>
        <img src="@assets/img/common/back-top.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'backtop'

}
</script>

<style scoped>
    .backtop{
        background-color: white;
        position: absolute;
        width: 70px;
        height: 70px;
        text-align: center;
        right: 15px;
        bottom: 70px;
        z-index: 9;
        border-radius: 50%;
    }
    .backtop img{
        margin-top: 15px;
        width: 40px;
    }
</style>