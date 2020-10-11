<template>
    <div>
        <b-select
            placeholder="grid size"
            v-model="selectedSize"
            expanded>
            <option
                v-for="size in sizes"
                :value="size.value"
                :key="size.value">
                {{ size.title }}
            </option>
        </b-select>
        <b-button
            @click="startPressed"
            type="is-link">
            Start
        </b-button>
    </div>
</template>

<script>
export default {
    name: "StartSettings",
    data: function () {
        return {
            sizes: [
                {
                    title: "3x3",
                    value: "three"
                },
                {
                    title: "5x5",
                    value: "five"
                }
            ],
            selectedSize: null
        }
    },
    methods: {
        startPressed: function () {
            $nuxt.$emit('startSingle', this.selectedSize);
        }
    }
}
</script>

<style scoped>

</style>
