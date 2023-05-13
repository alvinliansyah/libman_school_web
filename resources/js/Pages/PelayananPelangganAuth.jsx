import React from 'react'

const PelayananPelangganAuth = () => {
  return (
    <section className="pelayanan_pelanggan" id="pelayanan_pelanggan">
        <div className="content">
          <div className="title"><span>Pelayanan Pelanggan</span></div>
          <div className="text">
            <div className="topic">Jika mengalami kendala selama penggunaan aplikasi, anda dapat menghubungi beberapa Pelayanan Pelanggan berikut :</div>
          </div>
          <br/>
          <center>
          <table className="table">
            <thead>
              <tr>
							<th><i className='bx bxl-instagram icon'></i>&nbsp;&nbsp;Instagram</th>
							<th><i className='bx bxl-whatsapp icon'></i>&nbsp;&nbsp;WhatsApp</th>
							<th><i className='bx bx-envelope icon'></i>&nbsp;&nbsp;Email</th>
              </tr>
						</thead>
						<tbody>
						<tr>
							<td>@ilhamikhwann</td>
							<td>+62 856 4954 9458</td>
							<td>ilhamikhwaan@gmail.com</td>
                              </tr>
                              </tbody>
            </table>
            </center>	
            </div>
            </section>
  )
}

export default PelayananPelangganAuth
