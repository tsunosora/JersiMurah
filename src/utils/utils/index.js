import { Dimensions } from "react-native"
import { heightMobileUI, widthMobileUI } from "../constant"



export const responsivewidth = (width) => {
    return Dimensions.get('window').width*width/widthMobileUI;
}

export const responsiveheight = (height) => {
    return Dimensions.get('window').height*height/heightMobileUI;
}