import { Link } from 'react-router-dom';
import getSVG from '../../../utils/getIcon';

type NavItemProps = {
    path: String,
    name: String,
    iconName: String
}

export default function NavItem({ path, name, iconName }: NavItemProps) {
    return (
        <Link to={path} className='mb-6 p-2 rounded text-white font-montserrat-medium flex items-center hover:bg-white/20'>
            {
                getSVG(iconName)
            }
            <span className='max-lg:hidden'>{name}</span>
        </Link>
    );
}
