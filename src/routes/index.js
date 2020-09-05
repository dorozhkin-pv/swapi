import { Home } from "../pages/Home";
import { Compare } from "../pages/Compare";
import { NotFound404 } from "../pages/NotFound404";
import { SwShip } from "../pages/SwShip";

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'sw-ship',
		path: '/sw-ship/:id',
		component: SwShip
	},
	{
		name: 'compare',
		path: '/compare',
		component: Compare
	},
	{
		path: '**',
		component: NotFound404,
		exact: false
	}
];

const routesMap = {};

routes.forEach(route => {
	if('name' in route){
		routesMap[route.name] = route.path;
	}
});

function urlBuilder(name, params){
	if(name in routesMap){
		let path = routesMap[name]; // product/:id

		for(let key in params){
			path = path.replace(`:${key}`, params[key]);
		}

		return path;
	}
}



export { routes, routesMap, urlBuilder };