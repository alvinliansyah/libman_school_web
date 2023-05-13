import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Logo from '../../../../public/Assets/Images/Logo.png'

const SidebarAdmin = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    const dropdown = e.currentTarget.parentNode.querySelector('.side-dropdown');
    const isActive = dropdown.classList.contains('show');

    const dropdowns = document.querySelectorAll('.side-dropdown');
    const links = document.querySelectorAll('.side-menu a');

    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('show');
    });

    links.forEach((link) => {
      link.classList.remove('active');
    });

    if (!isActive) {
      e.currentTarget.classList.add('active');
      dropdown.classList.add('show');
    }
  };

  return (
    <section id="sidebar" className={isSidebarCollapsed ? 'hide' : ''}>
      <a href="#" className="brand">
			<img src={Logo} alt="" />
			<span className="brand">Libman School</span>
      <i className="bx bx-menu toggle-sidebar" onClick={toggleSidebar}></i>
		</a>
      <ul className="side-menu">
        <li>
          <a href="dashboard">
            <i className="bx bx-home icon"></i> Dashboard
          </a>
        </li>
        <li className="divider" data-text="main">
          DATA MASTER
        </li> 
        <li>
          <a href="siswa">
            <i className="bx bx-group icon"></i> Siswa
          </a>
        </li>
        <li>
          <a href="admin">
            <i className="bx bx-user icon"></i> Admin
          </a>
        </li>
        <li>
          <a href="buku">
            <i className="bx bx-book icon"></i> Buku
          </a>
        </li>
        <li className="divider" data-text="main">
          TRANSAKSI
        </li> 
        <li>
          <a href="peminjaman">
            <i className="bx bx-arrow-from-bottom icon"></i> Peminjaman
          </a>
        </li>
        <li>
          <a href="pengembalian">
            <i className="bx bx-arrow-to-bottom icon"></i> Pengembalian
          </a>
        </li>
        <li>
          <a href="riwayat">
            <i className="bx bx-history icon"></i> Riwayat
          </a>
        </li>
        <li className="divider" data-text="table and forms">
          PUSAT BANTUAN
        </li>
        <li>
          <a href="#" onClick={handleDropdownClick}>
            <i className="bx bx-help-circle icon"></i> Bantuan{' '}
            <FiChevronRight className="icon-right" />
          </a>
          <ul className="side-dropdown">
            <li>
              <a href="pelayananpelanggan">Pelayanan Pelanggan</a>
            </li>
            <li>
              <a href="tentangaplikasi">Tentang Aplikasi</a>
            </li>
          </ul>
        </li>
      </ul>
     </section>
  )
}
      export default SidebarAdmin