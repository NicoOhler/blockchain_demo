<template>
    <div class="hello">
        <b-card class="mx-3"
            ><h1>SHA256 Hash</h1>
            <h4>Data:</h4>
            <b-form-textarea
                class="mx-auto"
                style="width: 60%"
                v-model="ascii"
                placeholder="Insert data here"
                rows="6"
                max-rows="24"
            ></b-form-textarea>
            <br>
            <h4>Hash: {{ computeHash }}</h4>
        </b-card>
    </div>
</template>

<script>
import sha256Hash from "../../supporting_functions/unused/sha256";

export default {
    name: "Hash",
    data() {
        return {
            ascii: "",
        };
    },
    computed: {
        computeHash: function () {
            return sha256Hash.hash(this.ascii);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
}
</style>
