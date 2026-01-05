const projects = [
  {
    name: "TutorsTap – Mentorship Platform",
    imageName: "assets/tutorstap_mentoring.png",
    description: "A full-stack mentorship platform connecting learners with industry tutors. Built features for user onboarding, tutor discovery, availability-based booking, session management, payments using a credit system, direct messaging, and post-session ratings. Integrated Cal.com for scheduling and video sessions, and deployed backend services on AWS with monitoring and logging in place. Designed to support real users with an emphasis on reliability, scalability, and clear user flows.",
    link: "https://www.tutorstap.com/tutor",
    techStack: ["React", "Node.js", "MongoDB", "AWS EC2", "AWS Lambda", "AWS CloudWatch", "Tailwind CSS"]
  },
  {
    name: "TutorsTap – Community Module",
    imageName: "assets/tutorstap_community.png",
    description: "An interactive discussion platform within TutorsTap that allows learners and tutors to create posts, comment, vote, and report content. Implemented event-driven moderation logic to process reports, flag content, and notify admins asynchronously. Focused on scalable data models, predictable state updates, and moderation workflows.",
    link: "https://www.tutorstap.com/community",
    techStack: ["React", "Node.js", "MongoDB", "AWS Lambda"]
  },
  {
    name: "TutorsTap – Admin Panel",
    imageName: "assets/tutorstap_admin.png",
    description: "An internal admin dashboard for managing users, tutors, community reports, and platform activity. Built role-based access controls and tooling to support moderation, content review, and operational oversight.",
    link: "https://admin.tutorstap.com/",
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "TutorsTap – e-Institute",
    imageName: "assets/tutorstap_e-institute.png",
    description: "An extension of the TutorsTap platform focused on structured learning and educational content. Designed to support course-style experiences alongside live mentorship, with an emphasis on scalable frontend architecture and reusable components.",
    link: "https://einstitute.tutorstap.com/",
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "WeVote WebApp",
    imageName: "assets/wevote.png",
    description: "Frontend contributions to an open-source civic engagement platform. Implemented UI improvements, accessibility fixes, custom React components, and resolved state management bugs in a large production codebase.",
    link: "https://wevote.us/",
    techStack: ["React", "JavaScript", "Material UI", "HTML", "CSS"]
  },
  {
    name: "WeVote Server",
    imageName: "assets/wevote.png",
    description: "Backend contributions to the WeVote platform, supporting API debugging and data flow fixes. Worked within an established open-source backend architecture and collaborated with maintainers through PR-based workflows.",
    link: "https://team.wevote.org/",
    techStack: ["Django", "Python", "PostgreSQL"]
  },
  {
    name: "FreeCodeCamp – Open Source Contributions",
    imageName: "assets/freeCodeCamp.png",
    description: "Contributed to FreeCodeCamp’s open-source codebase by fixing bugs, improving documentation, and collaborating with maintainers through pull requests and issue discussions.",
    link: "https://www.freecodecamp.org/",
    techStack: ["TypeScript", "JavaScript", "React"]
  },
  {
    name: "Sales Prediction",
    imageName: "assets/walmart_tableau.png",
    description: "A data-driven project focused on predicting sales trends using historical datasets. Built machine learning models to analyze patterns, evaluate performance, and generate forecasts to support data-informed decision making.",
    link: "https://github.com/Almee98/Walmart-Sales-Prediction",
    techStack: ["Python", "Pandas", "Scikit-learn"]
  }
];

export default projects;