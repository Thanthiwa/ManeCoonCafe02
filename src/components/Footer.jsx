import React from 'react'

export default function Footer(){
  return (
    <footer className="custom-footer mt-5 pt-5 pb-4 text-white" style={{background:'#2c2c2c'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-white"><i className="fas fa-cat me-2"></i>ฟาร์มแมวเมนคูน Mainecoon 4289</h5>
            <p className="text-white">ฟาร์มแมวเมนคูนชั้นนำที่พัทยา เชี่ยวชาญด้านการเพาะพันธุ์แมวเมนคูนคุณภาพสูง พร้อมให้บริการคาเฟ่แมวและการรับเลี้ยง</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="text-white">ลิงก์ด่วน</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-white">หน้าแรก</a></li>
              <li><a href="/about" className="text-decoration-none text-white">แมวของเรา</a></li>
              <li><a href="/menu" className="text-decoration-none text-white">เมนู</a></li>
              <li><a href="/gallery" className="text-decoration-none text-white">แกลเลอรี่</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="text-white">ข้อมูลติดต่อ</h6>
            <p className="text-white mb-1">
              <a href="https://maps.app.goo.gl/bHnLrqyxLoekaDmv9" target="_blank" className="text-white text-decoration-none me-2" rel="noreferrer">
                <i className="fas fa-map-marker-alt"></i>
              </a>
              <a href="https://maps.app.goo.gl/bHnLrqyxLoekaDmv9" target="_blank" className="text-white text-decoration-none" rel="noreferrer">
                Pattaya, Thailand, Chon Buri
              </a>
            </p>
            <p className="text-white mb-1">
              <a href="tel:0987654289" className="text-white text-decoration-none me-2">
                <i className="fas fa-phone"></i>
              </a>
              098-428-9445
            </p>
            <p className="text-white">
              <a href="mailto:catmeawcoon@gmail.com" className="text-white text-decoration-none me-2">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="mailto:catmeawcoon@gmail.com" className="text-white text-decoration-none">
                catmeawcoon@gmail.com
              </a>
            </p>
            <div className="social-links mt-3">
              <a href="https://www.facebook.com/Mainecoon42895/?locale=th_TH" target="_blank" className="text-decoration-none me-3 text-white" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/mainecoon4289/" target="_blank" className="text-decoration-none me-3 text-white" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-white mb-0">&copy; {new Date().getFullYear()} ฟาร์มแมวเมนคูน Mainecoon 4289 พัทยา</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
