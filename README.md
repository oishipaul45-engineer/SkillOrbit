# ✦ SkillOrbit

### Skills in Motion

> **Learn. Share. Connect. Grow together.**

SkillOrbit is a peer-to-peer skill learning platform designed to help people **discover skills, find compatible learners and teachers, exchange knowledge, and build meaningful learning connections** through one unified digital experience.

Built with a modern **HTML, CSS, JavaScript, and Firebase architecture**, SkillOrbit transforms skill discovery from a simple profile-based system into an interactive learning ecosystem.

---

## ✨ Why SkillOrbit?

People often want to learn something new but don't know **who can teach them**.

At the same time, many people already have valuable skills but don't have an easy way to **share them with others**.

**SkillOrbit connects both sides.**

Users can showcase what they can teach, specify what they want to learn, discover compatible people, send learning requests, and turn successful connections into active learning sessions.

---

## 🚀 Features

### 👤 User Authentication

Create and access a personalized SkillOrbit account using Firebase Authentication.

Users can securely:

- Create an account
- Log in
- Stay authenticated
- Access their personal dashboard
- Log out

---

### 🛠️ My Skills

Manage the skills that define your learning profile.

Users can add skills under two categories:

**Skills I Can Teach**

Skills the user already knows and can share with others.

**Skills I Want to Learn**

Skills the user wants to develop.

This creates the foundation for SkillOrbit's matching system.

---

### 🔎 Discover People

Explore other SkillOrbit users based on their skills and learning interests.

The Discover experience helps users identify people who may be able to:

- Teach something they want to learn
- Learn something they can teach
- Become a potential learning connection

The goal is simple:

> **Don't just discover people. Discover the right people to learn with.**

---

### 🎯 Skill Matching

SkillOrbit compares users' teaching and learning skills to identify compatible connections.

For example:

