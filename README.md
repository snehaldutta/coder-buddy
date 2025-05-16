# 👨🏻‍💻 Coder-Buddy 🤖

**Coder-Buddy** is an interactive chatbot interface built with **Streamlit** and powered by **Qwen2.5:1.5B**, running locally via **Ollama**. It's designed to serve as a friendly, intelligent coding companion that streams responses in real time — making it ideal for brainstorming, learning, or debugging ideas.

---

## 🚀 Features

- 🧠 LLM-powered chat using **Qwen 2.5**
- ⚡ Real-time response streaming from a **local Ollama server**
- 📜 Chat history persistence using `st.session_state`
- 🧼 Clean UI with markdown rendering and user-assistant chat bubbles
- ❤️ Lightweight and fast — no cloud dependency!

---

## 🛠️ Tech Stack

- [Streamlit](https://streamlit.io/)
- [Ollama](https://ollama.com/)
- [Qwen2.5:1.5B model](https://huggingface.co/Qwen)
- [Python 3.10+]()
- [React 19]()
- [Vite]()

---

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
ollama pull qwen2.5:1.5b
ollama run qwen2.5:1.5b

cd ./apps/web; npm run dev

streamlit run agent.py
```

### Using Firebase Studio

## 📂 Project structure

```
📦 coder-buddy/
├── 📄 agent.py                 # Main Streamlit app
├── 📂 packages                 # Components & extra stuff
│   └── 📄 components.py
│   └── ...
├── 📂 web                      # React web server that servers the custom components
│   └── 📄 index.html
│   └── 📄 package.json
│   └── 📄 vite.config.ts
│   └── ...
├── 📄 requirements.in          # Your project dependencies
├── 📄 requirements.txt         # Dependencies three
└── 📄 README.md                # You're here!
```


[Demo](https://youtu.be/omMegjMm7bw): Demo Video of the project .....

Connect with me over [LinkedIn](www.linkedin.com/in/snehal-python)
