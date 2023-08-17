import logo from '../../../assets/svg/logo.svg';

import NavItem from './NavItem';
import ProfileBox from './ProfileBox';

export default function SideMenu() {
    const navItems = [
        {
            path: "/",
            name: "Home",
            iconName: "home"
        },
        {
            path: "/note",
            name: "Note",
            iconName: "note"
        },
        {
            path: "/saved",
            name: "Saved",
            iconName: "saved"
        },
        {
            path: "/trash",
            name: "Trash",
            iconName: "trash"
        },
        {
            path: "/settings",
            name: "Settings",
            iconName: "settings"
        }
    ]

    return (
        <div className='h-full flex flex-col justify-between items-start col-span-2 bg-[#355443E0] p-6'>
            <div className='w-full'>
                <div className="flex items-center mb-6">
                    <img src={logo} className="w-[64px] pr-4 lg:w-[48px]" />
                    <h1 className="font-lato-bold text-2xl text-white lg:text-lg">No<span className="text-[#FFB636]">TT</span>e</h1>
                </div>
                <nav>
                    {
                        navItems.map((item, index) => {
                            return <NavItem key={index} path={item.path} name={item.name} iconName={item.iconName} />
                        })
                    }
                </nav>
            </div>
            <ProfileBox />
        </div>
    );
}