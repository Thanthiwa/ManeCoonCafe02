import React from 'react'
import { useGalleryModal, useScrollAnimations } from '../components/effects.jsx'

export default function Gallery(){
  useGalleryModal()
  useScrollAnimations()
  const images = [
    { src:'/static/Img/CafeCat.jpg', alt:'บรรยากาศภายในคาเฟ่' },
    { src:'/static/Img/Cat1.jpg', alt:'Maine Coon 1' },
    { src:'/static/Img/Cat2.jpg', alt:'Maine Coon 2' },
  ]

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {images.map((img, idx)=> (
              <div className="col-lg-4 col-md-6 gallery-item" key={idx}>
                <div className="gallery-card">
                  <div className="gallery-image-container" data-bs-toggle="modal" data-bs-target="#imageModal" data-image={img.src}>
                    <img src={img.src} alt={img.alt} className="gallery-image" />
                    <div className="gallery-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">ภาพในแกลเลอรี่</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="ปิด"></button>
            </div>
            <div className="modal-body text-center">
              <img id="modalImage" className="img-fluid" alt="ภาพในแกลเลอรี่" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
