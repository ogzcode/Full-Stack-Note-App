import getSVG from '../../../utils/getIcon';

export default function ProfileBox() {
    return (
        <div className='bg-white/30 w-full rounded-md flex justify-start gap-4 px-4 items-center h-[60px] max-lg:hidden'>
            {
                getSVG("profile", "max-xl:hidden")
            }
            <div>
                <p className='text-sm text-white font-montserrat-medium'>Joe Doe</p>
                <p className='text-xs text-white font-montserrat-light'>joedoe@mail.com</p>
            </div>
        </div>
    );
}