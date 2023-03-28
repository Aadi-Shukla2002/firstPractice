import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent3(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.279 2.346l.221.22.221-.22c.588-.588 1.538-1.159 2.591-1.159 1.708 0 3.126 1.404 3.126 3.438 0 2.067-1.106 3.709-2.441 4.968-1.184 1.116-2.518 1.903-3.358 2.399l-.139.082-.139-.082c-.84-.496-2.174-1.283-3.358-2.4-1.335-1.258-2.44-2.9-2.44-4.967 0-2.033 1.44-3.438 3.125-3.438 1.053 0 2.003.571 2.591 1.159z"
        stroke="#6C28FE"
        strokeWidth={0.825}
      />
    </Svg>
  )
}

export default SvgComponent3
