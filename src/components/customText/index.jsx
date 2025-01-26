import { memo } from "react"
import CustomIconImage from "../customIconImage";

function CustomText({leftIcon, rightIcon, leftAltText, rightAltText, tooltip, text}){
    return (
        <div>
            {
                leftIcon ? 
                <CustomIconImage 
                    icon={leftIcon}
                    tooltip={tooltip}
                    altText={leftAltText || ''}
                    onClick={()=>{}}
                /> 
                : null
            }
            <p>{text}</p>
            {
                rightIcon ? 
                <CustomIconImage
                    icon={rightIcon}
                    tooltip={tooltip}
                    altText={rightAltText || ''}
                    onClick={()=>{}}
                /> 
                : null
            }
        </div>
    )
}

export default memo(CustomText);