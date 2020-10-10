<template>
    <div class="square" :class="{complete: isComplete}" @click="isComplete = !isComplete">
        <div>
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Square",
        props: ['text'],
        data: function () {
            return {
                isComplete: false
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
        background-color: greenyellow;
    }
    .square div {
        padding-top: 50%;
        height: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .square.complete {
        background-color: yellowgreen;
    }
</style>
