import { memo } from 'react';
import '../../styles/components/image.css';

// importing of all icons
import { BiSolidEdit } from "react-icons/bi";
import { GoBold } from "react-icons/go";
import { FaItalic } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { RiAttachmentLine } from "react-icons/ri";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { BiTachometer } from "react-icons/bi";


// list of icons
const iconObj = {
    edit: <BiSolidEdit />,
    bold: <GoBold />,
    italic: <FaItalic />,
    textStrike: <MdOutlineStrikethroughS />,
    smiley: <FaSmile />,
    copy: <FaCopy />,
    gallery: <FaImage />,
    attachment: <RiAttachmentLine />,
    speedMeter: <BiTachometer />,
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