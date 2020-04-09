<template>
    <div class="home">
        <div class="window">
            <div class="window-header">
                <div class="header-text">Работы по информатике</div>
                <div class="header-desc">Это площадка для интерактивной проверки моего кода :)</div>
            </div>
            <div class="window-body">
                <div class="body-to-works">
                    <div class="header">Перейти к работам</div>
                    <div class="body">
                        <BasePrimeButton @click="$router.push('/works')">Сюда</BasePrimeButton>
                    </div>
                </div>
                <div class="body-to-git">
                    <div class="header">Исходный код</div>
                    <div class="body">
                        <a href="https://github.com/Gungniir/for-school" target="_blank">
                            <BasePrimeButton>Туда</BasePrimeButton>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BasePrimeButton from "../components/BasePrimeButton";

    export default {
        name: 'Home',
        components: {BasePrimeButton},
    }
</script>

<style lang="scss">
    .home {
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

            .window-header {
                padding-bottom: 5px;
                margin-bottom: 5px;
                border-bottom: 1px solid #202020;

                .header-text {
                    font-size: 1.3em;
                    margin-bottom: 5px;
                }

                .header-desc {
                    font-size: 0.9em;
                }
            }

            .window-body {
                display: flex;

                .body-to-works, .body-to-git {
                    width: calc(50% - 10px);
                    margin: 0 5px;

                    display: flex;
                    flex-direction: column;

                    a {
                        text-decoration: none;
                    }

                    .header {
                        text-align: center;
                        margin-bottom: 10px;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>
