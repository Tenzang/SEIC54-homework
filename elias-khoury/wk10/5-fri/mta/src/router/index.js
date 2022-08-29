import Vue from 'vue';
import VueRouter from 'vue-router';
import TrainsPage from '../views/TrainsPage.vue';
import BookTrain from '../views/BookTrain.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: TrainsPage,
	},
	{
		path: '/bookings',
		name: 'book train',
		component: BookTrain,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
