import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width="320" height="45" viewBox="0 0 320 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M16.6193 0.772705H24.3492V44.0603H16.6193V0.772705Z" fill="#FAF5F0" />
            <Path d="M0 0.772705H40.5821V8.50263H0V0.772705Z" fill="#FAF5F0" />
            <Rect x="240.463" y="0.772705" width="7.72992" height="43.2876" fill="#FAF5F0" />
            <Rect x="240.463" y="36.3303" width="32.8522" height="7.72992" fill="#FAF5F0" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M41.8447 22.4168C41.8447 10.0363 51.8811 1.05982e-09 64.2615 1.05982e-09H113.579C116.085 -2.43699e-05 118.595 0.420266 121.002 1.26469C126.324 3.13258 130.747 6.93846 133.387 11.9231L126.783 15.4217C125.023 12.0989 122.075 9.56193 118.527 8.3168C114.979 7.07166 111.092 7.20993 107.641 8.70402C104.19 10.1981 101.43 12.9382 99.9102 16.3776C98.3906 19.817 98.2234 23.7029 99.4422 27.2601C100.661 30.8173 103.176 33.7843 106.486 35.5691C109.795 37.3539 113.656 37.8254 117.298 36.8895C120.94 35.9536 124.095 33.6791 126.134 30.5198C127.057 29.0899 127.72 27.5262 128.11 25.8994H113.969V18.556H135.661V18.5593C136.631 24.1155 135.472 29.8334 132.413 34.5725C129.354 39.312 124.621 42.7241 119.158 44.1281C117.321 44.6003 115.446 44.8337 113.579 44.8336H64.2615C51.8811 44.8336 41.8447 34.7973 41.8447 22.4168Z" fill="#FAF5F0" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M181.714 34.5725C184.772 29.833 185.932 24.1146 184.961 18.558L184.96 18.5581V18.556H163.268V25.8994H177.41C177.02 27.5262 176.357 29.0899 175.434 30.5198C173.395 33.6791 170.24 35.9536 166.598 36.8895C162.956 37.8254 159.095 37.3539 155.786 35.5691C152.476 33.7843 149.961 30.8173 148.742 27.2601C147.524 23.7029 147.691 19.817 149.211 16.3776C150.73 12.9382 153.491 10.1981 156.941 8.70402C160.392 7.20993 164.279 7.07166 167.827 8.3168C171.375 9.56193 174.323 12.0989 176.083 15.4217L182.688 11.9231C180.047 6.93846 175.624 3.13258 170.302 1.26469C164.979 -0.603193 159.148 -0.39577 153.972 1.84558C148.795 4.08693 144.654 8.19744 142.374 13.3571C140.095 18.5167 139.844 24.3462 141.672 29.6825C143.5 35.0188 147.273 39.4697 152.238 42.1472C157.203 44.8248 162.995 45.5321 168.458 44.1281C173.922 42.7241 178.655 39.312 181.714 34.5725Z" fill="#FAF5F0" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M226.638 25.8994H212.497V18.556H234.19V18.5624C235.159 24.1176 233.999 29.8343 230.941 34.5725C227.883 39.312 223.149 42.7241 217.686 44.1281C212.223 45.5321 206.431 44.8248 201.466 42.1472C196.501 39.4697 192.728 35.0188 190.9 29.6825C189.072 24.3462 189.322 18.5167 191.602 13.3571C193.882 8.19744 198.023 4.08693 203.199 1.84558C208.376 -0.39577 214.207 -0.603193 219.53 1.26469C224.852 3.13258 229.275 6.93846 231.916 11.9231L225.311 15.4217C223.551 12.0989 220.603 9.56193 217.055 8.3168C213.507 7.07166 209.62 7.20993 206.169 8.70402C202.718 10.1981 199.958 12.9382 198.438 16.3776C196.919 19.817 196.752 23.7029 197.97 27.2601C199.189 30.8173 201.704 33.7843 205.014 35.5691C208.323 37.3539 212.184 37.8254 215.826 36.8895C219.468 35.9536 222.623 33.6791 224.662 30.5198C225.585 29.0899 226.248 27.5262 226.638 25.8994Z" fill="#FAF5F0" />
            <Path d="M317.353 32.9831C314.695 37.958 310.258 41.7476 304.928 43.596C299.599 45.4443 293.769 45.2155 288.601 42.9551C283.432 40.6948 279.306 36.5691 277.046 31.4011C274.785 26.2331 274.555 20.4028 276.403 15.0732C278.251 9.74367 282.04 5.30666 287.015 2.64738C291.99 -0.0118958 297.784 -0.697949 303.242 0.726089C308.7 2.15013 313.421 5.57956 316.462 10.3302C319.504 15.0809 320.642 20.8036 319.651 26.3566L312.294 25.0431C312.954 21.3414 312.195 17.5267 310.168 14.3599C308.141 11.1931 304.994 8.90703 301.356 7.95776C297.717 7.0085 293.855 7.46582 290.539 9.2385C287.222 11.0112 284.696 13.9689 283.465 17.5216C282.233 21.0743 282.386 24.9608 283.893 28.4057C285.4 31.8507 288.15 34.6009 291.595 36.1076C295.04 37.6144 298.927 37.7669 302.48 36.5348C306.032 35.3027 308.99 32.7766 310.762 29.4603L317.353 32.9831Z" fill="#FAF5F0" />
            <Path d="M319.665 26.2756C320.601 20.9203 319.559 15.4074 316.733 10.7633C313.907 6.11923 309.489 2.6604 304.303 1.03081C299.116 -0.598783 293.514 -0.288086 288.54 1.90506C283.565 4.0982 279.558 8.02432 277.262 12.9525C274.967 17.8806 274.541 23.4749 276.063 28.6939C277.585 33.9128 280.952 38.4007 285.537 41.322C290.122 44.2434 295.612 45.399 300.986 44.5738C306.359 43.7486 311.25 40.9988 314.747 36.8363L309.024 32.0289C306.693 34.8035 303.433 36.6366 299.851 37.1866C296.269 37.7367 292.61 36.9664 289.553 35.019C286.497 33.0717 284.253 30.08 283.238 26.6011C282.223 23.1221 282.507 19.393 284.037 16.1079C285.567 12.8228 288.239 10.2056 291.555 8.74366C294.871 7.28172 298.605 7.0746 302.062 8.16089C305.52 9.24718 308.464 11.5528 310.348 14.6486C312.232 17.7443 312.927 21.4192 312.303 24.9891L319.665 26.2756Z" fill="#FAF5F0" />
            <Path d="M279.418 26.2818L319.613 26.2818V18.9383L279.418 18.9383V26.2818Z" fill="#FAF5F0" />
        </Svg>
    )
}

export default SvgComponent