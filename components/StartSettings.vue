<template>
    <div>
        <b-field>
            <strong>Single Player Game</strong>
        </b-field>
        <b-field label="Grid Size">
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
        </b-field>
        <b-field label="Custom Goals">
            <b-input
                v-model="customGoals"
                type="textarea"
                placeholder="Separate each extra by a comma, e.g. EXTRA1,EXTRA2,..."
                expanded>
            </b-input>
        </b-field>
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
            selectedSize: null,
            justCustom: false,
            customGoals: null
        }
    },
    props: ['singlePlayer'],
    methods: {
        startPressed: function () {
            let goals = null;
            if (this.customGoals) {
                goals = this.customGoals.split(',');
            }
            $nuxt.$emit('startSingle', this.selectedSize, this.justCustom, goals);
        }
    }
}
</script>

<style scoped>

</style>
