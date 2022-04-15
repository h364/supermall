<template>
    <div id='tabcontrol'>
        <div v-for="(item,index) in titles"
            class="tabitem" 
            :class="{active: currentindex==index}"
            @click="itemclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name',
        props: {
            titles: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                currentindex: 0
            }
        },
        methods: {
            itemclick(index) {
                this.currentindex = index
                this.$emit('tabclick',index)
            }
        }
    }
</script>

<style scoped>
    #tabcontrol {
        display: flex;
        text-align: center;
        height: 45px;
        background-color: white;
        position: sticky;
        top: 44px;
        z-index: 9;
    }

    .tabitem {
        flex: 1;
        margin-top: 7px;
    }

    .tabitem span {
        padding: 5px 0;
    }

    .active {
        color: var(--color-high-text);
    }

    .active span {
        border-bottom: 3px solid var(--color-text);
    }
</style>