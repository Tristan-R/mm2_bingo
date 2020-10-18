<template>
    <div class="square" :class="{complete: isComplete}" @click="onClick">
        <div class="is-hidden-touch">
            {{ text }}
        </div>
        <div v-if="size === 'five'" class="is-hidden-desktop" style="font-size: 0.4rem; line-height: 0.5rem">
            {{ text }}
        </div>
        <div v-if="size === 'three'" class="is-hidden-desktop" style="font-size: 0.8rem; line-height: 1rem">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Square",
        props: ['id', 'text', 'size'],
        data: function () {
            return {
                isComplete: false,
                selectable: true
            }
        },
        methods: {
            onClick() {
                if (this.selectable) {
                    this.isComplete = !this.isComplete;
                    this.$emit('update', this.id, this.isComplete);
                }
            }
        },
        mounted() {
            if (this.text === 'FREE') {
                this.isComplete = true;
                this.selectable = false;
            }
        }
    }
</script>

<style scoped>
    .square {
        border: 1px solid white;
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        background-color: lightcoral;
    }
    .square div {
        color: black;
        padding-top: 50%;
        height: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .square.complete {
        background-color: greenyellow;
    }
</style>
