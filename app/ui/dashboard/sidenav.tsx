import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Image
        src="/a-simple-logo-including-XPLORA.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <br></br>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
