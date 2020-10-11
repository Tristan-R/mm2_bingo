<template>
    <section class="section">
        <div class="columns">
            <div class="column is-offset-2 is-8">
                <div class="columns is-multiline is-gapless is-mobile">
                    <div class="column" :class="{'is-one-fifth': selectedSize.tiles === 25, 'is-one-third': selectedSize.tiles === 9}" v-for="(value,index) in indexes" :key="index + 1">
                        <Square :text="getText(value, index + 1)"></Square>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Square from "~/components/Square";

export default {
    name: 'Game',
    data: function () {
        return {
            sizes: {
                three: {
                    title: '3x3',
                    tiles: 9,
                    midTile: 0,
                    lengthMod: 'one-third'
                },
                five: {
                    title: '5x5',
                    tiles: 25,
                    midTile: 13,
                    lengthMod: 'one-fifth'
                }
            },
            selectedSize: {
                title: '5x5',
                tiles: 25,
                midTile: 13,
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
                "TROLL LEVEL",
                "MULTIPLAYER LEVEL",
                "SNAKE BLOCKS"
            ],
            indexes: []
        }
    },
    props: ['gameSize', 'justCustom', 'customGoals'],
    components: {
        Square
    },
    methods: {
        getText: function (value, index) {
            if (index === this.selectedSize.midTile) {
                return "FREE";
            }
            if (this.customGoals) {
                if (this.justCustom) {
                    return this.customGoals[value];
                } else {
                    if (this.items.length <= value) {
                        return this.customGoals[value - this.items.length];
                    } else {
                        return this.items[value];
                    }
                }
            } else {
                return this.items[value];
            }
        }
    },
    mounted: function () {
        if (this.sizes.hasOwnProperty(this.gameSize)) {
            this.selectedSize = this.sizes[this.gameSize];
        }

        let size = this.items.length;
        if (this.customGoals) {
            if (this.justCustom) {
                size = this.customGoals.length;
            } else {
                size += this.customGoals.length;
            }
        }

        let indexes = [];
        while (indexes.length < this.selectedSize.tiles) {
            let randInt = Math.floor(Math.random() * size);
            if (!indexes.includes(randInt)) {
                indexes.push(randInt);
            }
        }
        this.indexes = indexes;
    }
}
</script>
