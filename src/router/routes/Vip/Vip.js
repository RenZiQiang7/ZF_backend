import Viplist from "@/views/Viplist/Viplist";
import Integ from "@/views/Integ/Integ";
import Consume from "@/views/Consume/Consume";
import Management from "@/views/Management/Management";

var vipRouter =[
    {
        path:"/Viplist",
        component:Viplist
    },
    {
        path:"/Integ",
        component:Integ
    },
    {
        path:"/Consume",
        component:Consume
    },
    {
        path:"/Management",
        component:Management
    }
]
export default vipRouter