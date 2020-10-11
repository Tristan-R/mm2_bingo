<template>
    <div>
        <NavBar></NavBar>
        <section class="main-content columns">
            <div class="container column is-10">
                <nuxt />
            </div>
        </section>
    </div>
</template>

<script>
import NavBar from "~/components/NavBar";

export default {
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
