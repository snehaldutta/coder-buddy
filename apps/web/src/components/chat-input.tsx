import React, { useEffect, useState, type ReactElement } from "react"
import {
  Streamlit,
  withStreamlitConnection,
  type ComponentProps,
} from "streamlit-component-lib"
import { css } from "@emotion/css"
import Atom from "../icon/atom"
import Paper from "../icon/paper"

/**
 * This is a React-based component template. The passed props are coming from the
 * Streamlit library. Your custom args can be accessed via the `args` props.
 */
function ChatInputComponent({
  args,
  theme,
  disabled,
  width,
}: ComponentProps): ReactElement {
  const [message, setMessage] = useState("")
  const { placeholder = "Write your thoughts !!" } = args

  useEffect(() => {
    Streamlit.setFrameHeight(212)
  }, [theme])

  const handleSend = (ev: React.KeyboardEvent | React.MouseEvent) => {
    ev.preventDefault()
    
    if (
      ev.nativeEvent instanceof KeyboardEvent &&
      ev.nativeEvent.key !== "Enter"
    ) {
      return
    }

    Streamlit.setComponentValue(message.trim())
    setMessage("")
  }

  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      })}
    >
      <strong
        className={css({
          color: "#fff",
          fontFamily: "Gabarito, sans-serif",
          fontSize: 22,
          fontWeight: 600,
          marginBottom: 6,
          marginLeft: 6,
        })}
      >
        What&apos;s on your mind?
      </strong>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
          borderRadius: 20,
          width: "100%",
          height: 138,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#535760",
          paddingBottom: 14,
          paddingInline: 14,
          backgroundColor: "#2F3237",
          boxShadow: `128px 269px 83px 0px rgba(41, 42, 46, 0.00),
          82px 172px 76px 0px rgba(41, 42, 46, 0.01),
          46px 97px 64px 0px rgba(41, 42, 46, 0.05)`,
        })}
      >
        <textarea
          onChange={(ev) => setMessage(ev.target.value)}
          placeholder={placeholder}
          onKeyUp={handleSend}
          value={message}
          className={css({
            background: "transparent",
            resize: "none",
            border: "none",
            outline: "none",
            width: "100%",
            height: "100%",
            flex: 1,
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            paddingTop: 14,
            fontSize: 16,
            fontWeight: 400,
            "&::placeholder": {
              color: "#76787C",
            },
          })}
        />

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              columnGap: 5,
              padding: 9,
              width: 136,
              height: 34,
              borderRadius: 10,
              background: "#535760",
            })}
          >
            <Atom />
            <em
              className={css({
                color: "#D9D9D9",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 500,
              })}
            >
              Qwen2.5:1.5b
            </em>
          </span>

          <button
            type="button"
            onClick={handleSend}
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              columnGap: 5,
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "#fff",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              ":active": {
                transform: "scale(0.92)",
              },
            })}
          >
            <Paper className={css({ marginBottom: 2, marginLeft: 2 })} />
          </button>
        </div>
      </div>

      <i
        className={css({
          color: "#76787c",
          fontFamily: "Gabarito, sans-serif",
          fontSize: 12,
          fontWeight: 400,
          marginTop: 6,
          marginLeft: 6,
          fontStyle: "normal",
        })}
      >
        Powered by Ollama
      </i>
    </section>
  )
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(ChatInputComponent)
