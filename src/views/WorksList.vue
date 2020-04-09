<template>
    <div class="works-list">
        <div class="window">
            <div class="window-header">
                Список работ
            </div>
            <div class="window-body">
                <WorksListWorkItem v-for="work of works" :key="work.id" :desc="work.desc | endLinesToP"
                                   :title="work.title" @click="$router.push(`/work/${work.id}`)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import works from '../data/works.json'
    import WorksListWorkItem from "../components/WorksListWorkItem";

    export default {
        name: "WorksList",
        components: {WorksListWorkItem},
        data() {
            return {
                works: works
            }
        },
        filters: {
            endLinesToP: (item) => {
                return item.match(/^(.*)$/gm).map((item) => {
                    return `<p>${item}</p>`;
                }).join('');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .works-list {
        color: #b1b1b1;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        .window {
            padding: 15px;
            border: #202020 solid 2px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;

            max-width: 50%;
            max-height: 80%;
            overflow-y: auto;

            .window-header {
                font-size: 1.3em;

                padding-bottom: 5px;
                margin-bottom: 5px;
                border-bottom: 1px solid #202020;
            }
        }

    }
</style>