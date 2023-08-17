import SideMenu from "./sidemenu/SideMenu";
import NoteSide from "./notes/NoteSide";
import Editor from "./Editor";

export default function Home() {
    return (
        <div className="min-h-screen grid grid-cols-12">
            <SideMenu/>
            <NoteSide/>
            <Editor/>
        </div>
    );
}