import { Outlet } from "react-router"
import Sidebar from "../sidebar"
import Rightbar from "../rightbar"
export default function MainLayout(){
    return(
        <div className="w-[1265px] mx-auto flex">
            <Sidebar/>
            <main className="flex-1 border-x border-[#2f3336]">
            <Outlet/>

            </main>
            <Rightbar/>
        </div>
    )
}