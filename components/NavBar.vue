<template>
    <b-navbar
        class="navbar header has-shadow is-info"
        role="navigation"
        aria-label="main navigation">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Mario Maker 2 Bingo
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

</style>
