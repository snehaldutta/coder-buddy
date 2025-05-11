import requests
import json
import streamlit as st

st.set_page_config(
    page_title="Coder-Buddy",
    page_icon="🤖"
)

st.title("👨🏻‍💻 Coder-Buddy : Powered with Qwen 2.5 ")

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message['role']):
        st.markdown(message['content'])

if prompt := st.chat_input("Write your thoughts !!"):
    st.session_state.messages.append({'role':'user','content':prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message('assistant'):
        
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
        placeholder = st.empty()
        for chunk in response.iter_lines():
            if chunk:
                chunk_data = json.loads(chunk.decode('utf-8'))
                if 'message' in chunk_data and 'content' in chunk_data['message']:
                    content = chunk_data['message']['content']
                    complete_response += content
                    placeholder.markdown(complete_response)
        
        res = complete_response

    st.session_state.messages.append({'role':'assistant','content':res})




st.markdown("---")
st.markdown(
    """
    <div style="text-align: center; color: #888; padding: 10px;">
        Made with ❤️ using <b>Qwen2.5:1.5B</b> | <b>Ollama</b>
    </div>
    """, 
    unsafe_allow_html=True
)
