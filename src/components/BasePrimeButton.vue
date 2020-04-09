<template>
    <div @click="$emit('click')" :class="classList">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BasePrimeButton",
        props: {
            buttonStyle: {
                type: String,
                default: 'medium'
            }
        },
        computed: {
            classList: (vm) => {
                return ['prime-button', vm.buttonStyle];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .prime-button {
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: inherit;

        background: #202020;
        color: #b1b1b1;
        text-align: center;

        &.medium {
            padding: 10px 15px;
            border-radius: 10px;
        }

        &.large {
            font-size: 1.4em;
            padding: 30px 40px;
            border-radius: 10px;
        }
    }
</style>