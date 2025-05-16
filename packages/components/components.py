import streamlit.components.v1 as component
import streamlit as st
from typing import Literal


BASE_URL = "https://3001-firebase-coder-buddy-1746985578257.cluster-qhrn7lb3szcfcud6uanedbkjnm.cloudworkstations.dev"


def _Write(text: str):
    st.write(text)

class _SessionStateProxy():
    session_state = {}
    messages = []

class _ChatMessage(object):
    def __init__(self, role: Literal["user", "assistant"]):
        self.role = role

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        pass

    def write(self, text):
        self.m = text
        print(self.m)


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

_ChatInputComponent = component.declare_component(
    "textarea_component",
    url=f"{BASE_URL}/c/textarea"
)