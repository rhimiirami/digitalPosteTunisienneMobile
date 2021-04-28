import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function BackPage(props) {
    return (
        <Svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="60" height="60" rx="30" fill="#FFCCE9" />
            <Path d="M31.0001 45L16.0001 30L31.0001 15" stroke="#27277A" stroke-width="2" />
            <Path d="M16.0001 30H46.0001" stroke="#27277A" stroke-width="2" />
        </Svg>

    )
}

export default BackPage

