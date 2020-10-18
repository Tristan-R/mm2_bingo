<template>
    <section class="section">
        <div class="columns" v-if="showStart">
            <div class="column is-6-tablet is-offset-3-tablet is-4-fullhd is-offset-4-fullhd">
                <StartSettings :single-player="true" @start="startGame"></StartSettings>
            </div>
        </div>
        <Game v-else :game-size="selectedSize" :selected-conditions="selectedConditions" :just-custom="justCustom" :custom-goals="customGoals"></Game>
    </section>
</template>

<script>
import StartSettings from "~/components/StartSettings";
import Game from "~/components/Game";

export default {
    name: "SinglePlayerIndex",
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
            showStart: true,
            justCustom: false,
            selectedConditions: [],
            customGoals: []
        }
    },
    components: {
        StartSettings,
        Game
    },
    methods: {
        startGame(options) {
            this.selectedSize = options.selectedSize ?? 'five';
            this.selectedConditions = options.selectedConditions;
            this.justCustom = options.justCustom;
            if (options.customGoals) {
                this.customGoals = options.customGoals;
            }
            this.showStart = false;
        }
    }
}
</script>

<style scoped>

</style>
