<h1>
  <img src=https://github.com/user-attachments/assets/6b6eebe6-2b4f-484b-8a1f-4c8a4a3dbe84 />
  Coder-Buddy
</h1>

**Coder-Buddy** is an interactive chatbot interface built with **Streamlit** and powered by **Qwen2.5:1.5B**, running locally via **Ollama**. It's designed to serve as a friendly, intelligent coding companion that streams responses in real time — making it ideal for brainstorming, learning, or debugging ideas.

## 🚀 Features

- 🧠 LLM-powered chat using **Qwen 2.5**
- ⚡ Real-time response streaming from a **local Ollama server**
- 📜 Chat history persistence using `st.session_state`
- 🧼 Clean UI with markdown rendering and user-assistant chat bubbles
- ❤️ Lightweight and fast — no cloud dependency!

## 🛠️ Tech Stack

- [Streamlit](https://streamlit.io/)
- [Ollama](https://ollama.com/)
- [Qwen2.5:1.5B model](https://huggingface.co/Qwen)
- [Python 3.10+](https://www.python.org/downloads/release/python-3100/)
- [React 19](https://www.python.org/downloads/release/python-3100/)
- [Vite](https://vite.dev/guide/)

## 📦 Installation

### Using your local machine

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/coder-buddy.git
cd coder-buddy
```

2. **Create virtual environment:**

```bash
# (we assume you already have python 3.10+ installed)
python -m venv .venv
source .venv/bin/activate
pip install -r requeriments.txt
```

```bash
# this is for the node project
cd ./apps/web
npm install
```

3. **Running the project:**

```bash
cd ./apps/web
npm run dev
```

```bash
ollama pull qwen2.5:1.5b
ollama run qwen2.5:1.5b

streamlit run agent.py
```

### Using Firebase Studio

[Go to Firabase Studio](https://studio.firebase.google.com/import?url=https://github.com/snehaldutta/coder-buddy)

## 📂 Project structure

```
📦 coder-buddy/
├── 📄 agent.py                 # Main Streamlit app
├── 📂 packages                 # Components & extra modules
│   └── 📂 components
│       └── ...
├── 📂 apps
│   └── 📂 web                  # React project that serves custom components to Python (Streamlit)
│       ├── 📄 index.html
│       ├── 📄 package.json
│       ├── 📄 vite.config.ts
│       └── ...
├── 📄 requirements.in          # Direct dependencies
├── 📄 requirements.txt         # Locked dependency tree
└── 📄 README.md                # You're here!

```

### Thank's for check it out my project!

- [Demo](https://youtu.be/omMegjMm7bw) Video of the project 📹
- Connect with me over 🔗 [LinkedIn](www.linkedin.com/in/snehal-python)
