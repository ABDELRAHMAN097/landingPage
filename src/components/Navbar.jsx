import icon from '../assets/icon.png';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-[20px]'>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <img className='max-w-[170px]' src={Logo} alt="Logo" />
      </div>
      <div className='ml-auto'>
        <img className='w-[30px]' src={icon} alt="icon" />
      </div>
    </div>
  );
}
export default Navbar;
