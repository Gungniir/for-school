<template>
    <div id="body-wrapper">
        <div id="wrapper-header">{{item.title}}</div>
        <div id="wrapper-description">{{item.desc}}</div>
        <div id="wrapper-inputs">
            <div v-for="input in item.inputs" :key="input.id" :is="input.type | primitiveToProgram"
                 v-model="params[input.name]" @enter="$emit('start', Object.assign({}, params))">{{input.label}}
            </div>
        </div>
        <div id="wrapper-footer">
            <BasePrimeButton @click="$emit('start', Object.assign({}, params))">Запустить</BasePrimeButton>
            <BasePrimeButton @click="$emit('clear')">Отчистить вывод</BasePrimeButton>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from "./BaseTextInput";
    import BasePrimeButton from "./BasePrimeButton";

    export default {
        name: "WorkBrowserInteractive",
        components: {BasePrimeButton, BaseTextInput},
        data() {
            return {
                params: {}
            }
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        filters: {
            primitiveToProgram: item => {
                switch (item) {
                    case 'text':
                        return 'BaseTextInput'
                    default:
                        return item
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #body-wrapper {
        & > div {
            background: #b1b1b1;
            padding: 15px;
            margin-bottom: 5px;
        }

        #wrapper-header {
            font-size: 1.3em;
            text-align: center;
        }

        #wrapper-inputs {
            display: flex;
            flex-direction: column;

            & > * {
                margin-bottom: 5px;
            }
        }

        #wrapper-footer {
            display: flex;

            & > * {
                margin: 5px;
                width: 50%;
                flex-grow: 1;
            }
        }
    }
</style>