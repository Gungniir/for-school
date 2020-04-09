<template>
    <div :class="classList" @click="$emit('click')">
        <div class="item-title">{{work.title}}</div>
        <div class="item-type">Тип: {{work.type}}</div>
    </div>
</template>

<script>
    export default {
        name: "WorkBrowserNavItem",
        props: {
            work: {
                type: Object,
                required: true
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classList: (vm) => {
                if (vm.active) {
                    return ['nav-item', 'active']
                }
                return ['nav-item']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-item {
        padding: 10px 15px;

        color: #b1b1b1;
        border-bottom: 1px solid #b1b1b1;

        cursor: pointer;

        &:first-of-type {
            border-top: 1px solid #b1b1b1;
        }

        &.active, &:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .item-title {
            text-align: center;
        }

        .item-type {
            text-align: end;
        }
    }
</style>