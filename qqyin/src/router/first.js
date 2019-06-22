import Home from '../components/home'
import Dan from '../components/dan'
import Play from '../components/play'
const routes=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/dan/:id',
        component:Dan
    },
    {
        path:'/play/:id/:sid/:sname/:name/:ssid/:songid',
        component:Play
    },
    {
        path:'*',
        redirect:'/home'
    }
]
export default routes