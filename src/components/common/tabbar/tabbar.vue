<template>
    <div id='tab-bar'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'name'

    }
</script>

<style>
    #tab-bar {
        background-color: #f6f6f6;
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>