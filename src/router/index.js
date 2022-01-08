import VueRouter from 'vue-router'
import MainPage from '../pages/main-page'
import FirstPage from '../pages/1-st-page'

import Page from '../pages/page-on-page'
import Loyout from '../pages/Loyout'

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
			path: '/main',
			name: 'Loyout',
			component:Loyout,
			children:[
				{
					path: '',
					name: 'first-page',
					component: FirstPage,
				},

				{
					path: ':id',
					name: 'page',
					component:Page,
				},
			]
		},

		
	]
})