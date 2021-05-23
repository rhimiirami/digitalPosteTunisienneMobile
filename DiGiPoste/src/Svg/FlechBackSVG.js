
import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function FlechBackSVG(props) {
    return (
        <Svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
            <Rect width={60} height={60} rx={30} fill="#FFCCE9" />
            <Path d="M31 45L16 30l15-15M16 30h30" stroke="#27277A" strokeWidth={2} />
        </Svg>

    )
}

export default FlechBackSVG
