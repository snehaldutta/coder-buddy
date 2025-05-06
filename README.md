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
- Python 3.10+

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/coder-buddy.git
cd coder-buddy

python -m venv env
source env/bin/activate  # On Windows use `env\\Scripts\\activate`

pip install -r requirements.txt

ollama pull qwen2.5:1.5b
ollama run qwen2.5:1.5b

streamlit run app.py

coder-buddy/
├── app.py                # Main Streamlit app
├── requirements.txt      # Dependencies
└── README.md             # You're here!

```
[Demo](https://youtu.be/omMegjMm7bw): Demo Video of the project .....

Connect with me over [LinkedIn](www.linkedin.com/in/snehal-python)
