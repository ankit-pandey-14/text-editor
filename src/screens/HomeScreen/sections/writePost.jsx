import { memo, useRef, useState } from 'react';
import DummyPerson from '../../../assets/dummy-person.jpg';

import CustomButton from '../../../components/customButton';
import CustomIconImage from '../../../components/customIconImage';
import CustomText from '../../../components/customText';


const fontIcons = [
    { key: 'F1', icon: 'bold', title: 'Bold' },
    { key: 'F2', icon: 'italic', title: 'Italic' },
    { key: 'F3', icon: 'textStrike', title: 'Text Strike' },
    { key: 'F4', icon: 'smiley', title: 'Smiley' },
];
const attachmentIcons = [
    { key: 'A1', icon: 'copy', title: 'Copy' },
    { key: 'A2', icon: 'gallery', title: 'Gallery' },
    { key: 'A3', icon: 'attachment', title: 'Attachment' },
];

const tooltipElements = [
    {
        key:1,
        icon: "bold",
        tooltip: "Bold"
    },
    {
        key:2,
        icon: "italic",
        tooltip: "Italic"
    },
    {
        key:3,
        icon: "underline",
        tooltip: "UnderLine",
    },
    {
        key:4,
        icon: "strike",
        tooltip: "Text Strike",
    },
    {
        key:5,
        icon: "link",
        tooltip: "Url"
    },
]

const WritePostSection = ({ setPost }) => {

    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    const contentRef = useRef();

    const handleTextSelection = () => {
        const selection = window.getSelection();
        const text = selection.toString();
        console.log("text",text)
    
        if (text.length > 0) {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            console.log("rect", rect)
    
            // Tooltip positioning logic
            setTooltipPosition({
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY - 40,
            });
            setShowTooltip(true);
        } else {
            setShowTooltip(false);
        }
    };

    return (
        <section className='write-post'>
            <div className='d-flex justify-between align-center p-x-14 height-65 border-down'>
                <h2 className='top-section-heading'>Write Post</h2>

                <div className='d-flex align-center right-part'>
                    <CustomButton
                        title={
                            <CustomText
                                leftIcon={'speedMeter'}
                                leftAltText={'Check Score'}
                                text={'Credit Score'}
                                classes={'d-flex align-center gap-4 text-black'}
                                iconClasses={'btn-icon'}
                            />
                        }
                        tooltip={'Credit Score'}
                        type='default'
                        onClick={() => {}}
                    />

                    <div className='d-flex align-center profile-box'>
                        <CustomIconImage
                            imageSrc={DummyPerson}
                            altText={'Dummy Person'}
                            classes={'profile'}
                        />
                        <div>+</div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-between align-center p-x-14 height-45 border-down'>
                <div className='d-flex toolbar-icons'>
                    {
                        fontIcons.map((fontIcon) => {
                            return (
                                <CustomIconImage
                                    key={fontIcon?.key}
                                    icon={fontIcon?.icon}
                                    tooltip={fontIcon?.title}
                                    classes={'cursor-pointer'}
                                    onClick={()=>{}}
                                />
                            );
                        })
                    }
                </div>
                <div className='d-flex toolbar-icons'>
                    {
                        attachmentIcons.map((attachmentIcon) => {
                            return (
                                <CustomIconImage
                                    key={attachmentIcon?.key}
                                    icon={attachmentIcon?.icon}
                                    tooltip={attachmentIcon?.title}
                                    classes={'cursor-pointer'}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className='text-area-box default-padding'>
                <p
                    ref={contentRef}
                    onMouseUp={handleTextSelection}
                    contentEditable={true}
                    className='textarea'
                    onInput={() => {
                        setPost(contentRef.current.innerHTML);
                    }}
                />
                { console.log("tooltipPosition", tooltipPosition) }
                {showTooltip && (
                    <div className='d-flex text-tooltip'
                        style={{
                          top: tooltipPosition?.y,
                          left: tooltipPosition?.x,
                        }}
                    >
                        {
                            tooltipElements.map((ele)=>{
                                return (
                                    <CustomButton
                                        key={ele.key}
                                        title={
                                            <CustomIconImage
                                                icon={ele?.icon}
                                            />
                                        }
                                        tooltip={ele?.tooltip}
                                        classes={"cursor-pointer b-none p-0"}
                                        onClick={()=>{
                                            if (ele?.icon === 'bold') {
                                                document.execCommand("bold");
                                            } else if(ele?.icon === "italic") {
                                                document.execCommand("italic")
                                            } else if(ele?.icon === "underline") {
                                                document.execCommand("underline")
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                        <div className='cross'>
                            <CustomIconImage
                                icon={'close'}
                                tooltip={"close"}
                                classes={"cursor-pointer"}
                                onClick={()=>{
                                    const selection = window.getSelection();
                                    selection.removeAllRanges();
                                    setShowTooltip(false)
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <div className='d-flex justify-between align-center p-x-14 height-45 border-down text-black'>
                    <p>Last saved at Oct 4, 2023, 10:34 AM</p>

                    <p>254 characters</p>
                </div>

                <div className='d-flex justify-between align-center p-x-14 height-65'>
                    <CustomButton
                        title={'Save as Draft'}
                        type='default'
                        onClick={() => {}}
                        classes={'d-block w-fit'}
                    />

                    <div className='d-flex gap-5'>
                        <CustomButton
                            title={
                                <CustomText
                                    leftIcon={'schedule'}
                                    leftAltText={'Schedule'}
                                    text={'Schedule'}
                                    classes={'d-flex align-center gap-4 text-black'}
                                    iconClasses={'btn-icon'}
                                />
                            }
                            tooltip={'Schedule'}
                            type='default'
                            onClick={() => {}}
                            classes={'d-block w-fit'}
                        />

                        <CustomButton
                            title={
                                <CustomText
                                    rightIcon={'send'}
                                    rightAltText={'Publish'}
                                    text={'Publish'}
                                    classes={'d-flex align-center gap-4 text-white'}
                                    iconClasses={'btn-icon'}
                                />
                            }
                            tooltip={'Publish'}
                            type='primary'
                            onClick={() => {}}
                            classes={'d-block w-fit'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(WritePostSection);