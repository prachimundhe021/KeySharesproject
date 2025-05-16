# 🏠 KeyShares

**KeyShares** is a full-stack web application designed to streamline the process of finding, listing, and managing rental rooms. It supports both sellers and users with separate interfaces and integrates powerful features to make room sharing and renting seamless.

## 📁 Project Structure

KeySharesproject/  
├── KeyShares Frontend/   → Angular frontend  
└── KeyShares_Backend/    → Spring Boot backend  

---

## 🚀 Features

### 👤 User Dashboard:
✅ **Easy Login & Signup:** Securely register, log in, and manage your account.
✅ **User Roles:** Choose to be a Room Lister (Admin) or a Room Seeker (Buyer).
✅ **List a Room (Room Lister):** A user can add a room for rent, but only one listing is allowed until they move out.
✅ **Find a Room (Room Seeker):** Explore available rental spaces listed by other users.
✅ **Room Details:** View complete information about the room and its lister before making a decision.
✅ **Find a Roommate:** Connect with people looking for shared accommodation.
✅ **Search by Location:** Filter rooms based on location.
✅ **Manage Listings:** Room Listers can update, edit, or remove their own room listing.

---

## 🧱 Tech Stack

### 🖥️ Frontend (Angular)
- Angular 17+
- TypeScript
- HTML, CSS

### 🌐 Backend (Spring Boot)
- Java 17
- Spring Web, Spring Data JPA
- MySQL (or other relational DB)

---

## ⚙️ How to Run the Project

### Prerequisites
- Node.js & Angular CLI installed
- Java 17+ installed
- MySQL or any other configured DB
- Maven installed (optional, for building backend)

---

### 1️⃣ Frontend Setup

Navigate to the frontend folder and run:

```bash
cd "KeyShares Frontend"
npm install
ng serve
Runs the app at: http://localhost:4200/

2️⃣ Backend Setup:
cd KeyShares_Backend
./mvnw spring-boot:run
Runs the backend server on: http://localhost:8080/ 

🙋‍♀️ Author
Prachi Mundhe
👩‍💻I’m passionate about building clean, efficient, and user-friendly full-stack web applications. 👩‍💻

