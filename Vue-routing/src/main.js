import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/nav/TeamsFooter.vue';
import UsersFooter from './components/nav/UsersFooter.vue';

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: '/teams', component: TeamsList
//         }, {
//             path: '/users', component: UsersList
//         }]
// });


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                {
                    name: 'teams-member', path: ':teamId', component: TeamMember, props: true
                }
            ]
        },
        {
            path: '/users', components: { default: UsersList, footer: UsersFooter }
        },

        {
            path: '/:notFound(.*)', component: NotFound, props: true
        }
    ],
    //This will remeber details of the page history and location.
    scrollBehavior(to, from, savedPosition) {


        // If came from a scrolled down page, Take the user back to that location of the page 
        if (savedPosition) {
            return savedPosition;
        }
        // otherwise, take the user to top of the page
        return { left: 0, top: 0 }
    }

});


// Will be called by Vue each time a route change happens
//Next will allow are disallow the naviagation
router.beforeEach(function (to, from, next) {
    next();
})

const app = createApp(App)

app.use(router);

app.mount('#app');
