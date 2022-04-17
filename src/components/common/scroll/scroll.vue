<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: 'scroll',
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper,{
                observeDOM: true,
                click: true,
                mouseWheel: true
            })
        }

    }
</script>

<style scoped>

</style>