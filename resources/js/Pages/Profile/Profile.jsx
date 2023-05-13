import React from 'react'
import NavbarAdmin from '../../Components/Admin/NavbarAdmin'
import SidebarAdmin from '../../Components/Admin/SidebarAdmin'
import '../../../public/Assets/Admin/style.css'
import 'boxicons/css/boxicons.min.css';
import FooterAdmin from '../../Components/Admin/FooterAdmin';
import CardContent from '../../Components/Admin/CardContent';
// import ProfileForm from './ProfileAdmin/ProfileForm';
// import UpdateProfileInformation from './Profile/Partials/UpdateProfileInformationForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

const Profile = ({ mustVerifyEmail, status }) => {
  return (
    <div>
      <SidebarAdmin />
      <section id="content">
      <NavbarAdmin />
      <main>
        <h1 className="title">Profile</h1>
			<ul className="breadcrumbs">
				<li><a href="dashboard">Home</a></li>
				<li className="divider">/</li>
				<li><a href="#" className="active">Profile</a></li>
			</ul>
      <div className="grid grid-cols-1 gap-4">
      <br/>
            {/* <CardContent 
				  judul='Pembaruan Profile'
				  konten={
          <UpdateProfileInformation
            mustVerifyEmail={mustVerifyEmail}
            status={status}
            className="max-w-xl"
        />}
				/> */}
            <CardContent 
				  judul='Pembaruan Password'
				  konten={<UpdatePasswordForm className="max-w-xl" />}
				/>
        <CardContent 
				  judul='Hapus Akun'
				  konten={<DeleteUserForm className="max-w-xl" />}
				/>
      </div>


        <br/>
		<FooterAdmin />
      </main>
      </section>
    </div>
  )
}

export default Profile
