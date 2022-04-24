<template>
    <div class="detailmessage">
        <div class="message">{{message.title}}</div>
        <div class="price">
            <div class="newPrice">
                <p>{{message.newPrice}}</p>
            </div>
            <div class="oldPrice">
                <p>{{message.oldPrice}}</p>
            </div>
            <div class="activity">
                <p>活动价</p>
            </div>
        </div>
        <div class="columns">
            <div class="columnsItem" v-for="(item,index) in message.columns">{{item}}</div>
        </div>
        <div class="service">
            <div class="serviceItem" v-for="item in message.services">
                <img :src="item.icon" alt="">
                <div class="serviceName">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailmessage',
        props: {
            message: {
                type: Object,
            }
        },
    }
</script>

<style scoped>
    .detailmessage{
        height: 230px;
    }
    .message {
        font-size: 18px;
        color: black;
        margin-top: 20px;
    }

    .price {
        margin-top: 20px;
        display: flex;
    }

    .price .newPrice {
        margin-left: 8px;
        font-size: 30px;
        color: var(--color-text);
    }

    .oldPrice {
        height: 30px;
        width: 50px;
        margin-right: 6px;
        position: relative;
    }

    .oldPrice p {
        position: absolute;
        bottom: 0;
        text-decoration: line-through;
    }

    .activity {
        width: 55px;
        height: 20px;
        text-align: center;
        background-color: var(--color-text);
        border-radius: 20px;
    }

    .columns {
        width: 100%;
        display: flex;
        margin-top: 20px;
    }

    .columns .columnsItem {
        flex: 1;
    }

    .columns :nth-child(1) {
        margin-left: 8px;
    }

    .columns :nth-child(2) {
        text-align: center;
    }

    .columns :nth-child(3) {
        margin-right: 8px;
        text-align: right;
    }

    .service {
        position: relative;
        display: flex;
        margin-top: 30px;
        padding-bottom: 25px;
        box-shadow: 0 5px 3px rgba(128, 128, 128, 0.2);
    }

    .service img {
        width: 15px;
        position: absolute;
        top: 3px;
    }

    .serviceItem {
        flex: 1;
    }

    .service :nth-child(1) {
        margin-left: 4px;
    }

    .service :nth-child(2) {
        text-align: center;
    }

    .service :nth-child(3) {
        text-align: right;
        margin-right: 8px;
    }

    .serviceName {
        display: inline-block;
        font-size: 10px;
        margin-left: 15px;
    }
</style>