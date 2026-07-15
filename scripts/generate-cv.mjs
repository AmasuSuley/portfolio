import fs from 'fs'

const lines = [
  'AMASU SULEY',
  'Software Developer  |  Dar es Salaam, Tanzania',
  'ammarmassoud46@gmail.com  |  +255 657 004 727',
  'https://github.com/AmasuSuley  |  https://AmasuSuley.github.io/portfolio',
  '',
  'SUMMARY',
  'Full-stack developer building React frontends and Spring Boot / Laravel / Django APIs.',
  'Ships mobile and web products focused on real users in agriculture and institutions.',
  '',
  'SKILLS',
  'Frontend: React, JavaScript, HTML/CSS, Tailwind CSS, Vite',
  'Backend: Java/Spring Boot, PHP/Laravel, Python/Django, Node.js, REST APIs',
  'Mobile: Flutter, TensorFlow Lite',
  'Tools: Git, Docker, Figma, PostgreSQL/SQL',
  '',
  'SELECTED PROJECTS',
  'PoultryGuard - Flutter + TFLite disease detection for poultry farmers.',
  'FarmLink - React + Laravel farm service requests and approvals.',
  'Nuur-din Website - React + Laravel institutional site with news admin.',
  'Portfolio - Vite/React/Framer Motion site with case studies.',
  '',
  'EXPERIENCE',
  'Software Developer, Independent / Client projects - 2023 to Present',
  '- Shipped AI mobile, farm management, and institutional web products.',
  'Full-Stack Product Builder - 2022 to 2023',
  '- Prototyped APIs and dashboards across Laravel, Django, and Spring Boot.',
  '',
  'Open to freelance and full-time roles.',
]

function escapePdf(s) {
  return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

const headings = new Set(['SUMMARY', 'SKILLS', 'SELECTED PROJECTS', 'EXPERIENCE'])
const content = ['BT', '/F1 11 Tf', '50 780 Td', '14 TL']

lines.forEach((line, i) => {
  if (i === 0) content.push('/F1 18 Tf')
  else if (headings.has(line)) content.push('/F1 12 Tf')
  else content.push('/F1 10 Tf')
  content.push(`(${escapePdf(line)}) Tj`, 'T*')
})
content.push('ET')

const stream = content.join('\n')
const objs = [
  '1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n',
  '2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n',
  '3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj\n',
  `4 0 obj<< /Length ${Buffer.byteLength(stream, 'utf8')} >>stream\n${stream}\nendstream\nendobj\n`,
  '5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj\n',
]

let pdf = '%PDF-1.4\n'
const offsets = [0]
for (const o of objs) {
  offsets.push(Buffer.byteLength(pdf, 'utf8'))
  pdf += o
}
const xrefStart = Buffer.byteLength(pdf, 'utf8')
pdf += `xref\n0 ${objs.length + 1}\n`
pdf += '0000000000 65535 f \n'
for (let i = 1; i <= objs.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

fs.writeFileSync('public/Amasu-Suley-CV.pdf', pdf)
console.log('Wrote public/Amasu-Suley-CV.pdf')
