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
                <b-tooltip
                    style="width: 100%"
                    label="I'm working on it"
                    type="is-dark"
                    position="is-right">
                <b-field>
                    <b-button
                        icon-left="lock"
                        type="is-link"
                        expanded
                        disabled>
                        Multiplayer
                    </b-button>
                </b-field>
                </b-tooltip>
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
