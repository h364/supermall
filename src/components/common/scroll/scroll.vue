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
                scroll: null,
            }
        },
        props: {
            scrollProbeType: {
                type: Number,
                default() {
                    return 0
                }
            },
            pullUpLoadMore: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                observeDOM: true,
                observeImage: true,
                click: true,
                mouseWheel: true,
                probeType: this.scrollProbeType,
                pullUpLoad: this.pullUpLoadMore
            })
            this.scroll.on('scroll', position => {
                this.$emit('contentScroll', position)
            })
            this.scroll.on('pullingUp', () => {
                this.$emit('pullUpLoad')
            })
        }

    }
</script>

<style scoped>

</style>