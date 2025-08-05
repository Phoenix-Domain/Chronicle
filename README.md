# Client Booking Dashboard 🗓️

A simple, responsive React application that allows small businesses (like salons, tutors, coaches, etc.) to manage client appointments efficiently.

Built with **React**, **Tailwind CSS**, and **LocalStorage** for fast, clean, and fully client-side management.

---

## ✨ Features

- Add new clients with details (name, phone, service, status)
- View a list of all clients
- Edit or delete existing clients
- Filter by booking status (optional enhancement)
- Data persists in localStorage (no backend needed)
- Clean, responsive UI with Tailwind CSS

---

## 🔧 Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📸 Demo

Live demo: [https://your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/client-booking-dashboard.git
cd client-booking-dashboard
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the app locally
bash
Copy
Edit
npm run dev
📁 Project Structure
css
Copy
Edit
src/
├── components/
│   ├── ClientForm.jsx
│   ├── ClientList.jsx
│   └── ClientCard.jsx
├── utils/
│   └── localStorage.js
├── App.jsx
├── index.css
└── main.jsx
🧠 What I Learned
Creating and managing dynamic lists with React

Handling controlled form inputs and validation

Using useEffect + localStorage for persistent state

Component-based design and prop management

Tailwind utility-first styling in a React app

📌 Future Improvements
Add filter/search by status or name

Pagination or infinite scroll

Backend integration with Firebase or Supabase

Authentication (admin-only access)

📃 License
MIT

💼 About the Developer
Batubo Victory
Self-taught frontend developer based in Nigeria 🇳🇬
Portfolio Website | GitHub | Twitter

Color Scheme
| Purpose         | Color Code | Description                        |
| --------------- | ---------- | ---------------------------------- |
| Background      | `#111827`  | Dark slate                         |
| Card Background | `#1F2937`  | Slightly lighter than background   |
| Primary Text    | `#F9FAFB`  | Soft white                         |
| Secondary Text  | `#9CA3AF`  | Gray text for labels/secondary UI  |
| Accent Button   | `#3B82F6`  | Same vivid blue (consistent brand) |
| Success Badge   | `#10B981`  | Same green                         |
| Pending Badge   | `#FBBF24`  | Same amber                         |
| Input Border    | `#374151`  | Muted dark gray                    |
