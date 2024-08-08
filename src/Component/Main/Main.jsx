import { Outlet } from "react-router";
import Header from "../Include/Header";

export default function Main(){
    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}