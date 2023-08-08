import SideMenu from "./SideMenu";
import NoteSide from "./NoteSide";

export default function Home() {
    return (
        <div className="min-h-screen grid grid-cols-12 ">
            <SideMenu/>
            <NoteSide/>
        </div>
    );
}