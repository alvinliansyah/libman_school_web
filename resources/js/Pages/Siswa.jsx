import React from "react";
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css'
import FooterAdmin from '../Components/Admin/FooterAdmin';
import CardContent from '../Components/Admin/CardContent'

const Siswa = () => {
  return (
    <div>
      <SidebarAdmin />
      <section id="content">
      <NavbarAdmin />
      <main>
        <h1 className="title">Siswa</h1>
			<ul className="breadcrumbs">
				<li><a href="dashboard">Home</a></li>
				<li className="divider">/</li>
				<li><a href="#" className="active">Siswa</a></li>
			</ul>
      <br/>
      <CardContent 
				  judul='Siswa'
				  konten='belum ada'
				/>
      <br/>
		<FooterAdmin />
      </main>
      </section>
    </div>
  )
}

export default Siswa
