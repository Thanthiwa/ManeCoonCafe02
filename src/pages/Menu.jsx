import React from 'react'
import { useScrollAnimations } from '../components/effects.jsx'

export default function Menu(){
  useScrollAnimations()
  const items = [
    { name:'Americano', price:80 },
    { name:'Latte', price:95 },
    { name:'Croissant', price:70 },
  ]
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">เมนู</h2>
        <div className="row g-4">
          {items.map((it, idx)=>(
            <div className="col-md-4" key={idx}>
              <div className="menu-item p-4 border rounded-4 h-100 text-center">
                <h5 className="mb-2">{it.name}</h5>
                <div className="menu-item-price fw-bold">{it.price} ฿</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
