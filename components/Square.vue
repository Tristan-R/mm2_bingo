<template>
    <div class="square" :class="{complete: isComplete}" @click="onClick">
        <div>
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Square",
        props: ['id', 'text'],
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
                    $nuxt.$emit('squareUpdated', this.id, this.isComplete);
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
        border: 1px solid black;
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
