# ✦ SkillOrbit

### **Skills in Motion**

> **Learn. Share. Connect. Grow together.**

SkillOrbit is a **peer-to-peer skill learning platform** that connects people based on what they can teach and what they want to learn.

Instead of treating learning as a one-way process, SkillOrbit creates a **two-way knowledge exchange ecosystem** where every user can be both a learner and a teacher.

---

## 🌐 What is SkillOrbit?

Finding the right person to learn from can be difficult.

At the same time, countless people already possess valuable skills but have no simple way to share them.

**SkillOrbit bridges that gap.**

Users can:

- 👤 Create a personal learning profile
- 🛠️ Add skills they can teach
- 📚 Add skills they want to learn
- 🔎 Discover other users
- 🎯 Find compatible skill matches
- 📩 Send learning requests
- 🤝 Accept or reject requests
- 🚀 Create learning sessions
- 📊 Track their learning activity

### The idea is simple:

**Everyone knows something.  
Everyone can learn something.**

---

# ✨ Core Experience

```text
       CREATE PROFILE
              │
              ▼
         ADD SKILLS
              │
       ┌──────┴──────┐
       ▼             ▼
   CAN TEACH     WANT TO LEARN
       │             │
       └──────┬──────┘
              ▼
        DISCOVER PEOPLE
              │
              ▼
        FIND A MATCH
              │
              ▼
       REQUEST TO LEARN
              │
              ▼
      TEACHER RESPONDS
          ┌───┴───┐
          ▼       ▼
       ACCEPT   REJECT
          │
          ▼
     LEARNING SESSION
          │
          ▼
          GROW
```

SkillOrbit turns **skill discovery into real human connections**.

---

# 🚀 Features

## 👤 Authentication

Secure user authentication powered by Firebase.

Users can:

- Create an account
- Log in
- Stay authenticated
- Access their personalized dashboard
- Log out securely

---

## 🛠️ My Skills

Every user has two important skill categories.

### I Can Teach

Skills the user already knows and is willing to share.

### I Want to Learn

Skills the user wants to develop.

This creates the foundation for SkillOrbit's matching system.

---

## 🔎 Discover People

Users can explore other SkillOrbit members based on their skills and learning interests.

The Discover system helps users find people who may:

- Teach something they want to learn
- Want to learn something they can teach
- Become potential learning partners

> **Don't just discover people. Discover the right people to learn with.**

---

## 🎯 Skill Matching

SkillOrbit identifies potential connections by comparing:

**What one person can teach**

with

**What another person wants to learn.**

### Example

```text
USER A
Can Teach:
JavaScript

Wants to Learn:
Python
        │
        │
        ▼
      MATCH
        ▲
        │
USER B
Can Teach:
Python

Wants to Learn:
JavaScript
```

This creates opportunities for **peer-to-peer knowledge exchange**.

---

# 📩 Learning Requests

Once users discover a potential match, they can send a **Request to Learn**.

Each request can contain:

- Learner
- Teacher
- Skill
- Request status
- Creation time
- Update time

The teacher can then:

**Accept** → create a learning connection

**Reject** → decline the request

---

# 🤝 Learning Sessions

When a teacher accepts a learning request, SkillOrbit creates an active learning session.

### Complete journey

```text
DISCOVER
   ↓
MATCH
   ↓
REQUEST
   ↓
ACCEPT
   ↓
SESSION
   ↓
LEARN
   ↓
GROW
```

This moves the platform beyond simply showing profiles and turns a match into an actual learning connection.

---

# 📊 Personal Dashboard

The SkillOrbit dashboard brings important activity into one place.

### Dashboard includes:

- 🛠️ Skills Shared
- 📚 Skills Learning
- 🎯 Matches
- 🤝 Learning Sessions
- 🔎 Discover People
- ⚡ Quick Actions
- 👤 Personal Profile

The goal is to provide a **single workspace for the user's learning journey**.

---

# 🎨 Design System

SkillOrbit follows a modern **dark digital workspace aesthetic**.

### Visual characteristics

- 🌑 Dark interface
- 🟢 Neon green accent system
- 🧩 Card-based UI
- 📱 Responsive layouts
- 🧭 Sidebar navigation
- 🪟 Modal interactions
- ✨ Interactive elements
- 🔤 Clean typography
- 🎯 Skill-focused visual hierarchy

The interface is designed to feel more like a **modern digital product** than a traditional educational portal.

---

# 🧠 Design Philosophy

SkillOrbit is built around one principle:

> **Everyone knows something. Everyone can learn something.**

Traditional learning often looks like:

```text
CONTENT
   ↓
STUDENT
   ↓
LEARNING
```

SkillOrbit takes a different approach:

```text
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
```

A person can be both:

**Teacher + Learner**

at the same time.

---

# 🔄 The SkillOrbit Learning Loop

```text
        ┌──────────────┐
        │    SHARE     │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │   DISCOVER   │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │    MATCH     │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │   CONNECT    │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │     LEARN    │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │     GROW     │
        └──────┬───────┘
               │
               └──────────────► SHARE
```

The cycle continues as users develop skills and share them with others.

---

# 🏗️ System Architecture

SkillOrbit uses a lightweight **client + cloud backend architecture**.

```text
┌──────────────────────────────────────┐
│             SKILLORBIT               │
│                                      │
│          HTML + CSS + JS             │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│       FIREBASE AUTHENTICATION        │
│                                      │
│          User Identity               │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│          CLOUD FIRESTORE             │
│                                      │
│  Users                               │
│  Skills                              │
│  Learning Requests                   │
│  Sessions                            │
└──────────────────────────────────────┘
```

