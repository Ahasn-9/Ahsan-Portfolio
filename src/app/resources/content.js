
const person = {
  firstName: "Ahsan",
  lastName: "Mughal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend Developer",
  avatar: "/images/ahsan.png",
  email: "mughalahsan718@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Lahore, PK.", // Display location for the user.
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about backend development, system design, and share
      insights on the intersection of scalability, performance, and
      human-centered technology.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/ahsan__024",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mughalahsan718",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}?subject=Project%20Inquiry&body=Hi%20Ahsan,%0D%0A%0D%0AI'm:%20[Your%20Name]%0D%0AI’m%20looking%20for:%20[Brief%20Project%20Description]%0D%0ABudget%20Range:%20[Your%20Budget]%0D%0A%0D%0ALooking%20forward%20to%20your%20reply.`,
  },
];

const home = {
  path: "/",
  image: "/images/og/Ahsan.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>👋🏼 Ahsan Mughal</>,
  featured: {
    display: true,
    title: (
      <>
        Currently at ― <strong className="ml-4">NwLogics</strong>
      </>
    ),
    href: "https://nwlogics.com/",
  },
  subline: (
    <>
      A {person.role} crafting elegant, secure, and scalable systems that power
      seamless digital experiences and fuel business growth.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About ― ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  gallery: {
    display: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    // calendar = resume.
    display: true,
    displayIcon: true,
    link: "/docs/Ahsan-resume.pdf",
    title: "Download Resume",
    file: "Ahsan Mughal's Resume.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ahsan Mughal, backend developer who designs and delivers resilient,
        high-performance server systems. He combines meticulous attention to
        detail with a knack for practical, creative problem-solving, turning
        architectural complexity into clean, maintainable solutions that boost
        reliability, performance, and product momentum.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NwLogics",
        timeframe: "2025 - Present",
        role: `${person.role}`,
        achievements: [
          <>
            Eform-Voting
            <ul>
              <li>
                Led development of a multi-step voting & booking platform using
                Laravel, PHP, MySQL, Bootstrap, and JavaScript, implementing
                wizard flows (tariff → payment → reward → event → QR), Google
                OAuth and role-based users.
              </li>
              <li>
                Integrated secure payments and anti-bot protections: Stripe
                payment processing plus Cloudflare Turnstile on checkout and
                hCaptcha on authentication.
              </li>
              <li>
                Collaborated in an Agile team using Git (feature branches, PRs,
                code reviews) to deliver QR-based voting, server-side
                validation, and transactional safeguards.
              </li>
            </ul>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "CodeUpNow",
        timeframe: "2021 - 2023",
        role: "Web Developer Intern",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "COMSATS University Islamabad",
        description: (
          <>
            Studied software engineering. Specializing in backend development,
            databases, and system architecture. Graduated with a strong academic
            record and practical experience through internships and projects.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Laravel",
        description: (
          <>
            Experienced in building robust web applications using the Laravel
            PHP framework.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "MySQL",
        description: (
          <>
            Skilled in designing and managing relational databases for efficient
            data storage and retrieval.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>
            My primary tool for UI/UX design, prototyping, and collaborative
            design work.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Notion",
        description: (
          <>
            My go-to for project management, note-taking, and personal
            organization.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },

      {
        title: "React",
        description: (
          <>
            Proficient in creating dynamic user interfaces and single-page
            applications using React.js.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design, tech and humans...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects ― ${person.name}`,
  description: `Design projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery ― ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/about/LUMS-open-day.png",
      alt: "Ahsan Mughal at LUMS Open Day",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/imrtls00-speak-notion.png",
      alt: "Sameer Faisal speaking about Notion",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/cbtl-meetup.png",
      alt: "Notion Workshop at CBTL",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/imrtls00-speak-tech.png",
      alt: "Sameer Faisal speaking at Tech Conference",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/notion-com.png",
      alt: "Notion COMSATS - Community",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/notion-ninjas.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/devfest22-community.png",
      alt: "Sameer attending GDG Lahore DevFest22",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/imrtls00-speak-pro.png",
      alt: "Sameer Faisal speaking about Prototyping",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/attendee-tech.png",
      alt: "Sameer Faisal attending Tech Conference",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/app-devfest.png",
      alt: "Sameer receiving sovenier from GDG Cloud Lahore",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
