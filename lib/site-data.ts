export const profile = {
  name: 'Sourav Shaw',
  title: 'Aspiring Software Engineer',
  subtitle:
    'Computer Science undergraduate passionate about software development, AI, backend development, and solving real-world problems through technology.',
  resumeHref: '/resume.pdf',
}

export const contact = {
  email: 'shawsourav0308@gmail.com',
  phone: '+91 79801 05604',
  phoneHref: '+917980105604',
  github: 'https://github.com/0xSouravXBT',
  githubHandle: '0xSouravXBT',
  linkedin: 'https://linkedin.com/in/sourav-shaw-107ba535b',
  linkedinHandle: 'sourav-shaw-107ba535b',
  location: 'Kolkata, India',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    'I am a Computer Science undergraduate at Narula Institute of Technology with a strong interest in software engineering, artificial intelligence, backend development, and web technologies.',
    'I enjoy building practical applications end to end — designing data models, writing clean APIs, and shaping interfaces that feel effortless to use. Most of what I know comes from shipping projects, breaking things, and reading the docs until they make sense.',
    'Right now I am looking for a Software Engineer internship where I can contribute to a real product, learn from experienced engineers, and keep sharpening my problem-solving skills.',
  ],
  highlights: [
    { value: '8.01', label: 'Current CGPA' },
    { value: '2027', label: 'Expected graduation' },
    { value: '3+', label: 'Projects shipped' },
    { value: 'AI · Backend', label: 'Primary focus' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'code',
    items: ['Python', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: 'layout',
    items: ['HTML', 'CSS', 'React.js', 'Node.js'],
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MongoDB'],
  },
  {
    title: 'Core Subjects',
    icon: 'cpu',
    items: ['Operating Systems', 'DBMS', 'Computer Networks'],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'REST APIs'],
  },
  {
    title: 'Soft Skills',
    icon: 'users',
    items: ['Problem Solving', 'Teamwork', 'Communication'],
  },
] as const

export const projects = [
  {
    title: 'Elephant Skin Disease Detection',
    kicker: 'AI Model',
    description:
      'Developed an AI model for elephant skin disease detection using Python and Machine Learning. Implemented image preprocessing, model training, evaluation, and improved model accuracy through experimentation.',
    tech: ['Python', 'Machine Learning', 'Computer Vision'],
    github:
      'https://github.com/0xSouravXBT/Elephant_Skin_Disease_Detection_AI_Model',
    image: '/projects/elephant-skin-disease-ai.png',
    imageAlt:
      'Abstract visualization of a wireframe elephant with computer-vision detection overlays',
  },
  {
    title: 'Image Uploader Web Application',
    kicker: 'Full Stack',
    description:
      'Developed a secure image upload web application using Node.js and MongoDB. Built REST APIs for image upload and storage while using Git for version control.',
    tech: ['Node.js', 'MongoDB', 'HTML', 'CSS'],
    github: 'https://github.com/0xSouravXBT/Image_Uploader',
    image: '/projects/image-uploader.png',
    imageAlt:
      'Abstract visualization of stacked translucent image cards with an upload arrow',
  },
  {
    title: 'URL Shortener',
    kicker: 'Backend',
    description:
      'Developed a URL shortening application that generates shortened links and redirects users to the original URLs while managing data efficiently.',
    tech: ['Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/0xSouravXBT/URL_Shortner',
    image: '/projects/url-shortener.png',
    imageAlt:
      'Abstract visualization of a long line collapsing into a short link with chain motif',
  },
]

export const certifications = [
  {
    title: 'Python and Django Training',
    issuer: 'Ardent Computech Pvt. Ltd.',
    description:
      'Hands-on training covering Python fundamentals, object-oriented programming, and building database-backed web applications with the Django framework.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    school: 'Narula Institute of Technology',
    period: '2023 – Present',
    details: [
      { label: 'CGPA', value: '8.01' },
      { label: 'Expected graduation', value: '2027' },
    ],
  },
]
