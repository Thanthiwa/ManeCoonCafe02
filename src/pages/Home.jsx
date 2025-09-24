import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimations, useSmoothAnchorScroll, useScrollToTopButton } from '../components/effects.jsx'

export default function Home(){
  useScrollAnimations()
  useSmoothAnchorScroll()
  useScrollToTopButton()

  return (
    <>
      {/* Hero Section (from templates/index.html hero-section) */}
      <section className="hero-section hero-full">
        <img src="/static/Img/bg1.png" alt="Maine Coon Cat" style={{width:'100vw', height:'100vh', objectFit:'cover', objectPosition:'center', display:'block'}} />
        <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
          {/* optional hero text */}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">ทำไมถึงเลือก Mainecoon 4289 พัทยา?</h2>
              <p className="section-subtitle">ฟาร์มแมวเมนคูนมืออาชีพ พร้อมประสบการณ์ที่แสนพิเศษ</p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { icon:'fa-cat', title:'สายเลือดดี มาตรฐานสูง', text:'แมวเมนคูนของเราทุกตัวมาจากสายเลือดคุณภาพ...' },
              { icon:'fa-user-md', title:'ดูแลสุขภาพครบวงจร', text:'ตรวจสุขภาพสม่ำเสมอ ฉีดวัคซีนครบถ้วน...' },
              { icon:'fa-heart', title:'บริการหลังการขาย', text:'ให้คำปรึกษาและสนับสนุนตลอดชีวิต...' },
            ].map((f,i)=>(
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="feature-card p-4 border rounded-4 h-100 text-center">
                  <div className="feature-icon display-6 mb-3"><i className={`fas ${f.icon}`}></i></div>
                  <h4 className="mb-2">{f.title}</h4>
                  <p className="mb-0">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/static/Img/About.png" alt="Cozy café atmosphere" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="mb-4">เรื่องราวของเรา</h2>
                <p className="mb-4">ฟาร์มแมวเมนคูน Mainecoon 4289 ก่อตั้งขึ้นจากความรักในแมวเมนคูนและความเชี่ยวชาญ...</p>
                <Link to="/about" className="btn btn-primary">
                  <i className="fas fa-arrow-right me-2"></i>เรียนรู้เพิ่มเติมเกี่ยวกับเรา
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Info Section */}
      <section className="info-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="info-card p-4 border rounded-4 h-100">
                <h3><i className="fas fa-clock me-3"></i>Opening Hours</h3>
                <div className="hours-list">
                  <div className="hour-item d-flex justify-content-between"><span className="day">Monday - Thursday</span><span className="time">8:00 AM - 8:00 PM</span></div>
                  <div className="hour-item d-flex justify-content-between"><span className="day">Friday - Saturday</span><span className="time">8:00 AM - 9:00 PM</span></div>
                  <div className="hour-item d-flex justify-content-between"><span className="day">Sunday</span><span className="time">9:00 AM - 7:00 PM</span></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info-card p-4 border rounded-4 h-100">
                <h3><i className="fas fa-paw me-3"></i>Cat Adoption</h3>
                <p className="mb-3">Some of our wonderful Maine Coons are looking for forever homes! ...</p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check text-success me-2"></i>All cats are health-checked and vaccinated</li>
                  <li><i className="fas fa-check text-success me-2"></i>Meet and interact before adopting</li>
                  <li><i className="fas fa-check text-success me-2"></i>Ongoing support and advice</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary">
                  <i className="fas fa-heart me-2"></i>Adoption Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
