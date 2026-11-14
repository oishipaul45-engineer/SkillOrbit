# 🚀 SkillOrbit

<p align="center">
  <img src="assets/hero-learning.png" alt="SkillOrbit" width="850">
</p>

<h1 align="center">SkillOrbit</h1>

<p align="center">
  <strong>Skills in Motion — Learn. Share. Connect.</strong>
</p>

<p align="center">
  A peer-to-peer skill exchange platform that transforms individual knowledge into meaningful learning connections.
</p>

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</p>

<p align="center">

<a href="https://github.com/oishipaul45-engineer/SkillOrbit">
  <img src="https://img.shields.io/github/stars/oishipaul45-engineer/SkillOrbit?style=flat-square" alt="GitHub Stars">
</a>
<a href="https://github.com/oishipaul45-engineer/SkillOrbit">
  <img src="https://img.shields.io/github/forks/oishipaul45-engineer/SkillOrbit?style=flat-square" alt="GitHub Forks">
</a>
<a href="https://github.com/oishipaul45-engineer/SkillOrbit">
  <img src="https://img.shields.io/github/last-commit/oishipaul45-engineer/SkillOrbit?style=flat-square" alt="Last Commit">
</a>

</p>

---

## 🌌 The Idea Behind SkillOrbit

What if learning wasn't limited to classrooms, courses, or one-way teaching?

What if **every person could be both a learner and a teacher?**

That's the idea behind **SkillOrbit**.

SkillOrbit is a peer-to-peer learning platform where people can:

**Teach what they know → Discover people → Find skill matches → Request to learn → Connect → Grow together**

Instead of treating learning as a one-directional relationship, SkillOrbit creates an ecosystem where knowledge continuously moves between people.

> **Everyone knows something.  
> Everyone can learn something.**

---

## ✨ What Makes SkillOrbit Different?

Traditional learning platforms usually look like:

