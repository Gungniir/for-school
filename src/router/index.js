import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import WorksList from "../views/WorksList";
import WorkBrowser from "../views/WorkBrowser";

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/works',
        name: 'WorksList',
        component: WorksList
    },
    {
        path: '/work/:workId',
        name: 'WorkBrowser',
        component: WorkBrowser,
        props: (route) => ({workId: Number(route.params.workId)}),

        children: [{
            name: 'WorkBrowserItem',
            path: 'item/:itemId',
            props: (route) => ({itemId: Number(route.params.itemId)})
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.afterEach(to => {
    if (to.name === 'Home') {
        store.state.navTitle = 'Главная'
    } else if (to.name === 'WorksList') {
        store.state.navTitle = 'Просмотр работ'
    } else if (to.name === 'WorkBrowser' || to.name === 'WorkBrowserItem') {
        store.state.navTitle = `Просмотр работы √${to.params.workId}`
    }
});

export default router
