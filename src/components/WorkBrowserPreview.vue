<template>
    <div id="body-preview">
        <label for="body-code"></label><textarea disabled id="body-code" :value="code"></textarea>
        <label for="body-output"></label><textarea disabled id="body-output" :value="out"></textarea>
    </div>
</template>

<script>
    export default {
        name: "WorkBrowserPreview",
        props: {
            code: {
                type: String,
                required: true
            },
            out: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
    #body-preview {
        padding: 10px;
        display: flex;
        flex-direction: column;

        #body-code {
            background: #202020;
            color: #b1b1b1;
            height: 47%;
        }

        #body-output {
            margin-top: auto;
            padding: 10px;
            background: #202020;
            color: #b1b1b1;
            height: 47%;
        }
    }
</style>