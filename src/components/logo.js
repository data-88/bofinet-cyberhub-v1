/** @jsx jsx */
import { jsx } from "theme-ui"

const Logo = props => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="170"
  height="80"
  viewBox="0 0 170 80"
>
  <image
    width="154"
    height="76"
    x="3"
    y="4"
    xlinkHref="data:img/png;base64,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"
  ></image>
</svg>
)

Logo.defaultProps = {
  color: "white",
}

export default Logo
