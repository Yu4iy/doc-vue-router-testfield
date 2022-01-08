import VueRouter from 'vue-router'
import MainPage from '../pages/main-page'
import FirstPage from '../pages/1-st-page'
import SecondPage from '../pages/2-nd-page'
import ThirdPage from '../pages/3-rd-page'
import Page from '../pages/page-on-page'

export default new VueRouter({
	mode: 'history',
	routes:
	[
		{
			path: '/',
			name: 'main',
			component: MainPage,
		},
		{
			path: '/first-page',
			name: 'first-page',
			component: FirstPage,
		},
		{
			path: '/second-page',
			name: 'second-page',
			component: SecondPage,
		},
		{
			path: '/third-page',
			name: 'third-page',
			component:ThirdPage,
		},
		{
			path: '/first-page/:id',
			name: 'page',
			component:Page,
		},
		
	]
})