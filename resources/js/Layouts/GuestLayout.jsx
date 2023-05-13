import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
      style={{ backgroundImage: "url('../../Assets/Images/Group 3.jpg')" }}
    >
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <center>
          <div>
            <br/>
            <Link href="/">
              <ApplicationLogo className="w-10 h-10 fill-current text-gray-500" />
            </Link>
          </div>
        </center>
        <br />
        {children}
      </div>
    </div>
  );
}