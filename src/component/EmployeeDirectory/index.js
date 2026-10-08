import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { FaSearch, FaIdCard, FaQrcode, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Header from '../Header'
import FooterSection from '../FooterSection'
import './index.css'

const employeesList = [
  { id: '0001', name: 'Krishna', role: 'Managing Director & CEO', email: 'krishnadevkola@gmail.com', image: '/employees/01.webp' },
  { id: '0002', name: 'Vamsi Girijala', role: 'Managing Director & COO', email: 'vamsi@gtapexmarketing.com', image: '/employees/002.webp' },
  { id: '0003', name: 'Anju', role: 'Client Manager & CMO', email: 'anju@gtapexmarketing.com', image: '/employees/003.webp' },
  { id: '0004', name: 'Ankith Rao', role: 'HR & Marketing Coordinator', email: 'ankithrao704@gmail.com', image: '/employees/0004.webp' },
  { id: '0005', name: 'Harikrishna', role: 'Digital Marketing Team Lead', email: 'hkdnetha@gmail.com', image: '/employees/0005.webp' },
  { id: '0006', name: 'Shiva Kumar', role: 'Video Editor', email: 'shiva.gtam@gmail.com', image: '/employees/006.webp' },
  { id: '0007', name: 'Varshith', role: 'Graphic Designer', email: 'varshithuiuxdesigner@gmail.com', image: '/employees/007.webp' },
  { id: '0008', name: 'Madhuri', role: 'Full Stack Developer', email: 'madhurigtam@gmail.com', image: '/employees/0008.webp' },
  { id: '0009', name: 'Divya', role: 'Digital Marketing Lead', email: 'saidivya.gtam@gmail.com', image: '/employees/0009.webp' },
  { id: '0010', name: 'Vikram Pagadala', role: 'DOP & Technology Manager', email: 'Vikram.gtma@gmail.com', image: '/employees/010.webp' },
  { id: '0011', name: 'Prem Boppisetty', role: 'Graphic & UI/UX Designer', email: 'Premvfx2@gmail.com', image: '/employees/0011.webp' },
  { id: '0012', name: 'Banavath Prakash', role: 'Video Editor', email: 'prakashchavan.gtam@gmail.com', image: '/employees/0012.webp' },
  { id: '0013', name: 'Teja', role: 'UI/UX Designer & Graphic Designer', email: 'teja.gtam@gmail.com', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80' },
  { id: '0014', name: 'Eswara Rao Badana', role: 'Sales Team Lead', email: 'eswarbadana996@gmail.com', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80' }
]

const EmployeeDirectory = () => {
  const [search, setSearch] = useState('')
  const [activeQR, setActiveQR] = useState(null)

  const filtered = employeesList.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase()) || e.id.includes(search)
  )

  return (
    <>
      <Header />
      <main className="employee-directory-wrapper">
        <div className="directory-container">
        <div className="directory-header">
          <div>
            <h1>Company Employees</h1>
            <p>Official GT Apex Verification Index</p>
          </div>
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search employee by name or ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="employee-grid">
          {filtered.map(emp => {
            const profileUrl = `https://www.gtapexmarketing.com/#/employees/${emp.id}`
            return (
              <div className="employee-grid-card" key={emp.id}>
                <div className="card-top-tag"><FaIdCard /> #{emp.id}</div>
                <div className="card-avatar-container">
                  <img src={emp.image} alt={emp.name} />
                </div>
                <div className="card-content">
                  <h3>{emp.name}</h3>
                  <span className="card-role">{emp.role}</span>
                  <p className="card-contact">{emp.email}</p>
                </div>
                <div className="card-footer-actions">
                  <button className="action-btn qr-trigger" onClick={() => setActiveQR({ ...emp, url: profileUrl })}>
                    <FaQrcode /> View QR
                  </button>
                  <Link to={`/employees/${emp.id}`} className="action-btn view-profile">
                    Profile <FaExternalLinkAlt size={10} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        </div>

        {activeQR && (
          <div className="qr-modal-overlay" onClick={() => setActiveQR(null)}>
            <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setActiveQR(null)}><FaTimes /></button>
              <h3>{activeQR.name}</h3>
              <p>ID: #{activeQR.id}</p>
              <div className="qr-code-box">
                <QRCodeSVG value={activeQR.url} size={160} fgColor="#000000" bgColor="#ffffff" />
              </div>
              <span className="qr-target-url">{activeQR.url}</span>
              <button className="copy-link-btn" onClick={() => {
                navigator.clipboard.writeText(activeQR.url)
                alert('Copied profile URL to clipboard!')
              }}>Copy Exact URL</button>
            </div>
          </div>
        )}
      </main>
      <FooterSection />
    </>
  )
}

export default EmployeeDirectory