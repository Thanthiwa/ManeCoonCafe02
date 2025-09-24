import React from 'react'

export default function Contact(){
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">ติดต่อเรา</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <form className="p-4 border rounded-4">
              <div className="mb-3">
                <label className="form-label">ชื่อ</label>
                <input className="form-control" placeholder="ชื่อของคุณ" />
              </div>
              <div className="mb-3">
                <label className="form-label">อีเมล</label>
                <input type="email" className="form-control" placeholder="you@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">ข้อความ</label>
                <textarea className="form-control" rows="4" placeholder="อยากบอกอะไรกับเรา"></textarea>
              </div>
              <button className="btn btn-primary" type="button">ส่งข้อความ</button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="p-4 border rounded-4 h-100">
              <h5>ข้อมูลติดต่อ</h5>
              <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>Pattaya, Thailand, Chon Buri</p>
              <p className="mb-1"><i className="fas fa-phone me-2"></i>098-428-9445</p>
              <p className="mb-1"><i className="fas fa-envelope me-2"></i>catmeawcoon@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
