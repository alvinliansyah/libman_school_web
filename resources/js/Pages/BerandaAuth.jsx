import React from 'react'
import '../../../public/Assets/Auth/MasterLayoutAuth.css'

const BerandaAuth = () => {
  return (
    <section className="beranda" id="beranda">
  <div className="beranda-content">
  <div className="text">
          <div className="text-one">Aplikasi Manajemen Perpustakaan</div>
          <div className="text-two">SMP Negeri 1 Bangsalsari</div>
        </div>
        <a className="button" href='login'>
          <button>Masuk</button>
        </a>
  </div>
</section>
  )
}

export default BerandaAuth
