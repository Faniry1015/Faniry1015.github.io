// gitprofile.config.js

const config = {
  github: {
    username: 'Faniry1015', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 15, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/faniriantsoa/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://faniry1015.github.io',
    phone: '+261 34 08 717 66',
    email: 'frandriaharimino@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Git',
    'CSS',
  ],
  experiences: [
    {
      company: 'Upwork',
      position: 'Freelance',
      from: '2022',
      to: 'Present',
      companyLink: 'https://upwork.com',
    },
    {
      company: 'Ministère de l\'Agriulture et de l\'Elevage',
      position: 'Chef de Service du Système d\'Information et du Suivi-Evaluation',
      from: 'Mars 2017',
      to: 'Present',
      companyLink: 'https://minae.gov',
    },
  ],
  certifications: [
    {
      name: 'English for Career Development',
      body: "The owner of this badge successfully completed the Online Professional English Network's (OPEN) 2023 English for Career Development massive open online course (MOOC). OPEN is sponsored by the U.S. Department of State, Bureau of Educational and Cultural Affairs, with funding provided by the U.S. government. English for Career Development is designed for high-beginner to low-intermediate non-native English speakers.",
      year: 'Février 2023',
      link: 'https://api.badgr.io/public/assertions/GhDtkkZ4Q8iPU8ozdNLCYg?identity__email=frandriaharimino%40gmail.com'
    },
  ],
  education: [
    {
      institution: 'SAYNA',
      degree: 'Certificate',
      from: 'Février 2023',
      to: 'Présent',
    },
    {
      institution: 'Université d\'Antananarivo',
      degree: 'Ingénieur Agronome',
      from: '2009',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
};

export default config;
