import { IconHome, IconBrandGithub, IconBrush, IconBriefcase2, IconBrandLinkedin, IconMail, IconSchool, IconFileText } from "@tabler/icons-react"

export const data = {
  experience: [
    {
      image: "/experience/tsmc_logo.svg",
      company: "TSMC",
      role: "Data Science Intern",
      date: "Jun 2026 - Aug 2026",
      description: "Built a full-stack training-analytics platform tracking NT$150M in annual training budget across 3,500+ courses, and an automated course-scheduling tool supporting 90,000+ employees.",
      location: "Hsinchu, Taiwan",
      skills: ["Python", "Data Pipelines", "Dashboards", "Automation"],
      href: "https://www.tsmc.com",
    },
    {
      image: "/experience/upenn_medicine_logo.svg",
      company: "Perelman School of Medicine, UPenn",
      role: "Software Development Engineer",
      date: "Dec 2025 - Jun 2026",
      description: "Developed and maintained 10+ RESTful API endpoints for the TissueLab platform, supporting AI-driven whole-slide pathology image analysis workflows and data management.",
      location: "Philadelphia, PA",
      skills: ["Python", "RESTful APIs", "Low-code Tools", "AI/ML"],
      href: "https://www.med.upenn.edu",
    },
    {
      image: "/experience/handshake_logo.png",
      company: "Handshake AI Solutions",
      role: "AI Research Fellow",
      date: "Sep 2025 - Nov 2025",
      description: "Designed 20+ multimodal reasoning tasks applying RLHF, uncovering consistent LLM weaknesses in interpreting hand-drawn diagrams and distance-estimation problems.",
      location: "Remote (Philadelphia, PA)",
      skills: ["RLHF", "LLM Evaluation", "Prompt Engineering"],
    },
    {
      image: "/experience/hdsi_logo.svg",
      company: "Halicioglu Data Science Institute",
      role: "Data Science Instructional Assistant",
      date: "Sep 2023 - Aug 2024",
      description: "Taught data science fundamentals to 300+ students and provided 1-on-1 debugging guidance to 100+ students across introductory and intermediate courses.",
      location: "San Diego, CA",
      skills: ["Python", "Teaching", "Data Structures & Algorithms"],
      href: "https://datascience.ucsd.edu",
    },
  ],

  education: [
    {
      image: "/experience/upenn_logo.svg",
      company: "University of Pennsylvania",
      role: "M.S.E. in Data Science and Artificial Intelligence",
      date: "Expected May 2027",
      description: "GPA: 4.0/4.0. Coursework: Database & Information Systems, Applied Machine Learning, Graph Neural Network.",
      location: "Philadelphia, PA",
      skills: ["Machine Learning", "Graph Neural Networks", "Databases"],
      href: "https://www.upenn.edu",
    },
    {
      image: "/experience/ucsd_logo.png",
      company: "University of California, San Diego",
      role: "B.A. in International Business, Minor in Data Science",
      date: "Sep 2022 - Jun 2025",
      description: "GPA: 3.85/4.0. Provost Honors for 5 quarters (Fall 2022 - Spring 2024).",
      location: "San Diego, CA",
      skills: ["Data Structures & Algorithms", "Probabilistic Modeling", "Data Management"],
      href: "https://ucsd.edu",
    },
  ],

  projects: [
    {
      title: "League of Legends Playing Style Analysis",
      href: "https://chiachan-ho.github.io/LPL-v-LCK/",
      dates: "Mar 2024 - Jun 2024",
      active: false,
      type: "Data Science",
      technologies: ["Python", "Pandas", "Scikit-learn"],
      description: "Engineered a data pipeline to process 10,000+ professional League of Legends matches, confirming statistically significant regional playstyle differences through hypothesis testing.",
      image: "/projects/lol-img.png",
    },
    {
      title: "Data Science Educational Platform",
      href: "https://practice.dsc10.com/",
      dates: "Sep 2023 - Dec 2023",
      active: false,
      type: "Web Application",
      technologies: ["Python", "Markdown", "GitHub"],
      description: "Co-developed an open-source educational site used by 1000+ data science students, authoring exam solutions and maintaining consistent content structure.",
      image: "/projects/practice-img.png",
    },
    {
      title: "BabyPandas Documentation",
      href: "https://dsc-courses.github.io/bpd-reference/",
      dates: "Apr 2024 - Jun 2024",
      active: false,
      type: "Documentation",
      technologies: ["Python", "Markdown"],
      description: "Authored and maintained the documentation for the BabyPandas Python module, planning structure and publishing function references.",
      image: "/projects/babypandas-img.png",
    },
  ],

  contact: [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=henryho534@gmail.com",
      label: "Email",
      icon: <IconMail className="h-5 w-5" />,
      aria: "Email",
    },
    {
      href: "https://www.linkedin.com/in/chiachan-ho",
      label: "LinkedIn",
      icon: <IconBrandLinkedin className="h-5 w-5" />,
      aria: "LinkedIn",
    },
    {
      href: "https://github.com/chiachan-ho",
      label: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5" />,
      aria: "GitHub",
    },
  ],

  nav: [
    {
      name: "Home",
      link: "hero",
      icon: <IconHome className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
    {
      name: "Projects",
      link: "projects",
      icon: <IconBrush className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />
    },
    {
      name: "Experience",
      link: "experience",
      icon: <IconBriefcase2 className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
    {
      name: "Teaching",
      link: "teaching",
      icon: <IconSchool className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
    {
      name: "Resume",
      link: "resume",
      icon: <IconFileText className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
  ],

  teaching: [
    {
      code: "DSC 10",
      title: "Principles of Data Science",
      studentsTutored: "1000+",
      terms: "Fall 2023, Winter 2024, Spring 2024",
      responsibilities: [
        "Hosted office hours",
        "Created exams and quizzes",
        "Graded assignments and exams",
        "Resolved technical issues for students",
      ],
    },
    {
      code: "DSC 20",
      title: "Programming and Data Structures",
      studentsTutored: "100+",
      terms: "Summer 2024",
      responsibilities: [
        "Hosted office hours",
        "Created exams and quizzes",
        "Graded assignments and exams",
        "Resolved technical issues for students",
      ],
    },
  ],

  favoriteLanguage: {
    name: "Python",
    icon: "python",
    themeDependent: false,
  },

  tools: [
    { name: "Python", icon: "python", themeDependent: false },
    { name: "Java", icon: "java", themeDependent: false },
    { name: "SQL", icon: "sql", themeDependent: false },
    { name: "JavaScript", icon: "javascript", themeDependent: false },
    { name: "HTML", icon: "html", themeDependent: false },
    { name: "MATLAB", icon: "matlab", themeDependent: false },
    { name: "Git", icon: "git", themeDependent: false },
    { name: "Jupyter", icon: "jupyter", themeDependent: false },
    { name: "AWS", icon: "aws", themeDependent: true },
    { name: "Docker", icon: "docker", themeDependent: false },
    { name: "FastAPI", icon: "fastapi", themeDependent: false },
    { name: "PyTorch", icon: "pytorch", themeDependent: false },
    { name: "PostgreSQL", icon: "postgresql", themeDependent: false },
    { name: "MongoDB", icon: "mongodb", themeDependent: false },
    { name: "NumPy", icon: "numpy", themeDependent: false },
    { name: "Pandas", icon: "pandas", themeDependent: false },
    { name: "Scikit-learn", icon: "scikitlearn", themeDependent: false },
    { name: "React", icon: "react", themeDependent: false },
    { name: "Node.js", icon: "nodejs", themeDependent: false },
    { name: "Flask", icon: "flask", themeDependent: true },
  ],
};
