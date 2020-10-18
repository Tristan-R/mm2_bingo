<template>
    <div>
        <NavBar></NavBar>
        <section class="main-content">
            <nuxt />
        </section>
    </div>
</template>

<script>
import NavBar from "~/components/NavBar";

export default {
    name: "DefaultLayout",
    data () {
        return {}
    },
    components: {
        NavBar
    }
}
</script>

<style>
</style>
