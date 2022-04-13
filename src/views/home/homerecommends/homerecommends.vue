<template>
    <div id='homerecommends'>
        <div class="recommend">
            <div class="recommenditem" v-for="(item,index) in recommends" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name',
        props: {
            recommends: Array
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        width: 100%;
        font-size: 14px;
        padding: 15px 0 30px;
        border-bottom: 8px solid #eee;
    }
    .recommenditem{
        flex: 1;
    }
    .recommenditem img{
        width: 90px;
        height: 90px;
    }
</style>