---

# 🔥 Firebase Architecture

Firebase provides the cloud infrastructure behind SkillOrbit.

## Firebase Authentication

Used for:

- Account creation
- Login
- Authentication state
- User identity
- Logout

## Cloud Firestore

Used for storing application data including:

```text
users/
│
└── {userId}/
    ├── name
    ├── email
    ├── displayName
    │
    └── skills/
        └── {skillId}
            ├── name
            ├── type
            └── createdAt
```

Learning requests:

```text
learningRequests/
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
```

Learning sessions:

```text
sessions/
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
```

---

# 🔐 Security

SkillOrbit combines:

**Firebase Authentication**

+

**Cloud Firestore Security Rules**

to control access to application data.

The basic security flow is:

```text
USER
  ↓
FIREBASE AUTHENTICATION
  ↓
AUTHENTICATED UID
  ↓
AUTHORIZED FIRESTORE DATA
```

User-specific data is protected using the authenticated user's UID.

Learning requests and sessions are restricted according to the users involved.

> Never commit private Firebase service-account credentials or other sensitive secrets to the repository.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| 🌐 **HTML5** | Application structure |
| 🎨 **CSS3** | Styling & responsive interface |
| ⚡ **JavaScript** | Application logic & interactions |
| 🔥 **Firebase Authentication** | User authentication |
| ☁️ **Cloud Firestore** | Cloud database |
| 🔐 **Firestore Rules** | Data access control |
| 🔀 **Git** | Version control |
| 🐙 **GitHub** | Source code hosting |
| 💻 **Python HTTP Server** | Local development |

---

# 📁 Project Structure

```text
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
```

---

# ⚙️ Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/oishipaul45-engineer/SkillOrbit.git
```

## 2. Enter the project directory

```bash
cd SkillOrbit
```

## 3. Start a local server

Using Python:

```bash
python -m http.server 5500
```

## 4. Open the application

Visit:

```text
http://localhost:5500
```

---

# 🔥 Firebase Setup

To run your own SkillOrbit instance:

### Step 1 — Create a Firebase Project

Create a project in Firebase.

### Step 2 — Enable Authentication

Enable the authentication provider required by the application.

### Step 3 — Create Firestore

Create a Cloud Firestore database.

### Step 4 — Register the Web App

Register SkillOrbit as a Firebase Web App.

### Step 5 — Add Firebase Configuration

Add your Firebase configuration to the project.

### Step 6 — Configure Firestore Rules

Apply appropriate rules for:

- Users
- Skills
- Learning Requests
- Sessions

### Step 7 — Run SkillOrbit

Start the local development server and open the application.

---

# 🧪 Testing the Core Workflow

The main learning flow can be tested using two accounts.

### Account A

```text
Can Teach:
JavaScript

Wants to Learn:
Python
```

### Account B

```text
Can Teach:
Python

Wants to Learn:
JavaScript
```

Then test:

```text
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
```

This demonstrates the complete SkillOrbit learning cycle.

---

# 📌 Project Highlights

SkillOrbit demonstrates practical implementation of:

- 🌐 Frontend Web Development
- 🎨 Responsive UI Design
- ⚡ JavaScript Application Logic
- 🔥 Firebase Authentication
- ☁️ Cloud Firestore
- 🔐 Firestore Security Rules
- 👤 User Profiles
- 🛠️ CRUD Operations
- 🔎 User Discovery
- 🎯 Skill Matching
- 📩 Learning Request Workflow
- 🤝 Session Management
- 🔄 Authentication-Based Data Access
- 🔀 Git Version Control
- 🐙 GitHub Project Management

---

# 🌟 What Makes SkillOrbit Different?

SkillOrbit is not simply a platform that asks:

> **"What do you want to learn?"**

It also asks:

> **"What can you teach someone else?"**

That changes the learning model from a one-way relationship into a **knowledge exchange network**.

```text
        TRADITIONAL MODEL

       CONTENT
          ↓
       STUDENT
          ↓
       LEARNING
```

```text
          SKILLORBIT

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
```

---

# 🔮 Future Roadmap

SkillOrbit has the potential to evolve into a larger peer-learning ecosystem.

### Planned possibilities

- 📅 Session scheduling
- 💬 Real-time messaging
- 🎥 Video learning
- 🔔 Notifications
- ⭐ User ratings
- 🏆 Skill achievements
- 🏅 Skill verification
- 🧠 Intelligent recommendations
- 📊 Learning progress tracking
- 👥 Group learning
- 📚 Learning resources
- 📱 Progressive Web App support
- ⏰ Smart learning reminders

---

# 🚀 Future Vision

The long-term vision for SkillOrbit is to connect:

```text
LEARNERS
    +
TEACHERS
    +
SKILLS
    +
COMMUNITIES
    +
SESSIONS
```

into one collaborative ecosystem.

The ideal SkillOrbit journey is:

```text
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
```

And the cycle starts again.

---

# 👨‍💻 Developer

### **Oishi Paul**

Engineering Student & Developer

Passionate about building interactive digital experiences, exploring modern web technologies, and solving real-world problems through technology.

**GitHub:**  
https://github.com/oishipaul45-engineer

---

# 📂 Repository

**SkillOrbit — Skills in Motion**

https://github.com/oishipaul45-engineer/SkillOrbit

---

# ⭐ Support the Project

If you find SkillOrbit interesting, useful, or inspiring, consider giving the repository a ⭐.

Every star helps the project gain visibility and motivates further development.

---

<div align="center">

### ✦ SkillOrbit

**Learn. Share. Connect. Grow together.**

Made with ❤️ by **Oishi Paul**

</div>
