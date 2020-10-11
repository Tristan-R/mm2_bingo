<template>
    <section class="section">
        <div class="columns" v-if="showStart">
            <div class="column is-4 is-offset-4">
                <h1>Single Player Game</h1>
                <br/>
                <StartSettings :single-player="true"></StartSettings>
            </div>
        </div>
        <Game v-else :game-size="selectedSize" :just-custom="justCustom" :custom-goals="customGoals"></Game>
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
            customGoals: []
        }
    },
    components: {
        StartSettings,
        Game
    },
    created() {
        this.$nuxt.$on('startSingle', (size, justCustom, customGoals) => {
            this.selectedSize = size;
            this.justCustom = justCustom === true;
            if (customGoals) {
                this.customGoals = customGoals;
            }
            this.showStart = false;
        });
    }
}
</script>

<style scoped>

</style>
