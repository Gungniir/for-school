<template>
    <label>
        <slot></slot>
        <input :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)"
               @keyup.enter="$emit('enter')">
    </label>
</template>

<script>
    export default {
        name: "BaseTextInput",
        props: {
            value: {
                type: String
            },
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    label {
        width: 100%;
        display: flex;
        align-items: center;

        input {
            margin-left: 5px;
            padding: 5px 10px;

            flex-grow: 1;
        }
    }
</style>