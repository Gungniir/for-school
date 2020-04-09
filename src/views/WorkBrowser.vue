<template>
    <div id="work-browser">
        <div id="browser-nav">
            <WorkBrowserNavItem v-for="item of items" :key="item.id" :work="item" :active="item.id === selectedItemId"
                                @click="selectItem(item.id)"/>
        </div>
        <div id="browser-body">
            <WorkBrowserInteractive :item="selectedItem" @start="start" @clear="out = ''"/>
            <WorkBrowserPreview :code="code" :out="out"/>
        </div>
    </div>
</template>

<script>
    import WorkBrowserNavItem from "../components/WorkBrowserNavItem";
    import WorkBrowserInteractive from "../components/WorkBrowserInteractive";
    /**
     * @type {Array}
     */
    import items from "../data/workItems.json"
    import methods from "../methods"
    import methodsRaw from "../data/methods.json"
    import beautifier from 'js-beautify'
    import WorkBrowserPreview from "../components/WorkBrowserPreview";

    export default {
        name: "WorkBrowser",
        components: {WorkBrowserPreview, WorkBrowserInteractive, WorkBrowserNavItem},
        data() {
            return {
                selectedItemId: (this.itemId !== 0) ? this.itemId : items[0].id,
                out: ''
            }
        },
        props: {
            workId: {
                type: Number,
                required: true
            },
            itemId: {
                type: Number,
                default: 0
            }
        },
        computed: {
            items: (vm) => {
                return items.filter(item => {
                    return item.workId === vm.workId
                })
            },
            selectedItem: (vm) => {
                return items.find(item => {
                    return item.id === vm.selectedItemId
                });
            },
            code: (vm) => {
                return beautifier(methodsRaw[vm.selectedItem.run]);
            }
        },
        methods: {
            selectItem: function (id) {
                this.selectedItemId = id;
                this.$router.push(`/work/${this.workId}/item/${this.selectedItemId}`)
            },
            start: function (params) {
                let response;
                try {
                    response = methods[this.selectedItem.run](params);
                } catch (e) {
                    response = e.toString();
                }

                let date = new Date();
                let dateStr = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
                this.out += `Вывод (${dateStr}):\r\n${response}\r\n`
            }
        }
    }
</script>

<style lang="scss" scoped>
    #work-browser {
        height: 100%;

        display: flex;

        #browser-nav {
            flex-shrink: 0;
            width: 200px;
            background: #202020;

            overflow-y: auto;

            display: flex;
            flex-direction: column;
        }

        #browser-body {
            flex-grow: 1;

            display: flex;

            & > div {
                width: calc(50% - 20px);
                padding: 10px;

                overflow-y: auto;
            }
        }
    }
</style>