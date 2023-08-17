import getSVG from '../../../utils/getIcon';

export default function ProfileBox() {
    return (
        <div className='bg-white/30 rounded-md w-full flex justify-around items-center h-[60px]'>
            {
                getSVG("profile")
            }
            <div>
                <p className='text-sm text-white font-montserrat-medium'>Joe Doe</p>
                <p className='text-xs text-white font-montserrat-light'>joedoe@mail.com</p>
            </div>
            {
                getSVG("logout")
            }
        </div>
    );
}