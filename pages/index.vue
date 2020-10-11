<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <b-field>
                    <b-button
                        tag="router-link"
                        to="/singleplayer"
                        type="is-link"
                        expanded>
                        Single Player
                    </b-button>
                </b-field>
                <b-field>
                    <b-button
                        tag="router-link"
                        to="/multiplayer"
                        type="is-link"
                        expanded
                        disabled>
                        <b-tooltip
                            label="I'm working on it"
                            type="is-dark"
                            position="is-right">
                        </b-tooltip>
                        Multiplayer
                    </b-button>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script>
import Game from "~/components/Game";

export default {
    data: function () {
        return {}
    },
    components: {
        Game
    }
}
</script>
