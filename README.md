# Maine Coon Café – React + Vite (JSX)
พอร์ตจาก Flask (Jinja2) ให้หน้าเหมือนเดิม โดยใช้ Bootstrap + Font Awesome ผ่าน CDN

## เริ่มต้น
```bash
npm install
npm run dev
```
เปิด http://localhost:5173

## โครงสร้างหน้า
- Navbar/Footer ย้ายจาก `templates/base.html`
- หน้า Home/About/Gallery/Menu/Contact ย้ายจากไฟล์ใน `templates/`
- สคริปต์ interactive ถูกแปลงเป็น React hooks ใน `src/components/effects.jsx`
- รูปภาพ: วางไฟล์ใน `public/static/Img/` ตามชื่อไฟล์เดิม (Logo.jpg, bg1.png, About.png, CafeCat.jpg, Cat1.jpg, Cat2.jpg, gallery.jpg)

## Build
```bash
npm run build
npm run preview
```
