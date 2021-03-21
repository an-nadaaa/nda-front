export default async (context, locale) => {
  return await Promise.resolve({
    LAYOUT: {
      navbar: {
        home: 'Home',
        about: 'About',
        campaigns: 'Campaigns',
        blog: 'Blog',
        contact: 'Contact'
      },
      footer: {}
    },
    HOME: 'home',
    ABOUT: 'about',
    CAMPAIGNS: 'campaigns',
    CONTACT: 'contact',
    BLOG: 'blog'
  })
}
