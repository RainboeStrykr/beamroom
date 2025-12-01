# 📡 BeamRoom

![logo](app/opengraph-image.png)

### *Real-time code-based screen sharing — simple, fast, and secure.*

BeamRoom is a minimal, modern app that lets you **create a room**, share a **unique join code**, and **instantly show your screen** to anyone — no signup required.

---

## 🚀 Features

* 🔑 **Join via Code** — Create a room and share a random & unique digit join code
* ⚡ **Real-Time Screen Sharing** — Low-latency P2P streaming
* 🔐 **Private & Secure** — Rooms auto-expire; no data stored
* 💻 **Cross-Platform** — Works on web & mobile
* 🎨 **Clean UI/UX** — Minimal, fast, and distraction-free
* 🗂 **Lightweight Architecture** — No installations for viewers

---

## 🏗 Tech Stack

* Next.js v15 - React framework
* PeerJS - WebRTC abstraction
* Tailwind CSS v4 beta - Styling
* shadcn/ui - UI components

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/rainboestrykr/beamroom.git
cd beamroom
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run production server:

```bash
npm start
```

---

## 🧩 How It Works

### 1️⃣ Create a Room

User hits **Create Room**, backend generates a unique code.

### 2️⃣ Join a Room

Enter the room code → establish connection.

### 3️⃣ Start Screen Sharing

WebRTC streams the sender’s screen to connected viewers.

### 4️⃣ Session Ends Automatically

When the host leaves, the room closes and connections end.

---

## 📸 Screenshots

![preview](app/assets/Beamroom(tutorial).gif)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or report a bug.

---

## 📜 License

This project is released under the **MIT License**.

---

## ⭐ Support

If you like this project, consider giving the repository a **star ⭐** — it helps a lot!