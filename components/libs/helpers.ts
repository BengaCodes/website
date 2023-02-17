import { FileText, Folder, GitHub, Home, Linkedin, User } from 'react-feather'

export const navLinks = [
  {
    name: 'Home',
    link: '/',
    icon: Home
  },
  {
    name: 'About',
    link: '/about',
    icon: User
  },
  {
    name: 'Projects',
    link: '/projects',
    icon: Folder
  },
  {
    name: 'Resume',
    link: '/resume',
    icon: FileText
  },
  {
    name: 'GitHub',
    link: 'https://github.com/BengaCodes',
    icon: GitHub
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/benga-olasebikan',
    icon: Linkedin
  }
]

export const footerLinks = [
  {
    name: 'Resume',
    link: '/resume'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/BengaCodes'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/benga-olasebikan'
  },
  {
    name: 'About',
    link: '/about'
  }
]

export const navTargetBlankLinks = ['GitHub', 'LinkedIn']

export const greeting = () => {
  let greeting: string = ''

  const d = new Date()
  const hour = d.getHours()

  if (hour >= 5 && hour < 12) {
    greeting = 'Good Morning'
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon'
  } else if (hour >= 17 && hour < 23) {
    greeting = 'Good Evening'
  }

  return greeting
}

export const backend: string[] = [
  'Proficiency in JavaScript & TypeScript',
  'Knowledge of popular Node.js frameworks like Express',
  'Experience with database management systems like MongoDB, PostgreSQL, MySQL, etc',
  'Understanding of RESTful API design and development',
  'Experience with serverless computing technologies like AWS Lambda, Azure Functions, or Google Cloud Functions',
  'Understanding of server-side rendering and Next.js (A Framework I love)'
]

export const devops: string[] = [
  'Experience with cloud computing platforms like AWS, Azure, or Google Cloud',
  'Understanding of Continuous Integration/Continuous Deployment (CI/CD) principles',
  'Experience in setting up and managing a database server',
  'Familiarity with version control systems like Git'
]

export const improve: string[] = [
  'Familiarity with infrastructure-as-code tools like Terraform, CloudFormation, or Ansible',
  'Understanding of container orchestration platforms like Kubernetes, Docker Swarm, or Amazon ECS',
  'Familiarity with monitoring tools like Nagios, Prometheus, Grafana, etc',
  'Familiarity with web application security and encryption technologies'
]

export const frontend: string[] = [
  'Strong knowledge of HTML, CSS, and JavaScript',
  'Proficiency in using ReactJS and its core principles',
  'Familiarity with React Router or similar routing libraries',
  'Experience in Redux or similar state management libraries',
  'Knowledge of responsive design and CSS frameworks like Bootstrap, Material UI, etc',
  'Understanding of server-side rendering and Next.js (A Framework I love)',
  'Familiarity with testing frameworks like Jest, Enzyme, etc',
  'Experience in debugging and troubleshooting frontend issues',
  'Working with and dislaying large sets of data using tools such as Ag Grid'
]
