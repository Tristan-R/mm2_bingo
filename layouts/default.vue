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
    name: "Default Layout",
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
