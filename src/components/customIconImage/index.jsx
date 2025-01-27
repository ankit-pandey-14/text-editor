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
import { BsCalendar2Fill } from "react-icons/bs";
import { RxDragHandleVertical } from "react-icons/rx";
import { HiLightBulb } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiTwotoneIdcard } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdTabletMac } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import { GrFan } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { LiaShareSolid } from "react-icons/lia";
import { LuSend } from "react-icons/lu";
import { PiHandsClapping } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaTextSlash } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { TbChecks } from "react-icons/tb";
import { MdCompress } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { RxLoop } from "react-icons/rx";
import { PiBabyLight } from "react-icons/pi";
import { PiTextAaLight } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { TbMicrophone2 } from "react-icons/tb";
import { RiTranslate2 } from "react-icons/ri";
import { AiFillSignal } from "react-icons/ai";
import { PiLineSegmentsBold } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md"

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
    schedule: <BsCalendar2Fill />,
    postGenerator: <BsStars />,
    hiLightBulb: <HiLightBulb />,
    verticalMenu: <RxDragHandleVertical />,
    post: <AiTwotoneIdcard />,
    upArrow: <FaArrowTrendUp />,
    phone: <IoMdPhonePortrait />,
    tablet: <MdTabletMac />,
    desktop: <FaDesktop />,
    preferences:<HiOutlineAdjustments />,
    featureRequest:<GrFan />,
    wordsGenerated:<BsFillInfoCircleFill />,
    thunder: <AiFillThunderbolt />,
    world: <FaGlobeAmericas />,
    like: <AiOutlineLike />,
    comment: <FaRegCommentDots />,
    share: <LiaShareSolid />,
    sendTilted: <LuSend />,
    clap: <PiHandsClapping />,
    support: <FaHandHoldingHeart />,
    heart: <FaRegHeart />,
    strike: <FaTextSlash />,
    underline: <FaUnderline />,
    link: <AiOutlineLink />,
    close: <MdOutlineClose />,
    ai: <FaBrain />,
    complete: <TbChecks />,
    shorten: <MdCompress />,
    extend: <SlSizeFullscreen />,
    rephrase: <RxLoop />,
    summarize: <AiFillSignal />,
    tldr: <PiLineSegmentsBold />,
    simplify: <PiBabyLight />,
    spellingGrammar: <PiTextAaLight />,
    emojify: <LuPartyPopper />,
    toneOfVoice: <TbMicrophone2 />,
    translate: <RiTranslate2 />,
    rightArrow: <MdArrowForwardIos />
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