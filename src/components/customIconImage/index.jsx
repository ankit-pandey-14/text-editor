import { memo } from 'react';
import '../../styles/components/image.css';

// importing of all icons
import { BiSolidEdit } from "react-icons/bi";


// list of icons
const iconObj = {
    edit: <BiSolidEdit />,
};


const CustomIconImage = ({ icon, imageSrc, altText, tooltip, onClick, classes }) => {
    return (
        <div
            className={`custom-image ${classes || ''}`}
            title={tooltip}
            onClick={onClick || (() => {})}
        >
            {
                icon
                ? iconObj?.[icon]
                : (
                    <img
                        src={imageSrc}
                        alt={altText}
                        loading='lazy'
                    />
                )

            }
        </div>
    );
};

export default memo(CustomIconImage);