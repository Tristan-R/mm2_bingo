<template>
    <section class="section">
        <div class="columns">
            <div class="column is-offset-2 is-8">
                <div class="columns is-multiline is-gapless is-mobile">
                    <div class="column" :class="{'is-one-fifth': selectedSize.tiles === 25}" v-for="(value,index) in Array(selectedSize.tiles)" :key="index + 1">
                        <Square :text="getText(index)"></Square>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Square from "~/components/Square";

export default {
    data: function () {
        return {
            sizes: {
                three: {
                    title: '3x3',
                    tiles: 9,
                    midTile: 4,
                    lengthMod: 'one-third'
                },
                five: {
                    title: '5x5',
                    tiles: 25,
                    midTile: 12,
                    lengthMod: 'one-fifth'
                }
            },
            selectedSize: {
                title: '5x5',
                tiles: 25,
                midTile: 12,
                lengthMod: 'one-fifth'
            },
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
                "ON/OFF BLOCKS",
                "SPEEDRUN",
                "WATER LEVEL",
                "DEV EXIT",
                "#DGR LEVEL",
                "ART LEVEL",
                "MINIGAME",
                "LITTLE TIMMY LEVEL",
                "SIDE SCROLLER",
                "TROLL LEVEL"
            ],
            itemsUsed: []
        }
    },
    name: 'HomePage',
    components: {
        Square
    },
    methods: {
        getText: function (index) {
            if (index === this.selectedSize.midTile) {
                return "FREE";
            }

            let randInt = Math.floor(Math.random() * this.items.length);
            while (this.items[randInt] === undefined) {
                randInt = Math.floor(Math.random() * this.items.length);
            }
            let returnItem = this.items[randInt];

            delete this.items[randInt];

            return returnItem;
        }
    }
}
</script>
