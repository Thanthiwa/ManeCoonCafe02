import React from 'react'
import { useScrollAnimations } from '../components/effects.jsx'

export default function About(){
  useScrollAnimations()
  const cats = [
    { name:'Snow King', age:'2 ปี', personality:'ขี้เล่น อ่อนโยน', image_url:'/static/Img/Cat1.jpg' },
    { name:'Cocoa Queen', age:'3 ปี', personality:'เป็นมิตร ฉลาด', image_url:'/static/Img/Cat2.jpg' },
  ]

  return (
    <>
      <section className="page-header py-5 mt-2">
        <div className="container text-center">
          <h1 className="page-title">พบกับครอบครัวเมนคูนของเรา</h1>
          <p className="page-subtitle">รู้จักกับยักษ์ใหญ่อ่อนโยนและบุคลิกเฉพาะตัวของพวกเขา</p>
        </div>
      </section>

      <section className="breed-info-section py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/static/Img/gallery.jpg" alt="Beautiful Maine Coon cat" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">เกี่ยวกับแมวเมนคูน</h2>
              <p className="mb-4">แมวเมนคูนขึ้นชื่อในฐานะ "ยักษ์ใหญ่อ่อนโยน" ...</p>
              <div className="breed-features">
                <div className="feature-item mb-3"><i className="fas fa-heart text-primary me-3"></i><strong>อ่อนโยนและเป็นมิตร:</strong> ...</div>
                <div className="feature-item mb-3"><i className="fas fa-brain text-primary me-3"></i><strong>ฉลาดสูง:</strong> ...</div>
                <div className="feature-item mb-3"><i className="fas fa-users text-primary me-3"></i><strong>เยี่ยมกับคน:</strong> ...</div>
                <div className="feature-item mb-3"><i className="fas fa-award text-primary me-3"></i><strong>สายเลือดคุณภาพ:</strong> ...</div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {cats.map((cat, idx)=>(
              <div className="col-lg-6 mb-4" key={idx}>
                <div className="cat-card h-100 shadow-sm rounded overflow-hidden">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-5">
                      <img src={cat.image_url} alt={cat.name} className="cat-image img-fluid rounded-start w-100" style={{objectFit:'cover', height:250}} />
                    </div>
                    <div className="col-md-7">
                      <div className="cat-info p-3">
                        <h4 className="cat-name mb-2">{cat.name}</h4>
                        <p className="cat-age mb-1"><i className="fas fa-birthday-cake me-2"></i>{cat.age}</p>
                        <p className="cat-personality mb-2">{cat.personality}</p>
                        <div className="cat-stats mb-2">
                          <span className="stat-badge">เป็นมิตร</span>
                          <span className="stat-badge">ขี้เล่น</span>
                          <span className="stat-badge">อ่อนโยน</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
