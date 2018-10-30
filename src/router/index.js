import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/User/List'
import AddUser from '@/components/User/AddUser'
import LichDay from '@/components/lichday/index'
import importLichDay from '@/components/lichday/import'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/list',
            name: 'ListUser',
            component: List
        },
        {
            path: '/add-user',
            name: 'AddUser',
            component: AddUser
        },
        {
            path: '/lichday',
            name: 'LichDay',
            component: LichDay
        },
        {
            path: '/add-lichday',
            name: 'importLichDay',
            component: importLichDay
        },

    ],
    mode: 'history',
})
