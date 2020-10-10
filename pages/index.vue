<template>
    <section class="section">
        <div class="columns">
            <div class="column is-offset-2 is-8">
                <div class="columns is-multiline is-gapless is-mobile">
                    <div class="column is-one-fifth" v-for="(value,index) in Array(25)" :key="index">
                        <Square :text="getText(index)" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '~/components/Card'
import Square from "@/components/Square";

export default {
    name: 'HomePage',
    components: {
        Card,
        Square
    },
    data: function () {
        return {
            items: [
                "ENEMY SPAM",
                "SOUND EFFECTS EVERYWHERE",
                "BRING YOSHI TO THE GOAL",
                "TECH LEVEL",
                "PICK A DOOR / PIPE",
                "1-1 REMAKE",
                "COLLECT ALL COINS",
                "MUSIC LEVEL",
                "SOFTLOCK WITH NO WAY OF DYING",
                "INFINITE FIRE FLOWER BOSS FIGHT",
                "NO CHECKPOINTS (WITHOUT CLEAR CONDITION)",
                "ENEMY SPAM (WITH STAR)",
                "FREE",
                "GOOD LEVEL",
                "BUILDER / SUPERBALL LEVEL",
                "THEMED AFTER ANOTHER GAME",
                "KAIZO BLOCKS",
                "LEVEL CAN BE CHEESED",
                "AUTO MARIO LEVEL",
                "\"FIRST LEVEL\" IN TITLE",
                "MEOWSER OR BOOM-BOOM",
                "TITLE LEVEL",
                "TERRIBLY NAMED LEVEL",
                "KILLS MARIO AT THE START",
                "ON/OFF BLOCKS"
            ]
        }
    },
    methods: {
        getText(index) {
            return this.items[index];
        }
    }
}
</script>
