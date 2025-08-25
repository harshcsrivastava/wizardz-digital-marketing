import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    const logoRef = useRef()
    const menuRef = useRef()
    useGSAP(() => {
     gsap.from(logoRef.current, {
        x:-25,
        opacity:0,
        duration:0.7
      })
      gsap.from(menuRef.current, {
        x:50,
        opacity:0,
        duration:0.7,
      })
    })



  return (
    <header className="container mx-auto  pt-2 px-4 flex top-o">
      <nav ref={logoRef} className="container mx-auto flex items-center p-4  gap-2">
        <i class="ri-gemini-fill text-2xl rotate-60"></i>
        <h1
          className="font-secondary text-2xl font-bold"
        >
          WizardZ
        </h1>
      </nav>
      <ul ref={menuRef} className='font-primary container mx-auto flex items-center justify-between gap-4 p-2'>
        <li>About Us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li className='border-2 rounded-xl py-3 px-5'>Request a quote</li>
      </ul>
    </header>
  );
}

export default Header