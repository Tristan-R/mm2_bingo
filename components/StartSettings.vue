<template>
    <div>
        <b-field v-if="singlePlayer">
            <strong>Single Player Game</strong>
        </b-field>
        <b-field v-else>
            <strong>Multiplayer Game</strong>
        </b-field>
        <b-field label="Grid Size">
            <b-select
                placeholder="grid size"
                v-model="options.selectedSize"
                expanded
                @input="resetConditions">
                <option
                    v-for="size in sizes"
                    :value="size.value"
                    :key="size.value">
                    {{ size.title }}
                </option>
            </b-select>
        </b-field>
        <b-field label="Select optional conditions." v-if="options.selectedSize">
            <div class="columns" v-if="['five','seven'].includes(options.selectedSize)">
                <div class="column is-one-third">
                    <b-image
                        :src="require('@/assets/' + options.selectedSize + '-line.png')"
                        alt="Line">
                    </b-image>
                    <b-checkbox
                        class="removeLabel"
                        v-model="options.selectedConditions"
                        native-value="line"
                        style="padding-top: 10px; width: 100%; margin: auto; justify-content: center">
                    </b-checkbox>
                </div>
                <div class="column is-one-third">
                    <b-image
                        :src="require('@/assets/' + options.selectedSize + '-diagonal.png')"
                        alt="Diagonal">
                    </b-image>
                    <b-checkbox
                        class="removeLabel"
                        v-model="options.selectedConditions"
                        native-value="diagonal"
                        style="padding-top: 10px; width: 100%; margin: auto; justify-content: center">
                    </b-checkbox>
                </div>
                <div class="column is-one-third">
                    <b-image
                        :src="require('@/assets/' + options.selectedSize + '-stamp.png')"
                        alt="Postage Stamp">
                    </b-image>
                    <b-checkbox
                        class="removeLabel"
                        v-model="options.selectedConditions"
                        native-value="stamp"
                        style="padding-top: 10px; width: 100%; margin: auto; justify-content: center">
                    </b-checkbox>
                </div>
            </div>
            <div class="columns" v-if="['three'].includes(options.selectedSize)">
                <div class="column is-6">
                    <b-image
                        :src="require('@/assets/three-line.png')"
                        alt="Line">
                    </b-image>
                    <b-checkbox
                        class="removeLabel"
                        v-model="options.selectedConditions"
                        native-value="line"
                        style="padding-top: 10px; width: 100%; margin: auto; justify-content: center">
                    </b-checkbox>
                </div>
                <div class="column is-6">
                    <b-image
                        :src="require('@/assets/three-diagonal.png')"
                        alt="Diagonal">
                    </b-image>
                    <b-checkbox
                        class="removeLabel"
                        v-model="options.selectedConditions"
                        native-value="diagonal"
                        style="padding-top: 10px; width: 100%; margin: auto; justify-content: center">
                    </b-checkbox>
                </div>
            </div>
        </b-field>
        <b-field label="Custom Goals">
            <b-input
                v-model="customGoals"
                type="textarea"
                placeholder="Separate each extra by a comma, e.g. EXTRA1,EXTRA2,..."
                expanded>
            </b-input>
        </b-field>
        <b-field>
            <b-checkbox v-model="options.justCustom">
                Use only custom goals?
            </b-checkbox>
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
                    value: "three",
                    tiles: 9,
                    defaultConditions: []
                },
                {
                    title: "5x5",
                    value: "five",
                    tiles: 25,
                    defaultConditions: [
                        'line',
                        'diagonal',
                        'stamp'
                    ]
                }
            ],
            customGoals: null,
            options: {
                selectedSize: null,
                selectedConditions: ['line', 'diagonal', 'stamp'],
                justCustom: false,
                customGoals: null
            }
        }
    },
    props: ['singlePlayer'],
    methods: {
        resetConditions: function () {
            this.options.selectedConditions = this.sizes.find(el => el.value === this.options.selectedSize)['defaultConditions'];
        },
        startPressed: function () {
            if (this.customGoals) {
                this.options.customGoals = this.customGoals.split(',').filter(el => el !== "");
                if (this.options.justCustom) {
                    let reqTiles = this.options.selectedSize ? this.sizes.find(el => el.value === this.options.selectedSize)['tiles'] : 25;
                    if (this.options.customGoals.length < reqTiles) {
                        this.$buefy.toast.open({
                            duration: 5000,
                            message: 'You have not entered enough custom goals. Please enter at least ' + reqTiles + '.',
                            type: 'is-danger'
                        });
                        return;
                    }
                }
            } else {
                let reqTiles = this.options.selectedSize ? this.sizes.find(el => el.value === this.options.selectedSize)['tiles'] : 25;
                if (this.options.justCustom) {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: 'You have not entered any custom goals. Please enter at least ' + reqTiles + '.',
                        type: 'is-danger'
                    });
                    return;
                }
            }
            $nuxt.$emit('startSingle', this.options);
        }
    }
}
</script>

<style scoped>

</style>

<style>
    .removeLabel .control-label {
        padding: 0 !important;
    }
</style>
