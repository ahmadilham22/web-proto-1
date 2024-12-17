import project1 from '../assets/projects/project-1.webp';
import project2 from '../assets/projects/project-2.webp';
import project3 from '../assets/projects/project-3.webp';
import project4 from '../assets/projects/project-4.webp';

export const HERO_CONTENT = `Motivated Junior Software Engineer with strong foundation in fullstack development. Passionate about creating efficient, scalable and continuously learning new technologies. Seeking an opportunity to contribute to innovative projects and grow as a developer.I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, Laravel, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: '2023 - 2024',
    role: 'Full Stack Developer',
    company: 'PT Wiiver Multiteknologi Bangsa - Freelance',
    description: `Build a website to monitor assets at ICT Lampung University. The website can be used to monitor the condition of the assets, is it good, bad or maintainance of the assets. The website also can generate a qrcode of assets and location of the assets. `,
    technologies: ['Laravel', 'Javascript', 'PostgreSQL'],
  },
  {
    year: '2021 - 2022',
    role: 'Full Stack Developer',
    company: 'PT Kazee Digital Indonesia - Intern',
    description: `Build a website to monitoring users. The website can be used to count how many user login and how many users registerd that showed by chart`,
    technologies: ['Laravel', 'Javascript', 'MySQL'],
  },
  {
    year: '2021 - 2022',
    role: 'Full Stack Developer',
    company: 'PT CitiAsia Inc - Intern',
    description: `Slicing design from figma to web`,
    technologies: ['Laravel', 'Css', 'Javascript'],
  },
];

export const PROJECTS = [
  {
    title: 'Assets Monitoring',
    image: project1,
    description:
      'A website that monitor condition of an asset and show that in chart',
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Laravel',
      'Javascript',
      'PostgreSQL',
    ],
  },
  {
    title: 'Portofolio - Online Absence API',
    image: project2,
    description:
      'Develop a backend application that used for online absence for employee',
    technologies: ['Javacript', 'Node Js', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Portfolio - Archive Thesis Documents Website',
    image: project3,
    description:
      'A website that used for archive documents of thesis in Informartics Engineering major',
    technologies: ['HTML', 'CSS', 'Laravel', 'Javascript', 'Bootstrap'],
  },
];

export const CONTACT = {
  address: 'Jambi, Indonesia',
  phoneNo: '6282238603481',
  email: 'ahmadilhampr@gmail.com',
};
