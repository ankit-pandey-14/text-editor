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
import { IoSend } from "react-icons/io5";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdTabletMac } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";


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
    send: <IoSend />,
    schedule: <AiFillSchedule />,
    phone: <IoMdPhonePortrait />,
    tablet: <MdTabletMac />,
    desktop: <FaDesktop />,
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