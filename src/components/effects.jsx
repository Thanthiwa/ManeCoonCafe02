import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    const animateElements = document.querySelectorAll('.feature-card, .cat-card, .menu-item, .gallery-card, .care-card, .highlight-card')
    animateElements.forEach(el => {
      el.classList.add('fade-in')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

export function useSmoothAnchorScroll() {
  useEffect(() => {
    const onClick = e => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        const offsetTop = targetElement.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

export function useScrollToTopButton() {
  useEffect(() => {
    const btn = document.createElement('button')
    btn.className = 'scroll-to-top'
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>'
    btn.setAttribute('aria-label', 'Scroll to top')
    document.body.appendChild(btn)

    const onScroll = () => {
      if (window.pageYOffset > 300) btn.classList.add('show')
      else btn.classList.remove('show')
    }
    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    window.addEventListener('scroll', onScroll)
    btn.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      btn.removeEventListener('click', onClick)
      btn.remove()
    }
  }, [])
}

export function useGalleryModal() {
  useEffect(() => {
    const modalEl = document.getElementById('imageModal')
    const modalImg = document.getElementById('modalImage')
    if (!modalEl || !modalImg) return
    const clickHandler = e => {
      const container = e.target.closest('.gallery-image-container')
      if (!container) return
      const src = container.getAttribute('data-image')
      if (src) modalImg.src = src
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [])
}
