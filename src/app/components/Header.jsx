import Image from "next/image";
import mainvisual from '../../../public/mainvisual.jpg';
import logo from '../../../public/logo.svg';

export const Header = () => {
  return (
    <header className='max-w-[1000px] mx-auto mt-16'>
      <h1 className='max-w-[180px] mb-4 sm:ml-2.5'><Image src={logo} alt='logo image' /></h1>
      <Image src={mainvisual} alt='mainvisual image' className='max-w-full' />
    </header>
  )
}