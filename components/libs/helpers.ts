export const navLinks = [
  {
    name: 'Home',
    link: '/',
    img: '//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg'
  },
  {
    name: 'About',
    link: '/about',
    img: '//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/user.svg'
  },
  {
    name: 'Projects',
    link: '/projects',
    img: '//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/briefcase.svg'
  },
  {
    name: 'Resume',
    link: '/resume',
    img: '//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/newspaper.svg'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/BengaCodes',
    img: 'https://raw.githubusercontent.com/rdimascio/icons/932c4cf6c9e2031abeca1c164baa0f76785c16fe/icons/github.svg'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/benga-olasebikan',
    img: 'https://raw.githubusercontent.com/rdimascio/icons/932c4cf6c9e2031abeca1c164baa0f76785c16fe/icons/linkedin.svg'
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
