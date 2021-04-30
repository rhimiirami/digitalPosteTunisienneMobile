import * as React from "react"
import Svg, { Rect,Ellipse,Path } from "react-native-svg"

function ProfilSvg(props) {
    return (
        <Svg width="45" height="45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="60" height="60" rx="30" fill="#FFCCE9"/>
                    <Ellipse cx="29.9735" cy="22.4725" rx="5.97254" ry="5.97254" stroke="#27277A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 36.7517C20.4984 36.3318 20.5923 35.9171 20.7746 35.5389C21.3467 34.3947 22.96 33.7883 24.2986 33.5137C25.2641 33.3077 26.2429 33.17 27.2277 33.1018C29.051 32.9416 30.8849 32.9416 32.7083 33.1018C33.693 33.1708 34.6717 33.3085 35.6373 33.5137C36.976 33.7883 38.5893 34.3375 39.1613 35.5389C39.528 36.3099 39.528 37.205 39.1613 37.976C38.5893 39.1773 36.976 39.7265 35.6373 39.9897C34.673 40.2042 33.6939 40.3458 32.7083 40.413C31.2242 40.5388 29.7332 40.5618 28.246 40.4817C27.9028 40.4817 27.571 40.4817 27.2277 40.413C26.2458 40.3466 25.2704 40.2051 24.3101 39.9897C22.96 39.7265 21.3581 39.1773 20.7746 37.976C20.5932 37.5933 20.4994 37.1751 20.5 36.7517Z" stroke="#27277A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>

    )
}

export default ProfilSvg