```text
User A
Can Teach:
JavaScript

User B
Can Teach:
Python

Wants to Learn:
JavaScript

SkillOrbit can identify the relationship:

User A
   │
   │ wants to learn Python
   ▼
User B
   │
   │ can teach Python
   ▼
MATCH

This creates opportunities for meaningful peer-to-peer learning.

📩 Learning Requests
Finding a match is only the beginning.

When a user finds someone who can teach a skill they want to learn, they can send a Request to Learn.

Each request contains:
- Learner
- Teacher
- Skill
- Request status
- Creation time
- Update time
The request can then be:

Accepted or Rejected by the teacher.

🤝 Learning Sessions
Once a teacher accepts a learning request, SkillOrbit creates an active learning session.

The complete journey becomes:

Discover
   ↓
Match
   ↓
Request
   ↓
Accept
   ↓
Session
   ↓
Learn

This turns a simple skill match into an actual learning connection.

📊 Personal Dashboard
The SkillOrbit dashboard provides a centralized overview of a user's activity.

It includes:
- Skills Shared
- Skills Learning
- Matches
- Sessions
- My Skills
- Discover People
- Quick Actions
Everything important stays accessible from one place.


🎨 Modern Interface
SkillOrbit uses a dark, futuristic interface designed around a focused learning experience.

The interface includes:
- Dark visual system
- Neon green accent language
- Modern dashboard layout
- Sidebar navigation
- Interactive cards
- Skill-focused sections
- Modal interactions
- Responsive layouts
- Clean typography
- Smooth user interactions
The interface is designed to feel like a modern digital learning workspace, rather than a traditional student portal.

🧠 Design Philosophy
SkillOrbit was designed around one simple idea:
Everyone knows something. Everyone can learn something.

Instead of treating learning as a one-way process, SkillOrbit creates a continuous cycle:

SHARE
   ↓
CONNECT
   ↓
LEARN
   ↓
GROW
   ↓
SHARE

A person can be a teacher and learner at the same time.

This creates a more collaborative model of learning where knowledge moves between people.

🔄 How SkillOrbit Works
The complete SkillOrbit experience can be represented as:

             CREATE ACCOUNT
                    ↓
              BUILD PROFILE
                    ↓
                ADD SKILLS
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
     CAN TEACH          WANT TO LEARN
          │                   │
          └─────────┬─────────┘
                    ↓
             DISCOVER PEOPLE
                    ↓
              FIND MATCHES
                    ↓
            REQUEST TO LEARN
                    ↓
             TEACHER DECIDES
                    ↓
              ┌─────┴─────┐
              ↓           ↓
           ACCEPT       REJECT
              ↓
        LEARNING SESSION
              ↓
             GROW


             🏗️ System Architecture
SkillOrbit follows a simple client-cloud architecture.


┌─────────────────────────────────────┐
│           SKILLORBIT UI             │
│                                     │
│        HTML + CSS + JavaScript      │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│       FIREBASE AUTHENTICATION       │
│                                     │
│          User Identity              │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│          CLOUD FIRESTORE            │
│                                     │
│  Users                              │
│  Skills                             │
│  Learning Requests                  │
│  Sessions                           │
└─────────────────────────────────────┘


🔥 Firebase Architecture
SkillOrbit uses Firebase as the backend infrastructure for authentication and cloud data storage.
Authentication
Firebase Authentication manages:
- Account creation
- Login
- Authentication state
- User identity
- Logout
Cloud Firestore
Firestore stores the application's user and learning data.

The primary structure is:


users/
│
└── {userId}/
    │
    ├── name
    ├── email
    ├── displayName
    │
    └── skills/
        │
        └── {skillId}
            ├── name
            ├── type
            └── createdAt


learningRequests/
│
└── {requestId}
    ├── learnerUid
    ├── learnerName
    ├── learnerEmail
    ├── teacherUid
    ├── teacherName
    ├── skillName
    ├── status
    ├── createdAt
    └── updatedAt


sessions/
│
└── {sessionId}
    ├── learnerUid
    ├── learnerName
    ├── learnerEmail
    ├── teacherUid
    ├── teacherName
    ├── skillName
    ├── status
    ├── createdAt
    └── requestId


🔐 Security
SkillOrbit uses Firebase Authentication together with Firestore Security Rules to control access to application data.

The access model follows:


User
  ↓
Firebase Authentication
  ↓
Authenticated UID
  ↓
Authorized Firestore Data


User-specific profile and skill data is protected using the authenticated user's UID.

Learning requests are restricted to the users involved in the request.

Learning sessions are restricted to their participants.
Firebase configuration values required by the client application should never be confused with private server credentials. Sensitive service-account keys and secrets should never be committed to the repository.



🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| 🌐 HTML5 | Application structure |
| 🎨 CSS3 | Styling and responsive design |
| ⚡ JavaScript | Application logic and interactions |
| 🔥 Firebase Authentication | User authentication |
| ☁️ Cloud Firestore | Cloud database |
| 🔀 Git | Version control |
| 🐙 GitHub | Source code hosting |
| 💻 Python HTTP Server | Local development |



🏗️ Project Structure

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


⚙️ Getting Started
1. Clone the repository
git clone https://github.com/oishipaul45-engineer/SkillOrbit.git

2. Navigate into the project
cd SkillOrbit

3. Start a local development server
Using Python:
python -m http.server 5500

4. Open SkillOrbit
Open:
http://localhost:5500

The application should now be available locally.

🔥 Firebase Setup
To run your own instance of SkillOrbit:
1. Create a Firebase project
Create a project through the Firebase Console.
2. Enable Authentication
Enable the authentication provider required by the application.
3. Create a Firestore database
Enable Cloud Firestore for the project.
4. Register a Web App
Add the SkillOrbit frontend as a Firebase Web App.
5. Add Firebase Configuration
Add the Firebase configuration to the application.
6. Configure Firestore Rules
Apply the required Firestore Security Rules for:
- Users
- Skills
- Learning Requests
- Sessions
7. Run the application
Start the local development server and open the application in your browser.


🧪 Testing the Main Flow
The core SkillOrbit workflow can be tested using multiple accounts.
Account A
Add:
Can Teach:
JavaScript

Wants to Learn:
Python

Account B
Add:
Can Teach:
Python

Wants to Learn:
JavaScript

Then test:
Account A
   ↓
Discover Account B
   ↓
Find Match
   ↓
Request to Learn
   ↓
Account B
   ↓
Accept Request
   ↓
Learning Session Created

🎯 Project Goals
SkillOrbit aims to become more than a simple skill directory.

Future development can expand the platform with:
- 📅 Session scheduling
- 💬 Real-time messaging
- 🎥 Video learning
- 🔔 Notifications
- ⭐ User ratings
- 🏆 Skill achievements
- 🏅 Skill verification
- 🧠 AI-powered recommendations
- 📊 Learning progress tracking
- 👥 Group learning
- 📚 Learning resources
- 📱 Progressive Web App support
- 🔔 Smart learning reminders

🌟 What Makes SkillOrbit Different?
Traditional learning platforms usually follow:

CONTENT
   ↓
STUDENT
   ↓
LEARNING

SkillOrbit focuses on:
PERSON
   ↓
SKILL
   ↓
DISCOVERY
   ↓
MATCH
   ↓
CONNECTION
   ↓
LEARNING
   ↓
GROWTH

The platform doesn't simply ask:
"What do you want to learn?"

It also asks:
"What can you teach someone else?"

That creates the possibility of a continuously moving learning ecosystem.

🧩 SkillOrbit Learning Loop
The central concept behind SkillOrbit can be represented as:

          ┌───────────────┐
          │    SHARE      │
          └───────┬───────┘
                  ↓
          ┌───────────────┐
          │   DISCOVER    │
          └───────┬───────┘
                  ↓
          ┌───────────────┐
          │     MATCH     │
          └───────┬───────┘
                  ↓
          ┌───────────────┐
          │    CONNECT    │
          └───────┬───────┘
                  ↓
          ┌───────────────┐
          │     LEARN     │
          └───────┬───────┘
                  ↓
          ┌───────────────┐
          │     GROW      │
          └───────┬───────┘
                  │
                  └──────────► SHARE


This loop represents the core philosophy of SkillOrbit:
Skills move between people.




🔮 Future Vision
SkillOrbit can evolve into a complete peer-learning ecosystem connecting:

Learners + Teachers + Skills + Communities + Sessions

The long-term vision is to create a platform where every user can:

Learn something
      ↓
Meet someone
      ↓
Exchange knowledge
      ↓
Build a connection
      ↓
Develop a skill
      ↓
Teach someone else

📌 Project Highlights
SkillOrbit demonstrates practical implementation of:
- 🌐 Frontend web development
- 🎨 Responsive UI design
- ⚡ JavaScript application logic
- 🔐 Firebase Authentication
- ☁️ Cloud Firestore
- 🛡️ Firestore Security Rules
- 👤 User profiles
- 🛠️ CRUD operations
- 🔎 User discovery
- 🎯 Skill matching
- 📩 Learning request workflows
- 🤝 Session management
- 🔄 Authentication-based data access
- 🔀 Git version control
- 🐙 GitHub repository management

👨‍💻 Developer
Oishi Paul

Engineering Student & Developer

Passionate about building interactive digital experiences, exploring modern web technologies, and solving real-world problems through technology.

GitHub
https://github.com/oishipaul45-engineer

📌 Repository
SkillOrbit — GitHub
https://github.com/oishipaul45-engineer/SkillOrbit


📄 License
This project is currently intended for educational, experimental, portfolio, and project-development purposes.

⭐ Support
If you find SkillOrbit interesting, useful, or inspiring, consider giving the repository a ⭐ on GitHub.


Your support helps the project grow.



Wants to Learn:
Python
