import requests
import json
import streamlit as st

import packages.components as c

def handle_user_prompt(prompt: str):
    st.session_state.messages.append({'role':'user','content':prompt})

def handle_assistant_response():
    ollama_url = "http://localhost:11434/api/chat"
    
    payload = {
        "model": "qwen2.5:1.5b",
        "messages": [
            {
                'role': m['role'],
                'content': m['content']
            }
            for m in st.session_state.messages
        ],
        "stream": True
    }
    
    response = requests.post(ollama_url, json=payload, stream=True)
        
    complete_response = ""
    placeholder = chat_placeholder.empty()
    for chunk in response.iter_lines():
        if chunk:
            chunk_data = json.loads(chunk.decode('utf-8'))
            if 'message' in chunk_data and 'content' in chunk_data['message']:
                content = chunk_data['message']['content']
                complete_response += content
                placeholder.markdown(complete_response)
    
    res = complete_response
    st.session_state.messages.append({'role':'assistant','content':res})

st.set_page_config(
    page_title="Coder-Buddy",
    page_icon="./staticfiles/favicon.png"
)

c.unstyled()
c.header()

if "messages" not in st.session_state:
    st.session_state.messages = []

chat_placeholder = st.container()

if prompt := c.chat_input(placeholder="Write your thoughts !!"):
    handle_user_prompt(prompt=prompt)

    with chat_placeholder:
        for i, message in enumerate(st.session_state.messages):
            c.chat_message(key=i, role=message['role'], message=message['content'])

    handle_assistant_response()

with chat_placeholder:
    for i, message in enumerate(st.session_state.messages):
        c.chat_message(key=i, role=message['role'], message=message['content'])
