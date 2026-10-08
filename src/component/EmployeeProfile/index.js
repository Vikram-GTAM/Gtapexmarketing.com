import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { FaArrowLeft, FaIdBadge } from 'react-icons/fa'
import Header from '../Header'
import FooterSection from '../FooterSection'
import './index.css'

// Master employee database with correct IDs
const employeesData = {
  '0001': {
    name: 'Krishna',
    role: 'Managing Director & CEO',
    email: 'krishnadevkola@gmail.com',
    phone: '+91 6301617216',
    image: '/employees/01.webp',
    responsibilities: [
      'Vision and Strategy',
      'Revenue and businesses growth',
      'Clients and Brand Responsibility',
      'Team Management',
      'Decision Making for clients',
      'Networking and strategic relationship',
      'Fundraising if required.'
    ]
  },
  '0002': {
    name: 'Vamsi Girijala',
    role: 'Managing Director & COO',
    email: 'vamsi@gtapexmarketing.com',
    phone: '+91 91234 56789',
    image: '/employees/0002.webp',
    responsibilities: ['Operations, Management, and Strategic Execution']
  },
  '0003': {
    name: 'Anju',
    role: 'Client Manager & CMO',
    email: 'anju@gtapexmarketing.com',
    phone: '+91 99887 66554',
    image: '/employees/0003.webp',
    responsibilities: ['Client Management and Chief Marketing Operations']
  },
  '0004': {
    name: 'Ankith Rao',
    role: 'HR & Marketing Coordinator',
    email: 'ankithrao704@gmail.com',
    phone: '+91 79818 15006',
    image: '/employees/0004.webp',
    responsibilities: [
      'Manage social media accounts, content calendars, posts, reels, stories, and campaigns.',
      'Coordinate with clients and creative teams for timely content delivery.',
      'Monitor social media performance, trends, engagement, and prepare reports.',
      'Handle recruitment, interviews, onboarding, employee records, attendance, and leave management.',
      'Prepare and maintain HR documents, policies, and employee communications.',
      'Manage day-to-day office administration, meetings, vendors, supplies, and internal coordination.',
      'Support management in HR, administrative, and operational activities.'
    ]
  },
  '0005': {
    name: 'Harikrishna',
    role: 'Digital Marketing Team Lead',
    dateOfJoining: '25th March, 2026',
    dateOfRelieving: '',
    email: 'hkdnetha@gmail.com',
    phone: '+91 95058 06820',
    image: '/employees/0005.webp',
    responsibilities: [
      'Manage and guide the team.',
      'Assign tasks and set priorities.',
      'Monitor daily work and deadlines.',
      'Ensure quality of deliverables.',
      'Resolve team issues and provide support.',
      'Track team performance and targets.',
      'Coordinate with management/clients.',
      'Share regular progress reports.',
      'Motivate and develop team members.',
      'Improve team processes and productivity.'
    ]
  },
  '0006': {
    name: 'Shiva Kumar',
    role: 'Video Editor',
    email: 'shiva.gtam@gmail.com',
    phone: '+91 79899 04351',
    image: '/employees/0006.webp',
    responsibilities: [
      'CapCut: professional reel editing, Instagram reels, YouTube shorts, beat sync edits, smooth transitions, auto captions, speed ramping, text animations.',
      'Alight Motion: cinematic text animations, keyframes, glow effects, camera movements, beat sync effects.',
      'Premiere Pro: advanced color grading, pro audio editing, cinematic transitions, documentary style edits.',
      'Photoshop: thumbnail design, typography, color correction, text effects, background removal.',
      'Canva: design YouTube thumbnails, Instagram posts, stories, flyers, presentations, and manage brand kit.'
    ]
  },
  '0007': {
    name: 'Varshith',
    role: 'Graphic Designer',
    email: 'varshithuiuxdesigner@gmail.com',
    phone: '+91 63006 17850',
    image: '/employees/0007.webp',
    responsibilities: [
      'Create professional and visually engaging designs for social media, advertisements, websites, presentations, brochures, posters, and banners.',
      'Design social media posts, stories, carousels, thumbnails, and promotional creatives.',
      'Understand project briefs, brand guidelines, campaign objectives, and target audiences.'
    ]
  },
  '0008': {
    name: 'Madhuri',
    role: 'Full Stack Developer',
    email: 'madhurigtam@gmail.com',
    phone: '+91 82478 05403',
    image: '/employees/0008.webp',
    responsibilities: [
      'Design, develop, test, deploy, and maintain responsive websites and web applications.',
      'Develop front-end and back-end components using HTML, CSS, JavaScript, React, Bootstrap, and Node backend frameworks.',
      'Convert UI/UX designs into user-friendly mobile-responsive web applications.',
      'Manage databases, secure APIs, payment gateways, analytics tools, and Git/GitHub version control.'
    ]
  },
  '0009': {
    name: 'Divya',
    role: 'Digital Marketing Lead',
    email: 'saidivya.gtam@gmail.com',
    phone: '+91 91139 65770',
    image: '/employees/0009.webp',
    responsibilities: [
      'Lead and manage the digital marketing team, assigning tasks, setting priorities, and ensuring timely execution.',
      'Develop and execute comprehensive digital marketing strategies aligned with growth objectives.',
      'Plan and manage social media calendars, campaigns, and promotional content.',
      'Manage website marketing activities, landing pages, conversion optimization, and performance tracking.'
    ]
  },
  '0010': {
    name: 'Vikram Pagadala',
    role: 'DOP & Technology Manager',
    email: 'Vikram.gtma@gmail.com',
    phone: '+91 94933 59209',
    image: '/employees/vikram-pagadala-profile.png',
    responsibilities: [
      'Workflow Optimization: Eliminating bottlenecks and building SOPs to maximize productivity.',
      'QA & Compliance: Ensuring all products, services, and operations meet industry standards.',
      'Web Development: Building, managing, and optimizing digital storefronts.',
      'Media Production: Directing on-set visuals (DOP) and executing photo and video post-production.'
    ]
  },
  '0011': {
    name: 'Prem Boppisetty',
    role: 'Graphic & UI/UX Designer',
    email: 'Premvfx2@gmail.com',
    phone: '+91 88971 33883',
    image: '/employees/0011.webp',
    responsibilities: [
      'Design graphics for websites, social media, marketing, and branding.',
      'Create UI designs, wireframes, mockups, and prototypes for websites and apps.',
      'Develop and maintain brand guidelines, layouts, colors, typography, and visual assets.',
      'Collaborate with developers, marketing teams, and clients to deliver design solutions.'
    ]
  },
  '0012': {
    name: 'Banavath Prakash',
    role: 'Video Editor',
    email: 'prakashchavan.gtam@gmail.com',
    phone: '+91 91331 58381',
    image: '/employees/0012.webp',
    responsibilities: [
      'Create professional Reels, Short Videos, Documentary Videos, Promotional Videos, and AI Videos.',
      'Edit videos according to script references, brand guidelines, and creative direction.',
      'Maintain consistency in visual quality, pacing, storytelling, colors, fonts, and audio.'
    ]
  },
  '0013': {
    name: 'Teja',
    role: 'UI/UX Designer & Graphic Designer',
    email: 'teja.gtam@gmail.com',
    phone: '+91 81797 72687',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    responsibilities: [
      'UI/UX Design: Create wireframes, mockups, prototypes, and responsive UI designs using Figma.',
      'Graphic Design: Create posters, banners, brochures, social media creatives, and logos.',
      'Video Editing & AI Generation: Edit promotional videos, reels, and create AI-generated video content.'
    ]
  },
  '0014': {
    name: 'Eswara Rao Badana',
    role: 'Sales Team Lead',
    email: 'eswarbadana996@gmail.com',
    phone: '+91 9959685793',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80'
  }
}
const EmployeeProfile = () => {
  const { id } = useParams()
  const employee = employeesData[id]

  // Construct the official live URL encoded into the QR code
  const profileUrl = `https://www.gtapexmarketing.com/#/employees/${id}`

  if (!employee) {
    return (
      <>
        <Header />
        <div className="employee-not-found">
          <h2>Employee Not Found</h2>
          <p>No official profile exists with ID: <b>{id}</b></p>
          <Link to="/employees" className="back-home-btn"><FaArrowLeft /> Back to Directory</Link>
        </div>
        <FooterSection />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="employee-page-wrapper">
        <div className="employee-card-container">
        <div className="employee-header-tag">
          <FaIdBadge /> GT Apex Official ID
        </div>

        <div className="employee-img-wrapper">
          <img src={employee.image} alt={employee.name} className="employee-avatar" />
        </div>

        <div className="employee-info">
          <h1 className="employee-name">{employee.name}</h1>
          <p className="employee-role">{employee.role}</p>
          <div className="employee-meta">
            <span><b>ID:</b> #{id}</span>
            <span><b>Email:</b> {employee.email}</span>
            <span><b>Phone:</b> {employee.phone}</span>
          </div>
        </div>

        <div className="qr-section">
          <h3>Scannable ID QR Code</h3>
          <p>Scan with any phone camera to verify credentials</p>
          <div className="qr-box">
            {/* Encodes the precise production URL */}
            <QRCodeSVG value={profileUrl} size={160} fgColor="#000000" bgColor="#ffffff" />
          </div>
          <span className="qr-url-text">{profileUrl}</span>
        </div>

        <div className="employee-actions">
          <Link to="/employees" className="back-home-btn">
            <FaArrowLeft /> Back to Directory
          </Link>
        </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}

export default EmployeeProfile