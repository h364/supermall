<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        methods: {
            show(message, duration = 1500) {
                this.message = message
                this.isShow = true
                setTimeout(() => {
                    this.isShow = false
                }, duration)
            }
        }
    }
</script>

<style scoped>
    .toast{
        position: absolute;
        z-index: 999;
        left: 50%;
        top: 50%;
        padding: 15px 10px;
        border-radius: 10px;
        transform: translate(-50%, -50%);
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>