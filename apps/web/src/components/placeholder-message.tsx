import { useEffect, useRef, useState, type ReactElement } from "react"
import {
  Streamlit,
  withStreamlitConnection,
  type ComponentProps,
} from "streamlit-component-lib"
import { css } from "@emotion/css"

/**
 * This is a React-based component template. The passed props are coming from the
 * Streamlit library. Your custom args can be accessed via the `args` props.
 */
function PlaceholderMessageComponent({
  args,
  theme,
  disabled,
  width,
}: ComponentProps): ReactElement {
  const { message } = args

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!divRef.current) return
    Streamlit.setFrameHeight(divRef.current.clientHeight)
  }, [theme, divRef])

  return (
    <div
      ref={divRef}
      className={css({
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        columnGap: 8,
      })}
    >
      <p
        className={css({
          padding: 13,
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontSize: 16,
          fontWeight: 400,
          borderRadius: "20px 5px 20px 20px",
          backgroundColor: "#2f3237",
        })}
      >
        {message}
      </p>
      <span
        className={css({
          width: 22,
          height: 22,
          display: "block",
          backgroundColor: "#f44b4b",
          borderRadius: 5,
        })}
      />
    </div>
  )
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(PlaceholderMessageComponent)
