import streamlit.components.v1 as component
import streamlit as st
from typing import Literal, Any


BASE_URL = "https://3001-firebase-coder-buddy-1746985578257.cluster-qhrn7lb3szcfcud6uanedbkjnm.cloudworkstations.dev"


def _Write(text: str):
    st.write(text)

def _ChatMessage(role: Literal["user", "assistant"], message: str, key: Any = 1):
    if role == "user":
        _MessagePlaceholder(key=f"message-placeholder-{key}", message=message)
    else:
        st.markdown(message)

class _SessionStateProxy():
    session_state = {}
    messages = []


def _Unstyled():
    """
    Clean up the Streamlit brading styles
    """

    st.markdown(
        """<style>header.stAppHeader { display: none !important; }</style>""",
        unsafe_allow_html=True
    )

_HeaderComponent = component.declare_component(
    "header_component",
    url=f"{BASE_URL}/c/header"
)

_MessagePlaceholder = component.declare_component(
    "message_placeholder_component",
    url=f"{BASE_URL}/c/message"
)

_ChatInputComponent = component.declare_component(
    "textarea_component",
    url=f"{BASE_URL}/c/textarea"
)