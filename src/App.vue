<template>
    <div id="app">
        <div id="nav">
            <div id="nav-main" v-if="isMainVisible" @click="goToMain">Главная</div>
            <div id="nav-title">{{$store.state.navTitle}}</div>
            <div id="nav-author">Владимир Курусь</div>
        </div>
        <div id="wrapper">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            isMainVisible: (vm) => {
                return vm.$route.name !== 'Home'
            }
        },
        methods: {
            goToMain: function () {
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss">
    html, body, #app {
        width: 100%;
        height: 100%;
    }

    #app {
        font-family: Arial, serif;

        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background: #4a4a4a;

        display: flex;
        flex-direction: column;

        #nav {
            height: 60px;

            background: #202020;

            display: flex;

            flex-shrink: 0;

            color: #b1b1b1;

            #nav-title, #nav-main {
                padding: 5px 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #nav-main {
                cursor: pointer;

                &:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            }

            #nav-author {
                margin-left: auto;

                padding: 5px 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        #wrapper {
            overflow-y: auto;
            flex-grow: 1;
        }
    }
</style>
