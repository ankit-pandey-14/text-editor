import { memo } from "react"
import CustomIconImage from "../customIconImage";

function CustomText({
    leftIcon,
    rightIcon,
    leftAltText,
    rightAltText,
    tooltip,
    text,
    classes,
    iconClasses,
    textClasses,
}){
    return (
        <div className={classes}>
            {
                leftIcon
                ? (
                    <CustomIconImage 
                        icon={leftIcon}
                        tooltip={tooltip}
                        altText={leftAltText || ''}
                        onClick={()=>{}}
                        classes={iconClasses}
                    /> 
                )
                : null
            }
            {
                text
                ? <p className={textClasses}>{text}</p>
                : null
            }
            {
                rightIcon
                ? (
                    <CustomIconImage
                        icon={rightIcon}
                        tooltip={tooltip}
                        altText={rightAltText || ''}
                        onClick={()=>{}}
                        classes={iconClasses}
                    />
                ) 
                : null
            }
        </div>
    )
}

export default memo(CustomText);