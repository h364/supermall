<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
    export default {
        name: 'name',
        /* data() {
            return {
                isActive: true,
            }
        }, */
        props: {
            path: String
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        height: 49px;

    }
    .tab-bar-item{
        flex: 1;
        text-align: center;
    }
    .tab-bar-item img {
        width: 25px;
    }
</style>