```text
Teacher

SkillOrbit is designed around:

              ┌──────────────┐
              │    LEARN     │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   CONNECT    │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │    SHARE     │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │     GROW     │
              └──────┬───────┘
                     │
                     └──────────────► LEARN

  A person can be a teacher today, a learner tomorrow, and both at the same time.

That is the core philosophy of SkillOrbit.
🎯 Core Features
🔐 Authentication
Secure user authentication powered by Firebase.

Users can create an account and access their personalized SkillOrbit experience.
👤 Personal Profiles
Every user gets a personal profile containing:
- Name
- Email
- Teaching skills
- Learning goals
- Skill activity
Profiles become the foundation of the matching system.
🛠️ Skill Management
Users can define two types of skills:
🟢 Skills I Can Teach
Things the user already knows and can share with others.
🔵 Skills I Want to Learn
Things the user wants to develop.

These two categories power the SkillOrbit matching system.
🔎 Discover People
The Discover section helps users find people based on their skills.

Users can explore:
- Other learners
- Potential teachers
- Compatible skills
- Match percentages
- Learning opportunities
The goal isn't simply to find users.

The goal is to find the right people to learn with.
🎯 Smart Skill Matching
SkillOrbit compares a user's learning interests with the teaching skills of other users.

For example:
USER A
────────────────────
Can Teach:
• JavaScript
• UI Design

Wants to Learn:
• Python
• Machine Learning


USER B
────────────────────
Can Teach:
• Python
• Machine Learning

Wants to Learn:
• JavaScript

The result:
USER A  ─────────►  USER B
Learn Python

USER B  ─────────►  USER A
Learn JavaScript

This creates the possibility of a two-way knowledge exchange.
🤝 From Match to Learning
SkillOrbit doesn't stop at showing a match.

It creates an actual learning flow.
        DISCOVER
           │
           ▼
       FIND MATCH
           │
           ▼
      CHOOSE SKILL
           │
           ▼
   REQUEST TO LEARN
           │
           ▼
   TEACHER RECEIVES
       REQUEST
           │
      ┌────┴────┐
      ▼         ▼
   ACCEPT     REJECT
      │
      ▼
LEARNING SESSION

When a teacher accepts a request, the connection becomes an active learning session.

This turns a simple profile match into a real interaction.
📩 Learning Requests
When a user finds someone who can teach a skill they want to learn, they can send a specific learning request.

Each request contains information such as:
- Learner
- Teacher
- Skill
- Request status
- Creation time
- Update time
Request states include:
PENDING
   │
   ├──────────────► REJECTED
   │
   ▼
ACCEPTED
   │
   ▼
ACTIVE SESSION

📚 Learning Sessions
Accepted learning requests become active sessions.

Users can view their ongoing learning connections through the Sessions section.

This creates a complete journey:
Discovery → Match → Request → Acceptance → Session → Learning

🖥️ Dashboard
The SkillOrbit dashboard provides a centralized view of the user's activity.
Dashboard includes:
Section	Purpose
🧠 Skills Shared	Skills the user can teach
📚 Skills Learning	Skills the user wants to learn
🎯 Matches	Compatible skill connections
🤝 Sessions	Active learning connections
🛠️ My Skills	Manage personal skills
🔎 Discover	Explore other users
⚡ Quick Actions	Fast access to important features


Everything is organized into one learning workspace.
🔥 Firebase Architecture
SkillOrbit uses Firebase as its backend infrastructure.
Firebase Authentication
Handles:
- Account creation
- Login
- User identity
- Authentication state
Cloud Firestore
Stores:
- User profiles
- Skills
- Learning requests
- Learning sessions
Simplified structure:
Firestore
│
├── users
│   │
│   └── {userId}
│       ├── name
│       ├── email
│       │
│       └── skills
│           └── {skillId}
│
├── learningRequests
│   └── {requestId}
│
└── sessions
    └── {sessionId}

🔐 Security
SkillOrbit uses Firebase Authentication together with Firestore Security Rules.

Access to user-specific information is controlled using authenticated user identities.

Learning requests and sessions are restricted to the people involved in those interactions.
⚠️ Never upload Firebase service-account private keys, passwords, or other sensitive credentials to GitHub.

🎨 User Experience
SkillOrbit is designed with a modern dark interface and a futuristic learning-focused visual identity.

The interface focuses on:
- Clear navigation
- Minimal friction
- Fast interactions
- Visual hierarchy
- Responsive layouts
- Skill-focused discovery
- Simple learning workflows
The experience is designed to make the journey from "I want to learn" to "I found someone" as simple as possible.
🧩 Technology Stack
Frontend
- HTML5
- CSS3
- JavaScript
Backend & Database
- Firebase Authentication
- Firebase Firestore
Development
- Visual Studio Code
- Git
- GitHub
- Python HTTP Server
📂 Project Structure
SkillOrbit/
│
├── assets/
│   ├── grow-together.png
│   ├── hero-learning.png
│   ├── share-skills.png
│   └── skill-match.png
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── dashboard.html
├── index.html
└── README.md

🚀 Run SkillOrbit Locally
1. Clone the repository
git clone https://github.com/oishipaul45-engineer/SkillOrbit.git

2. Open the project
cd SkillOrbit

3. Start a local server
If Python is installed:
python -m http.server 5500

4. Open the application
http://localhost:5500

⚙️ Firebase Configuration
To create your own instance of SkillOrbit:
1. Create a Firebase project.
2. Enable Firebase Authentication.
3. Enable Cloud Firestore.
4. Register a Web App.
5. Add the Firebase configuration.
6. Configure Firestore Security Rules.
7. Run SkillOrbit using a local HTTP server.
🗺️ Product Journey
SkillOrbit is more than a collection of pages.

It follows a complete user journey:
┌───────────────┐
│ CREATE ACCOUNT│
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ BUILD PROFILE │
└───────┬───────┘
        │
        ▼
┌──────────────────────┐
│ ADD TEACH / LEARN    │
│       SKILLS         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   DISCOVER PEOPLE    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    FIND MATCHES      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ REQUEST TO LEARN     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ TEACHER ACCEPTS      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  LEARNING SESSION    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       GROW           │
└──────────────────────┘

🌱 Vision
SkillOrbit is built around a simple belief:
Knowledge should move.

A developer can teach JavaScript and learn Python.

A designer can teach UI design and learn marketing.

A student can teach mathematics and learn video editing.

A musician can teach guitar and learn programming.

The possibilities are endless because people themselves become the learning ecosystem.
🌍 The Bigger Picture
The internet has made information available everywhere.

But information alone isn't enough.

People still need:

Someone to explain.
Someone to practice with.
Someone to ask questions.
Someone to learn from.
Someone to grow with.

SkillOrbit aims to bridge that gap by turning individual skills into human connections.
          KNOWLEDGE
              │
              ▼
           PEOPLE
              │
              ▼
          CONNECTION
              │
              ▼
           LEARNING
              │
              ▼
            GROWTH
              │
              └──────────────► KNOWLEDGE

🔮 Future Scope
SkillOrbit can grow into a much larger peer-learning ecosystem.
Planned possibilities
- 📅 Session scheduling
- 💬 Real-time messaging
- 🎥 Video learning sessions
- 🔔 Notifications
- ⭐ Ratings and reviews
- 🏆 Skill achievements
- 🧠 AI-powered skill recommendations
- 📊 Learning progress tracking
- 🏅 Skill verification
- 👥 Group learning
- 📍 Location-based learning
- 📱 Progressive Web App support
- 🤖 Personalized learning paths
The long-term vision is to make SkillOrbit a place where people don't just find courses.

They find people who can help them grow.
💡 Why This Project Matters
SkillOrbit addresses a simple but powerful problem:
People have skills, but often don't know who needs them.
At the same time:
People want to learn, but often don't know who can teach them.
SkillOrbit connects those two sides.
I CAN TEACH
     │
     │
     ▼
  SKILLORBIT
     ▲
     │
     │
I WANT TO LEARN

And when those needs overlap:
           ┌─────────────┐
           │   MATCH     │
           └──────┬──────┘
                  │
          ┌───────┴───────┐
          ▼               ▼
       TEACHER          LEARNER
          │               │
          └───────┬───────┘
                  ▼
              CONNECT
                  │
                  ▼
                GROW

🏗️ Project Goals
SkillOrbit aims to:
- Make peer learning accessible
- Encourage knowledge sharing
- Connect compatible learners
- Make discovering people easier
- Turn skills into meaningful connections
- Encourage two-way learning
- Create a community-driven learning environment
- Reduce the gap between knowing and teaching
- Help people learn directly from other people
🧠 The SkillOrbit Philosophy
You know something.
        ↓
Someone wants to learn it.
        ↓
You connect.
        ↓
They learn.
        ↓
You may learn something from them.
        ↓
Both grow.

That's SkillOrbit.

Not just:

Learn.

Not just:

Teach.

But:
Learn ↔ Share ↔ Connect ↔ Grow

👩‍💻 Built By
Oishi Paul
Built with curiosity, creativity, experimentation, and a simple belief that learning becomes more powerful when people learn with people.
⭐ Support the Project
If you like the idea behind SkillOrbit, consider giving the repository a ⭐ on GitHub.

It helps the project get discovered by more developers, learners, and builders.

Repository:
https://github.com/oishipaul45-engineer/SkillOrbit
<p align="center">🚀 SkillOrbit
Skills in Motion.
Learn something.
Share something.
Connect with someone.
Grow together.
</p><p align="center">
  <strong>Built for people who believe knowledge is meant to move.</strong>
</p>
                   
   │
   ▼
Student
