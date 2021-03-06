/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jermaine Bailey",
  title: "Hi all, I'm Jermaine",
  subTitle: emoji(
    "A passionate Front End Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Next.js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/13g-LTAvP5goafS_RvlVLV7LznfBqNsCH/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jermaine-rbg",
  linkedin: "https://www.linkedin.com/in/jermaine-bailey-software-engineer/",
  gmail: "jermainebaileysoftwareengineer@gmail.com",

  
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front End / User Interfaces web applications"
    ),
    emoji("⚡ Responsive Web Design ( SEO ) Search Engine Optimized"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Animations / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/jtcpro.png"),
      subHeader: "Justice Through Code Full Stack Software Engineering Program",
      duration: "January 2022 - July 2022",
      desc: "Justice Through Code (JTC) is a coding intensive and interpersonal skills course that teaches the fundamentals of programming in Python, computer science and Django framework. JTC is a partnership between Columbia University's Center for Justice and the Tamer Center for Social Enterprise and Columbia University's Center for Justice.",
      descBullets: [
        "Wireframes: Figma, Miro",
        "Front-End Technologies: Python(Django Framework)",
        "Back-End Technologies: MySQL Database",
        "Relevant Skills: Object Oriented Programming, Agile Development Methdologies, Paired Programming",
        
        
      ]
    },
    {
      schoolName: "Digital Crafts",
      logo: require("./assets/images/digitalcraftsport.png"),
      subHeader: "Full Stack Web Development Program",
      duration: "April 2021 - October 2021",
      desc: "DigitalCrafts is a top-rated coding bootcamp teaching the fundamentals of programming through an intensive classroom experience, transforming beginners into full-stack software engineers with cutting-edge skill sets.",
      descBullets: [
        "Front-End Technologies: HTML, CSS, JavaScript, React.Js",
        "Back-End Technologies: Node, Express, PostgreSQL, Netlify Cloud Deployment",
        "Relevant Skills: Git Version Control, MacOS, Agile Development Methodologies"

    
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Brandnetic Technologies LLC",
      company: "",
      companylogo: require("./assets/images/Brandneticlogo.png"),
      date: "June 2016 – Present",
      desc: "Founder/Freelancer I collaborate with clients to develop and execute a proactive social media marketing strategy, managing all phases of digital marketing initiatives from concept through delivery to optimization, improving brand awareness and customer engagement.",
      // descBullets: [
      //   "Brand Development",
      //   "Social Media Optimization",
      //   "Search Engine Optimization",
      //   "Analytics Reporting"
      // ]
    },
    {
      role: "Cultivators Design and Landscape",
      company: "",
      companylogo: require("./assets/images/cultivatorspro.png"),
      date: "October 2017 – September 2021",
      desc: "Experienced Landscape Designer with several years of experience working with clients to create and enhance the aesthetics and function of natural outdoor spaces. Bringing forth exceptional design and horticulture skills, with a true ability to understand and strive toward the vision of a client.",
      // descBullets: [
      //   "Project Design",
      //   "Project Management",
      //   "Landscape Design Software: SmartDraw, AutoCAD"
      // ]
    },
    {
      role: "Grandpa Landscaping Management",
      company: "",
      companylogo: require("./assets/images/grandpapro.png"),
      date: "Feb 2015 – Aug 2017",
      desc: "As Director of Marketing and Business Development my role consist of analyzing brand positioning in the market by measuring the performance of marketing campaigns, monitoring market trends and finding new growth strategies. Leverage findings to increase social media channels engagement building brand loyalty. ",
      // descBullets: [
      //   "New Business Development",
      //   "Digital Marketing",
      //   "Brand Development"
      // ]
    },

    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Recent Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Brandnetic logo.jpg"),
      projectName: "Brandnetic Technologies LLC",
      projectDesc: "Brandnetic Technologies simplifiy using digital technology by leveraging it to improve customer experiences in return increasing customer engagment and ROI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.brandnetictechnologies.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/trapcodelogo2.jpg"),
      projectName: "Trap Code",
      projectDesc: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

    {
      image: require("./assets/images/trapcodelogo2.jpg"),
      projectName: "Trap Code",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",

      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
  

    // {
    //   image: require("./assets/images/Brandnetic logo.jpg"),
    //   projectName: "Brandnetic Technologies LLC",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://saayahealth.com/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Digital Crafts",
      subtitle:
        "Certificate of completion Full Stack Web Development Program",
      image: require("./assets/images/digitalcraftscert.png"),
      footerLink: [
        {
          name: "View Digital Crafts",
          url: "https://www.digitalcrafts.com/"
        },
       
      ]
    },
    {
      title: "LinkedIn Learning",
      subtitle:
        "Certificate of completion React Software Architecture Course",
      image: require("./assets/images/linkedInreact.png"),
      footerLink: [
        {
          name: "View LinkedIn Learning",
          url: "https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?autoplay=true"
        }
      ]
    },

    {
      title: "LinkedIn Learning",
      subtitle: "Certificate of Completion for the React Design Patterns Course ",
      image: require("./assets/images/linkedInReactDesign.jpeg"),
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "View LinkedIn Learning",
          url: "https://www.linkedin.com/learning/react-design-patterns/controlled-onboarding-flows?autoplay=true"
        }
      ]
    },

    {
      title: "LinkedIn Learning",
      subtitle:
        "Certificate of completion React Software Architecture Course",
      image: require("./assets/images/linkedInreact.png"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  image: require("./assets/images/linkedInreact.png"),

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(678)792-6940",
  email_address: "Jermainebaileysoftwareengineer@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
