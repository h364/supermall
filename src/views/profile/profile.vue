<template>
    <div id='profile'>
        <profile-navbar></profile-navbar>
        <profile-account></profile-account>
    </div>
</template>

<script>
    import profileNavbar from '@views/profile/profile/profileNavbar.vue'
    import profileAccount from '@views/profile/profile/profileAccount.vue'

export default {
    name: 'profile',
    components: {
        'profile-navbar': profileNavbar,
        'profile-account': profileAccount
    }
}
</script>

<style scoped>

</style>