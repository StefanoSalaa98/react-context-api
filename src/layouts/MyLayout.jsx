import { Outlet } from "react-router-dom";
import MainNavBar from "../MainNavBar";

export default function MyLayout() {
    return (
        <>
            <header>
                <MainNavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}