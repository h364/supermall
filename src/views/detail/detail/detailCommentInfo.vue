<template>
    <div class="detailCommentInfo">
        <div class="comment">
            <div class="commentTop">
                <span>用户评价</span>
                <span>更多</span>
            </div>
            <div class="commentUser" v-for="item in commentInfo.list">
                <img :src="item.user.avatar" alt="">
                <span>{{item.user.uname}}</span>
            </div>
            <div class="commentMessage" v-for="item in commentInfo.list">
                <div class="message">{{item.content}}</div>
                <span>{{item.style}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailCommentInfo',
        props: {
            commentInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style scoped>
    .comment {
        margin-top: 25px;
    }

    .commentTop {
        display: flex;
        justify-content: space-around;
        height: 40px;
        box-shadow: 0 5px 3px rgba(128, 128, 128, 0.2);
    }

    .commentUser {
        margin: 25px 0 0 8px;
        vertical-align: middle;
        position: relative;
    }

    .commentUser img {
        width: 45px;
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
        border-radius: 100%;
    }

    .commentUser span {
        position: absolute;
        top: 50%;
        margin-left: 10px;
        transform: translate(0, -50%);
    }

    .commentMessage{
        margin: 20px 0 0;
    }

    .commentMessage span{
        color: #666666a0;
    }

    .message{
        margin: 15px 0;
    }
</style>