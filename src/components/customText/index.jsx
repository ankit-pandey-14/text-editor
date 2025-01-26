import { memo } from "react"
import CustomIconImage from "../customIconImage";

function CustomText({leftICon, rightIcon, leftAltText, rightAltText, text}){
    return (
        <div>
            {
                leftICon ? 
                <CustomIconImage 
                    icon={leftICon}
                    altText={leftAltText}
                    onClick={()=>{}}
                /> 
                : null
            }
            <p>{text}</p>
            {
                rightIcon ? 
                <CustomIconImage
                    icon={rightIcon}
                    altText={rightAltText}
                    onClick={()=>{}}
                /> 
                : null
            }
        </div>
    )
}

export default memo(CustomText);