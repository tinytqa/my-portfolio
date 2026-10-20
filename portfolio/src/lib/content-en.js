// English text for the portfolio. Only text lives here — links, images, numbers and
// other non-text fields are inherited from the Vietnamese source in constants.js.
// Objects merge by key and arrays of objects merge by index (see mergeContent in i18n.js),
// so each entry below must stay in the same order as its Vietnamese counterpart.

export const EN = {
  PERSONAL_INFO: {
    location: "Cau Giay, Hanoi",
  },

  HIGHLIGHTS: [
    { value: "1+ yr", label: "BA cum QA/Tester internships" },
    { label: "Companies · 4 real projects" },
    { label: "GPA · CMC University" },
    { label: "Google AI Riser 2026" },
  ],

  NAV_LINKS: [
    { label: "Experience" },
    { label: "Skills" },
    { label: "Projects" },
    { label: "More" },
    { label: "Contact" },
  ],

  EXPERIENCES: [
    {
      role: "Business Analyst cum Tester Intern",
      note: "Onsite at BIDV bank",
      projects: [
        {
          name: "Smart eForm System – BIDV",
          domain: "Banking",
          bullets: [
            { text: "Worked onsite at the bank, communicating directly with the client to clarify requirements throughout development." },
            { text: "Received client change requests and updated the RSD accordingly, using AI tools to speed up documentation." },
            { text: "Explained requirements in detail to developers and answered their questions, acting as the bridge between client and dev team." },
            { tag: "Testing", text: "Wrote test cases based on the RSD and executed functional testing; reported bugs for developers to fix and re-tested the fixes." },
            { text: "Tested APIs to verify input/output data and business logic against requirements." },
          ],
          learnings: [
            {
              title: "Handling change requests: understand the purpose before agreeing to change",
              detail:
                "Working onsite at a bank, I realised that a change request that sounds small can ripple through documents, test cases and the dev schedule. So instead of passing requests on word for word, I go through four steps:",
              steps: [
                "Ask about the business purpose behind the change: what problem is the client trying to solve, and for whom.",
                "Based on that purpose, suggest a simpler, more convenient option if there is one — often it reaches the same goal with fewer changes.",
                "Check feasibility, effort and impact on existing work with the developers before promising anything to the client.",
                "Only confirm once the scope is clear, then update the RSD and related test cases so everyone works from the same version.",
              ],
              outcome:
                "This keeps me from committing to things the team can't deliver, reduces rework for developers, and earns the client's trust because they get advice, not just a ticket.",
            },
          ],
        },
      ],
    },
    {
      role: "Business Analyst cum QA Intern",
      company: "zen8labs Vietnam",
      learnings: [
        {
          title: "Using AI in BA work — faster, but never on autopilot",
          detail: "At zen8labs I was trained to bring AI into the documentation process in a controlled way:",
          steps: [
            "Give the AI enough context: goals, agreed requirements and the standard document template.",
            "Use AI to draft FRDs, SRSs and user guides and to standardise document structure.",
            "Review every section myself against the client's requirements and the real business process before sending it out.",
          ],
          outcome:
            "AI shortens drafting time, but accuracy remains the BA's responsibility. I carried this approach over to the BIDV project when updating the RSD.",
        },
      ],
      training:
        "Completed BA training based on the IIBA standard (BABOK® Guide) and PMI's ITTO framework; practised on an Applicant Tracking System (ATS) project with an Elicitation Plan, Communication Plan, RACI Matrix, Traceability Matrix and BPMN models with gap analysis.",
      projects: [
        {
          name: "Code Review & AI Model Usage Analysis System – VTNet (Viettel)",
          domain: "Enterprise software",
          bullets: [
            { text: "Gathered and analysed requirements; authored the full document set: FRD, SRS, effort estimation sheet and user guide." },
            { text: "Joined weekly meetings with the client and project team to update progress, clarify features and feedback, and add new requirements to the documents." },
            { text: "Wrote detailed test cases and ran system testing before handover." },
            { tag: "Database", text: "Used SQL queries to reconcile data and verify its accuracy and integrity." },
          ],
          learnings: [
            {
              title: "Write documents the client understands on the first read",
              detail:
                "Before sending an FRD/SRS, I re-read it from the client's point of view — someone who doesn't sit with the team and doesn't share our unspoken assumptions:",
              steps: [
                "Be clear and specific: every function states who does it, when, under what conditions and with what result — no sentence can be read two ways.",
                "Put myself in the client's shoes to find ambiguity: undefined terms, unmentioned exceptions, numbers without units.",
                "Keep it short and dense: prefer tables, bullet points and step-by-step flows over long paragraphs.",
              ],
              outcome:
                "The client understands it correctly the first time without asking again and again — weekly meetings go into confirming requirements instead of re-explaining documents.",
            },
            {
              title: "Understand the business flow thoroughly before writing documents and test cases",
              detail:
                "Documents and test cases are only accurate when I know how the system works end to end: which steps the data goes through, who acts at each step, and what happens on exceptions. When something is unclear, I keep asking until I can draw the flow, and only then start writing — so test cases follow the real business process and catch defects at the hand-offs between steps.",
            },
            {
              title: "Documentation is alive and needs controlled updates",
              detail:
                "Requirements changed after every weekly client meeting. I learned to capture feedback, update the FRD/SRS right after each meeting and keep the documents in line with what was agreed, instead of writing them once and leaving them.",
            },
          ],
        },
        {
          name: "Warehouse Management System – PI Pharma",
          domain: "Warehouse management",
          bullets: [
            { tag: "Testing", text: "Designed permission-based test cases covering inbound/outbound receipts, internal transfers, data import and inventory grouping." },
            { tag: "Testing", text: "Focused on complex business flows and exceptions; detected critical logic defects early." },
            { tag: "Database", text: "Used SQL queries to reconcile stock data and verify its accuracy and integrity." },
          ],
          learnings: [
            {
              title: "Serious defects usually live in business flows, not in the UI",
              detail:
                "For a warehouse system with many roles, I switched to designing test cases per user role and per inbound/outbound/transfer flow, and reconciled data with SQL instead of only checking what appeared on screen.",
            },
          ],
        },
      ],
    },
    {
      role: "Business Analyst Intern",
      note: "Tri Nghia Trading Services and Technology Co., Ltd.",
      projects: [
        {
          name: "AI Tire Classification System – automotive client in Singapore",
          domain: "AI · International client",
          bullets: [
            { tag: "Elicitation", text: "Planned and scripted requirements meetings and joined them directly with the Singaporean client." },
            { tag: "Communication", text: "Explained AI/ML concepts in business language, helping the client picture how the system works." },
            { tag: "Docs", text: "Supported writing the BRD and SRS; explained client requirements to developers and answered questions about business flows." },
          ],
          learnings: [
            {
              title: "Clients don't need to understand AI — they need to understand how it helps them",
              detail:
                "Working with a Singaporean client, I learned to explain the system through business examples rather than technical terms, and to always prepare a question script before each meeting so no requirement slips through.",
            },
          ],
          skills: ["Elicitation", "Meeting scripts", "BRD", "SRS", "English"],
        },
      ],
    },
  ],

  TEACHING: {
    role: "Grammar & IELTS Teacher",
    period: "05/2023 – present",
    intro:
      "I started teaching at the end of 12th grade and have continued ever since. I design my own lesson plans and learning paths for each class, teaching both groups and 1-on-1 for school students, university students and working adults.",
    stats: [
      { value: "3+ yrs", label: "Teaching continuously" },
      { label: "Students taught" },
      { label: "IELTS classes taught" },
      { value: "Group & 1-1", label: "Teaching formats" },
    ],
    courses: [
      { name: "Foundation Grammar", audience: "Students in grades 5 – 12", detail: "Builds a solid grammar foundation, structured by grade level." },
      {
        name: "High-school & University Entrance Prep",
        audience: "Final-year students",
        detail: "Focused revision following the exam structure, with question-type practice and test strategies.",
      },
      { audience: "School students, university students, working adults", detail: "A path from the basics to the target band, covering all 4 skills." },
    ],
    transferable: [
      { teaching: "Understanding each student's level and goals", work: "Elicitation: uncovering what the client really needs" },
      { teaching: "Explaining complex grammar with simple examples", work: "Translating requirements for developers and non-technical clients" },
      { teaching: "Designing lesson plans and learning paths in stages", work: "Planning and writing well-structured documents" },
      { teaching: "Marking work, pointing out mistakes and their root causes", work: "Finding defects and writing bug reports with root causes" },
      { teaching: "Teaching many audiences, from grade 5 to working adults", work: "Working with many different stakeholders" },
      { teaching: "Tracking progress and adjusting my teaching when needed", work: "Embracing change requests and updating promptly" },
    ],
  },

  EDUCATION: {
    school: "CMC University",
    degree: "Bachelor of Information Technology",
    period: "10/2023 – present",
    duration: "3 years",
    note: "Programme completed, awaiting degree",
    whyTitle: "Why I chose CMC",
    why: [
      { title: "100% scholarship", text: "Awarded a full-tuition scholarship for all 3 years of study." },
      { title: "Finished in 3 years", text: "A condensed 3-year programme, leaving me time to intern and gain real work experience early." },
    ],
    achievements: [
      { title: "Excellent Student", detail: "Awarded across semesters" },
      { title: "Consolation Prize", detail: "University-level Student Scientific Research Competition" },
    ],
    keyCourses: [
      { name: "Software Engineering" },
      { name: "Software Testing" },
      { name: "Systems Analysis & Design" },
      { name: "Software Requirements" },
      { name: "IT Project Management" },
      { name: "Graduation Thesis" },
    ],
  },

  CERTIFICATIONS: [{ name: "Top 50 Projects – AI Riser Vietnam 2026" }],

  CAPABILITIES: [
    {
      title: "From needs to clear requirements",
      summary:
        "I work directly with clients to understand the real problem, then turn it into documentation that both developers and testers can use.",
      skills: [
        { name: "Eliciting and clarifying requirements directly with clients", evidence: ["BIDV (onsite)", "Viettel", "Singapore client"] },
        { name: "Writing BRD / SRS / FRD / RSD and user guides" },
        { name: "Handling change requests and updating documents promptly" },
        { name: "Effort estimation" },
        { name: "Bridging client and dev team, answering business questions" },
        { evidence: ["BABOK® training"] },
      ],
    },
    {
      title: "Making sure the product works as required",
      summary: "Requirement-based testing focused on complex business flows, permissions and edge cases.",
      skills: [
        { name: "Designing test cases from requirement documents (RSD)" },
        { name: "Permission-based test cases, complex flows & edge cases" },
        { name: "Functional & system testing, bug reporting, re-testing" },
        { name: "API testing: input/output data and business logic" },
        { name: "Data reconciliation with SQL" },
        { name: "E2E automation & performance testing", evidence: ["Self-taught: Cypress, JMeter, JUnit"] },
      ],
    },
  ],

  SUPPORT_SKILLS: [
    { title: "English", detail: "IELTS 7.0 · Ran requirements meetings directly with a Singaporean client." },
    { title: "Communication & explanation", detail: "Explaining AI/ML in business language to clients; 3+ years teaching English." },
    { title: "Process", detail: "Agile/Scrum, SDLC, User Stories & Acceptance Criteria." },
  ],

  AI_REVIEW: {
    eyebrow: "Working with AI",
    title: "Use AI to move fast, review it yourself to get it right",
    intro:
      "I use AI every day to draft RSDs, FRDs and SRSs on my internship projects, and I built a whole AI product. What I've distilled: AI is great at producing drafts, but responsibility for accuracy stays with the person using it.",
    workflow: [
      { step: "Give the right context", detail: "Goals, agreed requirements, templates and constraints. Poor output usually starts with incomplete input." },
      { step: "Let AI draft", detail: "AI handles structure and wording; business decisions stay with me." },
      { step: "Review it like a test", detail: "Read the output looking for defects, using the checklist alongside." },
      { step: "Own the final version", detail: "Fix, complete and flag anything that needs confirming with the client." },
    ],
    checks: [
      { title: "Is it traceable?", detail: "Every requirement AI writes must trace back to something the client said or a source document. If it doesn't, the AI made it up." },
      { title: "Is it complete?", detail: "AI tends to write only the happy path. I check exceptions, permissions and edge cases — where defects hide most often." },
      { title: "Is it consistent?", detail: "Terms, field names and numbers must match across sections and with previous document versions." },
      { title: "Is it testable?", detail: "Vague lines like “the system handles it appropriately” must become specific, measurable conditions." },
      { title: "Does it fit the context?", detail: "AI leans on generic knowledge. I check it against the client's real business process and industry specifics." },
      { title: "Is it safe?", detail: "No sensitive client data goes into AI tools without permission." },
    ],
    principle:
      "I treat AI as a colleague who works very fast but needs reviewing — and reviewing AI output is testing, just with a document as the system under test.",
  },

  BA_TRAINING: {
    org: "zen8labs Vietnam",
    practice: "Simulated case: Applicant Tracking System (ATS)",
    case: {
      name: "Applicant Tracking System (ATS)",
      context:
        "A company recruits entirely by hand: CVs arrive by email, 3 HR staff save them to their own folders and forward them to department heads over Zalo, with no standard screening criteria and no deadlines. A single opening can take weeks to reach an interview.",
      summary:
        "My task was to analyse the current process and prepare for a project to build an ATS. I went through a full BA cycle: finding the root cause, recommending options, assigning stakeholder roles, eliciting requirements and tracing them to test cases.",
      numbers: [
        { label: "elicitation sessions" },
        { label: "raw notes → findings" },
        { label: "decisions agreed" },
        { label: "Business Needs → Requirements" },
      ],
      steps: [
        {
          phase: "Needs assessment",
          title: "Find the root cause",
          did: "Wrote a Business Need Statement, asked 5 Whys and used Pareto to separate symptoms from causes.",
          result: "The root cause wasn't “HR is slow” but the lack of a central data system and of a standard way for the parties to coordinate.",
        },
        {
          phase: "Needs assessment",
          title: "Verify assumptions, map the as-is process",
          did: "Kept an Assumptions Log, drew the as-is BPMN the way people actually work and ran a gap analysis.",
          result: "The assumption that “HR decides whether a CV fits” was rejected: HR had to wait for department heads and there were no standard criteria.",
        },
        {
          phase: "Needs assessment",
          title: "Compare options",
          did: "Scored options against weighted criteria, with ROI, payback period and a risk matrix.",
          result: "A recommended option plus a backup in case the budget is cut.",
        },
        {
          phase: "Planning",
          title: "Map the stakeholders",
          did: "Built a Stakeholder Register, RACI Matrix and Communication Plan based on power and interest.",
          result: "HR was placed in Manage Closely: involved weekly and co-designing the system.",
        },
        {
          phase: "Elicitation",
          title: "Elicit and confirm requirements",
          did: "Planned 6 sessions, from the as-is interview to the UAT walkthrough; tagged notes F/A/I/D/C and sent minutes within 48h for stakeholder sign-off.",
          result: "Consolidated 20 raw notes into 15 findings, 3 decisions and 3 open points, each with an owner.",
        },
        {
          phase: "Information management",
          title: "Trace the requirements",
          did: "Built a Traceability Matrix linking each requirement to a business need and on to test cases.",
          result: "3 Business Needs → 11 Requirements → Test Cases.",
        },
      ],
    },
    learnings: [
      {
        phase: "Needs assessment",
        title: "Understand the problem before thinking about solutions",
        detail:
          "“We need a new system” usually comes up before anyone understands the current process. I learned to state the problem as one Problem + Goal + Metric sentence with a deadline, then keep asking “why” until I reach the root cause instead of treating symptoms.",
      },
      {
        phase: "Needs assessment",
        title: "Every conclusion needs evidence",
        detail:
          "I separate Facts from Assumptions and Constraints, and every assumption needs a way to be verified. The as-is process must be drawn the way people actually work, because reality often drifts from the SOP.",
      },
      {
        phase: "Needs assessment",
        title: "Recommend so others can decide",
        detail:
          "Offering a single option leaves the sponsor feeling they have no choice. I learned to compare options using weighted criteria, with ROI, payback period and risks, so leadership has a basis for approval.",
      },
      {
        phase: "Planning",
        title: "Work with the right people, the right way, at the right time",
        detail:
          "Correct analysis can still be rejected if the decision-maker wasn't involved from the start. I learned to map stakeholders by power and interest, and to understand why they might resist before designing a solution.",
      },
      {
        phase: "Elicitation",
        title: "A good meeting is decided before it starts",
        detail:
          "One goal per session, a committed output, a prepared question guide and pre-reading under 30 minutes. Solution questions go to the parking lot so the meeting stays focused.",
      },
      {
        phase: "Elicitation",
        title: "Silence doesn't mean agreement",
        detail:
          "Notes are tagged Fact / Assumption / Issue / Decision / Constraint during the session, minutes go out within 48h, and stakeholders must choose Agree, Comment or Reject. Only the approved version becomes the baseline.",
      },
      {
        phase: "Information management",
        title: "Every requirement must trace back to a need",
        detail:
          "Each requirement links to a business need, and each test case to a requirement. A requirement that traces to nothing is a sign of scope creep. This is also where my BA and Tester roles meet.",
      },
    ],
  },

  FEATURED_PROJECT: {
    award: "Top 50 Projects · Google AI Riser Vietnam 2026",
    tagline: "A personalised IELTS practice platform with AI grading for Writing & Speaking based on band descriptors.",
    problem:
      "After 3 years of teaching, I noticed IELTS learners rarely get detailed feedback on their writing, keep repeating the same mistakes and lack a study path that fits their level.",
    journey: [
      { step: "Diagnose", detail: "Assess the current band for each skill" },
      { step: "Plan", detail: "AI builds a study plan towards the target band" },
      { step: "Practise", detail: "Reading/Listening tests, Writing & Speaking grading" },
      { step: "Error notebook", detail: "Mistakes are recorded and tagged by type" },
      { step: "Re-test", detail: "AI generates review tests from those mistakes" },
    ],
    features: [
      "AI Writing grading on 4 band-descriptor criteria",
      "AI Speaking grading from recordings",
      "Reading & Listening test bank",
      "Idea brainstorming, vocabulary notebook & quizzes",
      "Gamification: coins, leaderboard, rewards",
      "Google Workspace & Calendar integration",
    ],
    proves: [
      {
        title: "Starting from real user pain",
        detail: "The problem came from teaching 40 students directly, not from the technology. I understood the users first, then chose the features.",
      },
      {
        title: "Turning needs into a complete product flow",
        detail:
          "I designed a connected 5-step journey from diagnosis to re-testing, where every feature answers a specific need instead of being a loose collection of functions.",
      },
      {
        title: "Making business rules explicit",
        detail:
          "Grading rules follow the official band descriptors and the Listening score conversion table, so the AI grades against clear criteria rather than gut feeling.",
      },
      {
        title: "A defect → re-test mindset",
        detail:
          "The error notebook works like a bug tracker: mistakes are logged, tagged by type, then turned into re-tests — just like logging a bug and re-testing it.",
      },
      {
        title: "Never fully trusting AI output",
        detail:
          "AI grading is only worth something if it sticks to the criteria. This project built my habit of checking AI output against a standard — a core skill when testing AI systems.",
      },
      {
        role: "Recognition",
        title: "Assessed by independent judges",
        detail:
          "Reaching the national Top 50 shows I can present a problem, its value and a solution convincingly to outsiders — what a BA does with stakeholders every day.",
      },
    ],
    certificate: {
      caption: "Top 50 certificate · Google for Developers · 10/2026",
    },
  },

  AUTOMATION_LEARNING: {
    status: "Currently learning",
    title: "Automation Testing",
    body: "Alongside manual testing, I'm teaching myself automation testing through a Udemy course: writing test scripts so regression runs faster and more reliably after every change.",
    soonTitle: "Automation test projects",
    soonBody: "Projects applying what I learn in the course will be added soon.",
  },

  PROJECT_CATEGORIES: ["Testing", "AI", "Web app"],

  PROJECTS: [
    {
      category: "Testing",
      purpose: "Build testing skills systematically: one technique per week, from unit tests through automated E2E to performance testing.",
      summary: "A weekly series of testing exercises, from unit tests to E2E and performance testing.",
      highlights: [
        "JUnit 5 unit tests covering Normal, Boundary and Exception cases",
        "Cypress E2E on SauceDemo: login, cart, sorting, checkout",
        "JMeter performance testing of vnexpress.net with 3 load scenarios",
      ],
    },
    {
      purpose:
        "A personal idea from real-world observation: in every hiring round, HR reads hundreds of CVs in all kinds of formats by hand — slow, and easy to miss good candidates. I wanted to automate the initial screening so HR can focus on evaluation and interviews.",
      summary: "A tool that reads CVs, analyses the JD and ranks candidates by fit, with a chatbot for quick questions about profiles.",
      highlights: [
        "Extracts CVs (PDF/Word) and uses Gemini to analyse JD requirements",
        "3-stage filtering BM25 → SBERT → Cohere rerank with skill weighting",
        "RAG chatbot for profile Q&A; exports standardised CVs to Word",
      ],
    },
    {
      purpose: "Team course project: build a complete sales management system, split into modules and coordinated as a team like a real project.",
      summary: "A sales management system covering products, orders, invoices and a sales-assistant chatbot.",
      highlights: ["Developed the order creation and management module", "Exported invoices to Word from a template", "Integrated the chatbot and deployed to staging"],
    },
    {
      purpose: "A personal project to learn AI Computer Vision: applying what I studied to a hands-on problem, from training the model to deploying it as a web app.",
      summary: "A ResNet50 model that recognises facial emotions, running on desktop and as a Gradio web app (Hugging Face Spaces).",
    },
    {
      purpose: "Web Programming course project: a school management system with a full API, database and user interface.",
      summary: "ASP.NET Web API, SQL Server database and web front end, built automatically with Jenkins.",
    },
    {
      purpose: "Web Programming course project: an online English learning platform for students and instructors.",
      summary: "Includes courses, lessons, quizzes, an instructor area and payments. I helped fix bugs and finish the search feature.",
    },
  ],
};

// Album names for the photo gallery (ids come from the folder names under /image)
export const EN_ALBUM_LABELS = {
  me: "About me",
  badminton: "Badminton",
  running: "Running",
  trekking: "Trekking",
};
