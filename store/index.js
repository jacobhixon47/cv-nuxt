export const state = () => ({
  employers: [
    {
      id: 1,
      company: "Spectruss",
      jobTitle: "Fullstack Web Developer",
      companyDescription: "Forward-thinking digital marketing company based in Chattanooga, Tennessee.",
      roleDescription: "As the sole developer at Spectruss, my job was to translate modern, sleek designs from the design team into fully-functional websites, from backend to frontend, including domain acquisition, hosting, site-speed optimization and SEO. I worked with a variety of technologies and tools, including (but not limited to) React (Typescript and Javascript), PHP, NEXT.js, CSS-in-JS, Shopify, Wordpress, WP Headless CMS, Cloudflare, Hubspot, cPanel, and Google Tag Manager.",
      dates: "2019-2020"
    },
    {
      id: 2,
      company: "Tall Boy Marketing",
      jobTitle: "Web Developer (Freelance)",
      companyDescription: "Nashville-based full-service marketing agency with a focus on social media.",
      roleDescription: "As a freelance web developer and consultant for Tall Boy Marketing, I updated and maintenanced websites on an as-needed, contractor basis. I assisted in developing and implementing design changes and updates on client websites.",
      dates: "2019"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Grace Financial Services",
      description: "Full website rebuild",
      modifiedSince: true,
      image: "gfs.jpg"
    },
    {
      id: 2,
      title: "Transcard",
      description: "Hubspot website redesign (first version)",
      modifiedSince: true,
      image: "transcard.jpg"
    },
    {
      id: 3,
      title: "Fowler Brothers Co.",
      description: "Shopify webstore build",
      modifiedSince: false,
      image: "fowler-brothers.jpg"
    },
  ]
})
