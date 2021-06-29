export const state = () => ({
  employers: [
    {
      id: 1,
      company: "Spectruss",
      jobTitle: "Fullstack Web Developer",
      roleDescription: "As the sole developer at Spectruss, my job was to translate modern, sleek designs from the design team into fully-functional websites, from backend to frontend, including domain acquisition, hosting, site-speed optimization and SEO. I worked with a variety of technologies and tools, including (but not limited to) React (Typescript and Javascript), PHP, NEXT.js, CSS-in-JS, Shopify, Wordpress, WP Headless CMS, Cloudflare, Hubspot, cPanel, and Google Tag Manager.",
      dates: "2019-2020"
    },
    {
      id: 2,
      company: "Tall Boy Marketing",
      jobTitle: "Web Developer (Freelance)",
      roleDescription: "As a freelance web developer and consultant for Tall Boy Marketing, I updated and maintenanced websites on an as-needed, contractor basis. I assisted in developing and implementing design changes and updates on client websites.",
      dates: "2018-2019"
    },
    {
      id: 3,
      company: "RocketML",
      jobTitle: "Intern - UI/UX",
      roleDescription: "Assisted with and learned about UI/UX planning, mainly focused on the user flow through the main web product; a web app for analyzing bulk data using machine learning and other techniques, which was still in development at the time of my internship.",
      dates: "2017"
    },
    {
      id: 4,
      company: "Epicodus",
      jobTitle: "Full Stack Development Apprentice",
      roleDescription: "Certificate of Completion - Full Stack Web Development with Ruby on Rails and Javascript. Created various projects with exposure to various JS and Ruby frameworks and libraries. Pair programmed daily with mentorship from instructors.",
      dates: "Class of April 2017"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Grace Financial Services",
      description: "Full website build",
      modifiedSince: true,
      image: "gfs-full.png"
    },
    {
      id: 2,
      title: "Transcard",
      description: "Hubspot website redesign",
      modifiedSince: true,
      image: "transcard-full.png"
    },
    {
      id: 3,
      title: "Fowler Brothers Co.",
      description: "Shopify webstore build",
      modifiedSince: false,
      image: "fowler-full.png"
    },
  ]
})
