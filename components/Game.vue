<template>
    <section class="section">
        <div class="columns">
            <div class="column is-offset-2 is-8">
                <div class="columns is-multiline is-gapless is-mobile">
                    <div class="column" :class="{'is-one-fifth': selectedSize.tiles === 25, 'is-one-third': selectedSize.tiles === 9}" v-for="(value,index) in indexes" :key="index + 1">
                        <Square :id="index" :text="getText(value, index)" :size="selectedSize.value" @update="squareUpdated"></Square>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Square from "@/components/Square";

export default {
    name: 'Game',
    data: function () {
        return {
            sizes: {
                three: {
                    title: '3x3',
                    value: 'three',
                    tiles: 9,
                    midTile: -1,
                    lengthMod: 'one-third',
                    conditions: {
                        line: {
                            complete: false,
                            indexes: [],
                            options: [
                                [0,1,2],
                                [3,4,5],
                                [6,7,8],
                                [0,3,6],
                                [1,4,7],
                                [2,5,8]
                            ]
                        },
                        diagonal: {
                            complete: false,
                            indexes: [],
                            options: [
                                [0,4,8],
                                [2,4,6]
                            ]
                        }
                    }
                },
                five: {
                    title: '5x5',
                    value: 'five',
                    tiles: 25,
                    midTile: 12,
                    lengthMod: 'one-fifth',
                    conditions: {
                        line: {
                            complete: false,
                            indexes: [],
                            options: [
                                [0,1,2,3,4],
                                [5,6,7,8,9],
                                [10,11,12,13,14],
                                [15,16,17,18,19],
                                [20,21,22,23,24],
                                [0,5,10,15,20],
                                [1,6,11,16,21],
                                [2,7,12,17,22],
                                [3,8,13,18,23],
                                [4,9,14,19,24]
                            ]
                        },
                        diagonal: {
                            complete: false,
                            indexes: [],
                            options: [
                                [0,6,12,18,24],
                                [4,8,12,16,20]
                            ]
                        },
                        stamp: {
                            complete: false,
                            indexes: [],
                            options: [
                                [0,1,5,6],
                                [3,4,8,9],
                                [15,16,20,21],
                                [18,19,23,24]
                            ]
                        }
                    }
                }
            },
            selectedSize: {
                title: '5x5',
                value: 'five',
                tiles: 25,
                midTile: 12,
                lengthMod: 'one-fifth',
                conditions: {
                    line: {
                        complete: false,
                        indexes: [],
                        options: [
                            [0,1,2,3,4],
                            [5,6,7,8,9],
                            [10,11,12,13,14],
                            [15,16,17,18,19],
                            [20,21,22,23,24],
                            [0,5,10,15,20],
                            [1,6,11,16,21],
                            [2,7,12,17,22],
                            [3,8,13,18,23],
                            [4,9,14,19,24]
                        ]
                    },
                    diagonal: {
                        complete: false,
                        indexes: [],
                        options: [
                            [0,6,12,18,24],
                            [4,8,12,16,20]
                        ]
                    },
                    stamp: {
                        complete: false,
                        indexes: [],
                        options: [
                            [0,1,5,6],
                            [3,4,8,9],
                            [15,16,20,21],
                            [18,19,23,24]
                        ]
                    }
                }
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
            indexes: [],
            completedIndexes: [],
            completeFull: false
        }
    },
    props: ['gameSize', 'selectedConditions', 'justCustom', 'customGoals'],
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
        },
        squareUpdated(index, complete) {
            this.completedIndexes[index] = complete;
            if (complete) {
                this.checkConditions();
            } else {
                this.completeFull = false;
                for (const [key, cond] of Object.entries(this.selectedSize.conditions)) {
                    if (cond.indexes.includes(index)) {
                        this.checkConditions(key)
                    }
                }
            }
        },
        async checkConditions(condition = "all") {
            let temp = this.completedIndexes.map((el,index) => el ? index : -1);

            if (condition === "all") {
                for (const [key, cond] of Object.entries(this.selectedSize.conditions)) {
                    if (cond.complete) continue;
                    let option = cond.options.find(ar => ar.every(el => temp.includes(el)));

                    if (option !== undefined) {
                        cond.complete = true;
                        cond.indexes = option

                        this.$buefy.notification.open({
                            duration: 5000,
                            message: 'Successfully completed a ' + this.$options.filters.formatCondition(key),
                            position: 'is-bottom-right',
                            type: 'is-success'
                        })
                    }
                }
            } else {
                let cond = this.selectedSize.conditions[condition];

                let option = cond.options.find(ar => ar.every(el => temp.includes(el)));

                if (option !== undefined) {
                    cond.complete = true;
                    cond.indexes = option
                } else {
                    cond.complete = false;
                    cond.indexes = [];
                }
            }

            if (temp.filter(el => el !== -1).length === this.selectedSize.tiles) {
                this.completeFull = true;

                this.$buefy.notification.open({
                    duration: 8000,
                    message: 'BINGO!',
                    position: 'is-bottom-right',
                    type: 'is-success'
                })
            }
        }
    },
    mounted() {
        if (this.sizes.hasOwnProperty(this.gameSize)) {
            this.selectedSize = this.sizes[this.gameSize];
        }

        this.selectedSize.conditions = Object.keys(this.selectedSize.conditions)
            .filter(key => this.selectedConditions.includes(key))
            .reduce((obj, key) => {
                obj[key] = this.selectedSize.conditions[key];
                return obj;
            }, {});

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

        this.completedIndexes = new Array(this.selectedSize.tiles).fill(false);
        if (this.selectedSize.midTile !== -1) {
            this.completedIndexes[this.selectedSize.midTile] = true;
        }
    },
    filters: {
        formatCondition: function (condition) {
            switch (condition) {
                case 'line':
                    return 'Line'

                case 'diagonal':
                    return 'Diagonal'

                case 'stamp':
                    return 'Postage Stamp'
            }
        }
    }
}
</script>
