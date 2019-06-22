import Tui from '../components/tui'
import List from '../components/list'
import Sou from '../components/sou'
const routes=[
    {
        path:'/home/tui',
        component:Tui
    },
    {
        path:'/home/list',
        component:List
    },
    {
        path:'/home/sou',
        component:Sou
    },
    {
        path:"*",
        redirect:'/home/tui'
    }
]
export default routes