import React from 'react'
import NavbarAdmin from '../Components/Admin/NavbarAdmin'
import SidebarAdmin from '../Components/Admin/SidebarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css';
import FooterAdmin from '../Components/Admin/FooterAdmin';
import DoughnutChart from '../Components/Admin/DoughnutChart';
import CardInfoData from '../Components/Admin/CardInfoData';
import CardContent from '../Components/Admin/CardContent';
const DashboardAdmin = () => {
    
  return (
    <div>
      <SidebarAdmin />
      <section id="content">
      <NavbarAdmin />
      <main>
			<h1 className="title">Dashboard</h1>
			<ul className="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li className="divider">/</li>
				<li><a href="#" className="active">Dashboard</a></li>
			</ul>
			<br/>
			<div className="info-data">
			<CardInfoData
				jumlah='000'
				judul='Buku Keseluruhan'
				progress={70}
				waktu='bulan'
				className="bg-blue-500"
				/>
				<CardInfoData
				jumlah='000'
				judul='Buku Tersedia Di Perpustakaan'
				progress={70}
				waktu='bulan'
				className="bg-blue-500"
				/>
				<CardInfoData
				jumlah='000'
				judul='Buku Sedang Proses Peminjaman'
				progress={70}
				waktu='bulan'
				className="bg-blue-500"
				/>
				<CardInfoData
				jumlah='000'
				judul='Total Siswa'
				progress={70}
				waktu='tahun'
				className="bg-blue-500"
				/>
			</div>
			<br/>
			<div className="grid grid-cols-2 gap-4">
				<CardContent 
				judul='Chart Buku'
				konten={<DoughnutChart />}
				/>
				<CardContent 
				judul='Memerlukan Tindakan'
				konten='belum ada'
				/>
			</div>
			<br/>
			<FooterAdmin />
		</main>
      </section>
    </div>
  )
}

export default DashboardAdmin
