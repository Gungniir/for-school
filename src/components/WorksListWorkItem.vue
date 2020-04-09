<template>
    <div class="work-item" @click="$emit('click')">
        <div class="header">{{title}}</div>
        <div class="body" v-html="desc"></div>
    </div>
</template>

<script>
    export default {
        name: "WorksListWorkItem",
        props: {
            title: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .work-item {
        margin-top: 5px;
        padding: 10px;
        border: 2px solid #202020;
        border-radius: 5px;

        cursor: pointer;

        .header {
            padding-bottom: 5px;
            margin-bottom: 5px;
            border-bottom: 1px solid #202020;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.05);
        }
    }
</style>