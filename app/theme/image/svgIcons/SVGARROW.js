import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={9}
      height={13}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.3125 1.0625L1.875 6.96607L7.3125 11.9375"
        stroke="white"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default SvgComponent
