import { useState } from 'react';
import profile from '../../../../public/Assets/Images/defaultPicture.jpg'

function NavbarAdmin() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOutsideClick = (event) => {
    const profile = document.querySelector('nav .profile');
    const dropdownProfile = profile.querySelector('.profile-link');

    if (!event.target.matches('.profile img')) {
      if (!event.target.matches('.profile .profile-link')) {
        if (dropdownProfile.classList.contains('show')) {
          setShowDropdown(false);
        }
      }
    }

  };

  window.addEventListener('click', handleOutsideClick);

  return (
    <nav>
      <form action="#">
      </form>
      <div className="profile">
        <img
          src={profile}
          alt=""
          onClick={toggleDropdown}
        />
        <ul className={`profile-link ${showDropdown ? 'show' : ''}`}>
          <li>
            <a href="profile">
              <i className="bx bxs-user-circle icon"></i> Profile
            </a>
          </li>
          <li>
            <a method="post" href={route('logout')} as="button">
              <i className="bx bx-log-out icon"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
