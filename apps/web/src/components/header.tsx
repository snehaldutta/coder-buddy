import { useEffect, type ReactElement } from "react"
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
function HeaderComponent({
  args,
  theme,
  disabled,
  width,
}: ComponentProps): ReactElement {
  const { name: _name } = args

  useEffect(() => {
    Streamlit.setFrameHeight(36)
  }, [theme])

  return (
    <header
      className={css({
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 12
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          columnGap: 12,
        })}
      >
        <span>
          <img
            src="/favicon.png"
            itemType="image/png"
            className={css({ width: 32, aspectRatio: 1 })}
          />
        </span>
        <strong
          className={css({
            fontSize: 22,
            color: "#fff",
            fontWeight: 600,
            fontFamily: "Gargarito, sans-serif",
          })}
        >
          Coder-Buddy
        </strong>
      </div>
    </header>
  )
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(HeaderComponent)
