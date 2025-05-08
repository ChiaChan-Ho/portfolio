import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, FileText, ExternalLink, Moon, Sun, ChevronRight } from "lucide-react";

export default function PersonalWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [pageAnimation, setPageAnimation] = useState("fade-in");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    students: 0,
    skills: 0
  });
  const [skillLevels, setSkillLevels] = useState({
    python: 0,
    java: 0,
    sql: 0,
    javascript: 0,
    cpp: 0,
    html: 0,
    matlab: 0,
    css: 0
  });
  const [textAnimation, setTextAnimation] = useState({
    name: false,
    subtitle: false,
    numbers: false
  });
  
  const targetSkillLevels = {
    python: 95,
    java: 80,
    sql: 70,
    javascript: 70,
    cpp: 50,
    html: 50,
    matlab: 50,
    css: 50
  };

  const targetCounters = {
    projects: 3,
    students: 2000,
    skills: 10
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateTo = (page) => {
    if (page === currentPage) return;
    
    setIsPageChanging(true);
    setPageAnimation("fade-out");
    
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setPageAnimation("fade-in");
      
      setTimeout(() => {
        setIsPageChanging(false);
      }, 500);
    }, 300);
  };

  // Add transition styles at the top level
  useEffect(() => {
    // Add CSS for transitions to the document head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideBottom {
        0% {
          transform: translateY(100px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideRight {
        0% {
          transform: translateX(-100px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideLeft {
        0% {
          transform: translateX(100px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      .animate-slide-bottom {
        animation: slideBottom 1s ease forwards;
      }
      .animate-slide-right {
        animation: slideRight 1s ease forwards;
      }
      .animate-slide-left {
        animation: slideLeft 1s ease forwards;
      }
      .fade-in {
        animation: fadeIn 0.5s ease forwards;
      }
      .fade-out {
        animation: fadeOut 0.3s ease forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
      .page-transition {
        transition: all 0.5s ease;
      }
      .tab-active {
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .tab-inactive {
        transition: background-color 0.3s ease, color 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Animation for numbers
  useEffect(() => {
    if (currentPage === 'home') {
      const duration = 1300; // 1.3 seconds
      const steps = 60; // 60 steps for smooth animation
      const interval = duration / steps;
      let animationTimer = null;

      // Show all elements immediately
      setTextAnimation({
        name: true,
        subtitle: true,
        numbers: true
      });

      const animateCounters = () => {
        let step = 0;
        animationTimer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setCounters({
            projects: Math.floor(targetCounters.projects * progress),
            students: Math.floor(targetCounters.students * progress),
            skills: Math.floor(targetCounters.skills * progress)
          });

          if (step === steps) {
            clearInterval(animationTimer);
          }
        }, interval);
      };

      // Start number animation immediately
      animateCounters();

      // Cleanup timer
      return () => {
        if (animationTimer) {
          clearInterval(animationTimer);
        }
      };
    } else {
      // Reset animations when leaving home page
      setTextAnimation({
        name: false,
        subtitle: false,
        numbers: false
      });
    }
  }, [currentPage]);

  // Animation for skill bars
  useEffect(() => {
    if (currentPage === 'about') {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const interval = duration / steps;

      const animateSkills = () => {
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setSkillLevels({
            python: Math.floor(targetSkillLevels.python * progress),
            java: Math.floor(targetSkillLevels.java * progress),
            sql: Math.floor(targetSkillLevels.sql * progress),
            javascript: Math.floor(targetSkillLevels.javascript * progress),
            cpp: Math.floor(targetSkillLevels.cpp * progress),
            html: Math.floor(targetSkillLevels.html * progress),
            matlab: Math.floor(targetSkillLevels.matlab * progress),
            css: Math.floor(targetSkillLevels.css * progress)
          });

          if (step === steps) {
            clearInterval(timer);
          }
        }, interval);
      };

      animateSkills();
    }
  }, [currentPage]);

  // Resume data
  const personalInfo = {
    name: "Chia-Chan Ho",
    email: "henryho534@gmail.com",
    phone: "(619) 381-2706",
    linkedin: "www.linkedin.com/in/chiachan-ho",
    github: "github.com/chiachan-ho",
    location: "San Diego, CA"
  };

  const education = [
    {
      institution: "University of Pennsylvania",
      location: "Philadelphia",
      degree: "Master of Science in Engineering in",
      program: "Systems Engineering",
      period: "Expected Dec 2027"
    },
    {
      institution: "University of California, San Diego",
      location: "San Diego, CA",
      degree: "Bachelor of Arts in",
      program: "International Business",
      minor: "Minor in Data Science",
      period: "Sep 2022 - Jun 2025",
      gpa: "3.85/4.0",
      honors: "Provost Honors in Fall 2022, Winter 2023, Fall 2023, Winter 2024, and Spring 2024",
      relevantCourses: "Data Structure and Algorithms, Machine Learning, Data Manipulation and Visualization, Linear Algebra"
    }
  ];

  const experiences = [
    {
      title: "LPL vs LCK Playing Style Analysis",
      location: "San Diego, CA",
      period: "Mar 2024 - June 2024",
      description: [
        "Developed predictive models using Python and ML to classify League of Legends games by league based on gameplay features."
      ],
      resumeDescription: [
        "Conducted an in-depth analysis of playing styles between the LPL and LCK leagues in League of Legends, utilized Python libraries (e.g., Pandas, NumPy, Scikit-learn) for data preprocessing, feature extraction, and model building.",
        "Developed predictive models to classify games based on league, achieving significant accuracy improvements through feature expansion and hyperparameter tuning.",
        "Published a comprehensive report detailing findings, methodologies, and insights on the project's website."
      ],
      tech: ["Python", "Pandas", "Scikit-learn"],
      image: `${process.env.PUBLIC_URL}/lol_project.png`,
      link: "https://chiachan-ho.github.io/LPL-vs-LCK/"
    },
    {
      title: "Data Science Educational Platform Development",
      location: "San Diego, CA",
      period: "Sep 2023 - Dec 2023",
      tutors: "Prof. Suraj Rampure, Prof. Janine Tiefenbruck, Prof. Rod Albuyeh",
      description: [
        "Collaborated on the development of a study platform and authored solutions for data science exam questions."
      ],
      resumeDescription: [
        "Collaborated in the development of an educational website featuring past exam questions for data science students.",
        "Streamlined content management by efficiently handling GitHub repositories, focusing on Markdown file optimization and code updates, ensuring the website's content was accurate and beneficial for student learning.",
        "Developed comprehensive solutions and explanations for past exam questions, enhancing the website's value as a study tool by providing students with clear guidance and insights for self-assessment."
      ],
      tech: ["Python", "GitHub", "Markdown"],
      image: `${process.env.PUBLIC_URL}/practice_project.png`,
      link: "https://practice.dsc10.com/"
    },
    {
      title: "BabyPandas Documentation Development",
      location: "San Diego, CA",
      period: "Apr 2024 - Jun 2024",
      tutors: "Prof. Janine Tiefenbruck",
      description: [
        "Collaborated in creating documentation for the BabyPandas Python module."
      ],
      resumeDescription: [
        "Developed the documentation for the BabyPandas Python module using Python, Markdown, and GitHub.",
        "Developed and updated content of BabyPandas Function, including planning the documentation structure, writing and updating the content, and publishing the documentation."
      ],
      tech: ["Python", "Github"],
      image: `${process.env.PUBLIC_URL}/babypandas_project.png`,
      link: "https://dsc-courses.github.io/bpd-reference/docs/documentation/Functions/Writing%20Functions"
    }
  ];

  const workExperience = [
    {
      company: "Halıcıoğlu Data Science Institute at UC San Diego",
      location: "San Diego, CA",
      title: "DSC10/DSC20 Course Instructional Assistant",
      period: "Sep 2023 - Aug 2024",
      description: [
        "Utilized Python to clarify complex concepts, foster engagement, and facilitate comprehensive learning experiences during weekly discussions and office hours.",
        "Collaborated with faculty to refine course content and assess student work, providing feedback to drive improvement.",
        "Guided students through complex data science problems, encouraging critical thinking and fostering a deeper understanding of data science principles."
      ]
    },
    {
      company: "Roshow Group",
      location: "Zhejiang, China",
      title: "Software Engineer Intern (remote)",
      period: "May 2024 - Aug 2024",
      description: [
        "Collaborated in project design and development, coding and testing, and technical documentation and project reports.",
        "Participated in multiple projects on AI and cloud computing, assisting in development and testing phases to ensure that technical solutions efficiently meet business requirements.",
        "Participated in the development of an internal generative AI platform to support text summarization and topic extraction requests for over 200 engineers, enhancing cross-functional collaboration."
      ]
    }
  ];

  const teaching = {
    title: "Course Instructional Assistant",
    company: "Halıcıoğlu Data Science Institute at UC San Diego",
    location: "San Diego, CA",
    period: "Sep 2023 - Aug 2024",
    courses: [
      {
        code: "DSC 10",
        title: "Principles of Data Science",
        description: "Introductory course covering Python programming, data manipulation, visualization, and basic statistical concepts.",
        responsibilities: [
          "Led weekly discussion sections of 30+ students, explaining foundational Python concepts and data analysis techniques",
          "Held regular office hours to provide personalized support on assignments and projects",
          "Assisted in developing and grading course materials, including homework assignments and exams"
        ]
      },
      {
        code: "DSC 20",
        title: "Programming and Basic Data Structures for Data Science",
        description: "Intermediate programming course focused on data structures, algorithms, and object-oriented programming in Python.",
        responsibilities: [
          "Guided students through complex data structure implementations and algorithmic problem-solving",
          "Provided detailed feedback on programming assignments to improve coding practices",
          "Collaborated with faculty to enhance curriculum and teaching methodologies"
        ]
      }
    ],
    highlights: [
      "Utilized Python to clarify complex concepts, foster engagement, and facilitate comprehensive learning experiences during weekly discussions and office hours.",
      "Collaborated with faculty to refine course content and assess student work, providing feedback to drive improvement.",
      "Guided students through complex data science problems, encouraging critical thinking and fostering a deeper understanding of data science principles."
    ]
  };

  const skills = {
    "Data Science & Programming": "Python with experience in data structure and libraries such as NumPy, Pandas, Scikit-learn, BeautifulSoup, and Matplotlib for effective data manipulation, cleaning, visualization, and executing a variety of hypothesis tests; Java, HTML, SQL, Tableau, MATLAB",
    "Software Familiarity": "MS Office Suite (Word, PowerPoint, Excel, Power BI)",
    "Languages": "English (language of college education), Japanese (JLPT N2 certified), Mandarin and Taiwanese (Native)"
  };

  const interests = ["Guitar", "Piano", "Listening to Music", "Video games", "Skiing", "Sports"];

  const aboutMe = {
    coverLetter: `Master's student at the University of Pennsylvania studying Systems Engineering, with a strong foundation in Data Science and International Business from my undergraduate studies at UC San Diego. I'm passionate about software development, AI, and machine learning, and I strive to apply these technologies to solve real-world engineering and commercial challenges.`,
    
    researchInterests: [
      "Machine Learning & Optimization",
      "Algorithmic System Design",
      "Scalable Data-Driven Solutions",
      "AI for Industrial Applications"
    ],
    
    careerGoals: [
      "Software Engineer in the tech industry",
      "ML or Data Engineer in commercial or research",
      "Systems Engineer in aerospace or defense",
      "Roles combining AI, software, and strategic problem-solving"
    ]
  };

  // Navigation items 
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume" },
    { label: "Teaching", id: "teaching" },
    { label: "Contact", id: "contact" }
  ];

  // SkillBar component
  const SkillBar = ({ skill, level }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  // Header component with tabs
  const Header = () => (
    <header className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold">{personalInfo.name}</div>
          
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-3 py-2 rounded-md transition-all duration-300 relative group ${
                  currentPage === item.id 
                    ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} tab-active` 
                    : `${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} tab-inactive`
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
              </button>
            ))}
            <button 
              onClick={toggleDarkMode} 
              className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <Sun size={20} className="transition-transform duration-300 transform rotate-180" /> : <Moon size={20} className="transition-transform duration-300 transform rotate-0" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-2 py-2 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => {
                navigateTo(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300 ${
                currentPage === item.id 
                  ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}` 
                  : `${darkMode ? 'text-gray-300' : 'text-gray-900'}`
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
            <button 
              onClick={toggleDarkMode} 
              className="w-full text-left px-4 py-2 flex items-center gap-2"
            >
              {darkMode ? (
                <>
                  <Sun size={18} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // Footer component
  const Footer = () => (
    <footer className={`py-6 px-6 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto max-w-5xl text-center">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );

  // Home page
  const HomePage = () => (
    <section className={`min-h-screen px-2 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto max-w-5xl pt-24 sm:pt-32 pb-8 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center mb-8 sm:mb-36">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6 ${
              textAnimation.name ? 'animate-slide-bottom' : 'opacity-0'
            }`}>
              {personalInfo.name}
            </h1>
            <h2 className={`text-base sm:text-2xl text-blue-600 dark:text-blue-400 mb-4 sm:mb-8 ${
              textAnimation.subtitle ? 'animate-slide-bottom' : 'opacity-0'
            }`}>
              Data Science & Software Systems
            </h2>
            
            <div className={`flex justify-center md:justify-start gap-2 sm:gap-3 mt-4 sm:mt-8 ${
              textAnimation.subtitle ? 'animate-slide-bottom' : 'opacity-0'
            }`}>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" 
                className={`p-2 sm:p-3 rounded-full ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all duration-300 hover:scale-110`}
                aria-label="LinkedIn">
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" 
                className={`p-2 sm:p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-800 hover:bg-gray-900'} text-white transition-all duration-300 hover:scale-110`}
                aria-label="GitHub">
                <Github size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} 
                className={`p-2 sm:p-3 rounded-full ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-all duration-300 hover:scale-110`}
                aria-label="Email">
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className={`flex justify-center order-1 md:order-2 mb-6 md:mb-0 ${
            textAnimation.name ? 'animate-slide-left' : 'opacity-0'
          }`}>
            <div className="w-24 h-24 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-500">
              <img src={`${process.env.PUBLIC_URL}/Bigger size.jpg`} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Achievement Highlights */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6 ${
          textAnimation.numbers ? 'animate-slide-bottom' : 'opacity-0'
        }`}>
          <div className={`p-3 sm:p-5 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}> 
            <div className="text-lg sm:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">{counters.projects}+</div>
            <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Projects Completed</h3>
            <p className={`text-xs sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-black'}`}>Data science and ML projects</p>
          </div>
          
          <div className={`p-3 sm:p-5 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}> 
            <div className="text-lg sm:text-3xl font-bold text-green-500 mb-1 sm:mb-2">{counters.students}+</div>
            <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Students Tutored</h3>
            <p className={`text-xs sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-black'}`}>Across multiple programming courses</p>
          </div>
          
          <div className={`p-3 sm:p-5 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}> 
            <div className="text-lg sm:text-3xl font-bold text-purple-500 mb-1 sm:mb-2">{counters.skills}+</div>
            <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Technical Skills</h3>
            <p className={`text-xs sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-black'}`}>Programming languages and tools</p>
          </div>
        </div>
        
        {/* Learn More Button */}
        <div className={`flex justify-center mt-6 sm:mt-12 mb-0 ${
          textAnimation.numbers ? 'animate-slide-bottom' : 'opacity-0'
        }`}>
          <button 
            onClick={() => navigateTo('about')} 
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            Learn More About Me <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );

  // About Me page
  const AboutPage = () => (
    <section className={`min-h-screen px-2 sm:px-6 pt-24 sm:pt-32 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto max-w-4xl pb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className={`p-6 rounded-lg mb-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-50 shadow-md'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Professional Profile</h3>
          <p className="text-lg whitespace-pre-line mb-6">
            {aboutMe.coverLetter}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50 shadow-md'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Research Interests</h3>
            <ul className="space-y-2">
              {aboutMe.researchInterests.map((interest, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-blue-500" size={16} />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50 shadow-md'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Career Goals</h3>
            <ul className="space-y-2">
              {aboutMe.careerGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-blue-500" size={16} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50 shadow-md'} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
          <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Skills Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              <SkillBar skill="Python" level={95} />
              <SkillBar skill="Java" level={80} />
              <SkillBar skill="SQL" level={70} />
              <SkillBar skill="JavaScript" level={70} />
            </div>
            <div>
              <SkillBar skill="C++" level={50} />
              <SkillBar skill="HTML" level={50} />
              <SkillBar skill="MATLAB" level={50} />
              <SkillBar skill="CSS" level={50} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => navigateTo('projects')} 
            className={`flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            View My Projects <ChevronRight size={20} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );

  // Projects page
  const ProjectsPage = () => (
    <section className={`min-h-screen px-2 sm:px-6 pt-24 sm:pt-32 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto max-w-6xl pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
                 onClick={() => window.open(exp.link, '_blank')}>
              <img src={exp.image} alt={exp.title} className="w-full h-48 sm:h-56 object-cover rounded-t-xl" />
              <div className="flex flex-col flex-1 p-4 sm:p-8">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                <p className={`text-sm sm:text-base mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description[0]}</p>
                <div className="flex-1"></div>
                <div className={`text-sm sm:text-base mb-4 sm:mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>Tech: {exp.tech.join(", ")}</div>
                <div className="w-full inline-block text-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg transition">
                  View Project
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <button 
            onClick={() => navigateTo('resume')} 
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            View My Resume <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );

  // Resume page
  const ResumePage = () => (
    <section className={`min-h-screen px-2 sm:px-6 pt-24 sm:pt-32 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto max-w-4xl pb-20">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold">My Resume</h2>
          <div className="flex gap-4 flex-wrap">
            <a href="/Working Resume.pdf" download
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
              <FileText size={18} /> Download PDF
            </a>
          </div>
        </div>
        
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50 shadow-md'}`}>
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-bold mb-2">{personalInfo.name}</h3>
            <div className="flex justify-center gap-2 flex-wrap">
              <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                {personalInfo.email}
              </a>
              <span>|</span>
              <span>{personalInfo.phone}</span>
              <span>|</span>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {personalInfo.linkedin}
              </a>
            </div>
          </div>
          
          <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
          
          {/* Education */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-bold">{edu.institution}, {edu.location}</h3>
                    <div className="text-right shrink-0">
                      <p>{edu.period}</p>
                    </div>
                  </div>
                  <p>
                    <span className="italic">{edu.degree}</span> {edu.program}
                    {edu.minor && (
                      <span>, <span className="italic">Minor in</span> {edu.minor.replace("Minor in", "")}</span>
                    )}
                    {edu.gpa && <span className="float-right">GPA: {edu.gpa}</span>}
                  </p>
                  {edu.honors && (
                    <p className="mt-1"><span className="italic">Honors:</span> {edu.honors}</p>
                  )}
                  {edu.relevantCourses && (
                    <p className="mt-1"><span className="italic">Relevant Courses:</span> {edu.relevantCourses}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
          
          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">PROJECTS & EXPERIENCE</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-bold">{exp.title}, {exp.location}</h3>
                    <div className="text-right shrink-0">
                      <p>{exp.period}</p>
                    </div>
                  </div>
                  {exp.tutors && (
                    <p className="mb-2"><span className="italic">Tutor:</span> {exp.tutors}</p>
                  )}
                  <ul className="list-disc pl-8 space-y-2">
                    {exp.resumeDescription.map((item, i) => (
                      <li key={i}>
                        {item.includes("project's website") ? (
                          <span>
                            {item.split("project's website")[0]}
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              project's website
                            </a>
                            {item.split("project's website")[1] || "."}
                          </span>
                        ) : item.includes("educational website") ? (
                          <span>
                            {item.split("educational website")[0]}
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              educational website
                            </a>
                            {item.split("educational website")[1] || "."}
                          </span>
                        ) : item.includes("documentation") && index === 2 ? (
                          <span>
                            {item.split("documentation")[0]}
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              documentation
                            </a>
                            {item.split("documentation")[1] || "."}
                          </span>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Teaching & Work Experience */}
          <div className="mb-6">
            {workExperience.map((work, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{work.company}</h3>
                  <div className="text-right shrink-0">
                    <p>{work.location}</p>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="italic">{work.title}</p>
                  <div className="text-right shrink-0">
                    <p>{work.period}</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 space-y-2">
                  {work.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
          
          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">SKILLS & INTERESTS</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li><span className="font-bold">Data Science & Programming:</span> Python (NumPy, Pandas, Scikit-learn), Java, SQL, JavaScript, CSS, HTML, C++, MATLAB</li>
              <li><span className="font-bold">Software Familiarity:</span> MS Office Suite (Word, PowerPoint, Excel, Power BI)</li>
              <li><span className="font-bold">Languages:</span> English (language of college education), Japanese (JLPT N2 certified), Mandarin and Taiwanese (Native)</li>
              <li><span className="font-bold">Interests:</span> Guitar, Piano, Listening to Music, Video games, Skiing, Sports</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => navigateTo('teaching')} 
            className={`flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}
          >
            View My Teaching Experience <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );

  // Teaching page
  const TeachingPage = () => (
    <section className={`min-h-screen px-2 sm:px-6 pt-24 sm:pt-32 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto max-w-6xl pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Teaching Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
          {/* DSC 10 Card */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Principles of Data Science (DSC 10)</h3>
            <div className={`mb-2 font-medium text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Students Tutored</div>
            <div className="text-blue-600 text-xl sm:text-2xl font-bold mb-6 sm:mb-8">1000+</div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base sm:text-lg mr-3">3</div>
              <div>
                <div className={`text-sm sm:text-base font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Academic Terms</div>
                <div className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>Fall 2023, Winter 2024, Spring 2024</div>
              </div>
            </div>
            <div className={`mt-4 font-medium text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Responsibilities</div>
            <ul className={`list-disc pl-6 mt-2 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Hosted office hours</li>
              <li>Created exams and quizzes</li>
              <li>Graded assignments and exams</li>
              <li>Resolved technical issues for students</li>
            </ul>
          </div>
          {/* DSC 20 Card */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Programming and Data Structures (DSC 20)</h3>
            <div className={`mb-2 font-medium text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Students Tutored</div>
            <div className="text-blue-600 text-xl sm:text-2xl font-bold mb-6 sm:mb-8">100+</div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base sm:text-lg mr-3">1</div>
              <div>
                <div className={`text-sm sm:text-base font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Academic Terms</div>
                <div className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>Summer 2024</div>
              </div>
            </div>
            <div className={`mt-4 font-medium text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Responsibilities</div>
            <ul className={`list-disc pl-6 mt-2 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Hosted office hours</li>
              <li>Created exams and quizzes</li>
              <li>Graded assignments and exams</li>
              <li>Resolved technical issues for students</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <button 
            onClick={() => navigateTo('contact')} 
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}
          >
            Contact Me <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );

  // Contact page
  const ContactPage = () => (
    <section className={`min-h-screen px-2 sm:px-6 pt-24 sm:pt-32 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto max-w-5xl pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Contact</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 text-center">Feel free to reach out for opportunities, collaborations, or just to connect!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* First row: Contact Info */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow flex flex-col items-start p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              <span className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className={`text-sm sm:text-lg hover:underline break-all ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{personalInfo.email}</a>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow flex flex-col items-start p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <div className="flex items-center mb-2">
              <Linkedin className="mr-2 text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              <span className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</span>
            </div>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className={`text-sm sm:text-lg hover:underline break-all ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>/{personalInfo.linkedin.replace('www.linkedin.com/in/', '')}</a>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow flex flex-col items-start p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <div className="flex items-center mb-2">
              <Github className="mr-2 text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              <span className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</span>
            </div>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className={`text-sm sm:text-lg hover:underline break-all ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>/{personalInfo.github.replace('github.com/', '')}</a>
          </div>
          {/* Second row: Open To, Job Areas, Research Areas */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow flex flex-col items-start p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <div className={`font-bold text-base sm:text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Currently Open To</div>
            <ul className={`list-disc pl-6 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Full-time positions</li>
              <li>Internship opportunities</li>
              <li>Research lab positions</li>
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow flex flex-col items-start p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <div className={`font-bold text-base sm:text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Job Areas</div>
            <ul className={`list-disc pl-6 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Software Development</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Systems Engineering</li>
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow flex flex-col items-start p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
            <div className={`font-bold text-base sm:text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Research Areas</div>
            <ul className={`list-disc pl-6 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Computer Science</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  // Render the current page based on state
  return (
    <div className={darkMode ? 'dark text-white' : 'text-gray-900'}>
      <Header />
      <div className={`page-container ${pageAnimation}`}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'resume' && <ResumePage />}
        {currentPage === 'teaching' && <TeachingPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>
      <Footer />
    </div>
  );
}
