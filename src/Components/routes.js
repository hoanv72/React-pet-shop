import React, { Component } from 'react';
import Home from './Main/Home';
import Cart from './Main/Cart';
import ProductList from './Main/ProductList';
import Detail from './Main/Detail';
import Contact from './Main/Contact';
import NotFound from './Main/NotFound';
import Service from './Main/Service';
import Service1 from './Main/Service1';
import Service2 from './Main/Service2';
import Service3 from './Main/Service3';
const routes = [
	{
		path: '/',
		exact: true,
		main: () => <Home/>
	},
	{
		path: '/product',
		exact: true,
		main: () => <ProductList />
	},
	{
		path: '/product/:id',
		exact: false,
		main: ({match}) => <Detail match={match}  />
	},
	{
		path: '/service',
		exact: false,
		main: () => <Service />
	},
	{
		path: '/service-1',
		exact: false,
		main: () => <Service1 />
	},
	{
		path: '/service-2',
		exact: false,
		main: () => <Service2 />
	},
	{
		path: '/service-3',
		exact: false,
		main: () => <Service3 />
	},
	{
		path: '/about',
		exact: false,
		main: () => <Contact/>
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />
	},
];

export default routes;