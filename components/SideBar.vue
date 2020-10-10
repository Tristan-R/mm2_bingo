<template>
    <section>
        <p class="menu-label is-hidden-touch">
            General
        </p>
        <ul class="menu-list">
            <li
                v-for="(item, key) of items"
                :key="key"
            >
                <nuxt-link
                    :to="item.to"
                    exact-active-class="is-active"
                >
                    <b-icon :icon="item.icon" /> {{ item.title }}
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "SideBar",
        props: ['items']
    }
</script>

<style scoped>

</style>
