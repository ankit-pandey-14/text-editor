import { memo } from "react";
import '../../styles/components/sidebar.css';
import CustomButton from "../customButton";
import CustomText from "../customText";

const customText = [
    {
        id:1,
        leftIcon: 'postGenerator',
        text: "Post Generator"
    },
    {
        id:2,
        leftIcon: 'hiLightBulb',
        text: "Ideas Generator"
    },
    {
        id:3,
        leftIcon: "verticalMenu",
        text: "Carousel Maker"
    },
    {
        id:4,
        leftIcon: 'copy',
        text: "Posts"
    },
    {
        id:5,
        leftIcon: "upArrow",
        text: "Content Inspiration"
    },
    {
        id:6,
        leftIcon: "post",
        text: "Posts for You"
    },
    {
        id:7,
        leftIcon: "schedule",
        text: "Schedule"
    },
]

const SideBar = () => {
    return (
        <aside className="side-bar">
            {/* Sidebar */}

            <CustomButton
                title={
                    <CustomText
                        leftIcon={'edit'}
                        tooltip={'Edit Icon'}
                        text={'Write Post'}
                        classes={'d-flex align-center gap-6 justify-center'}
                        iconClasses={'edit-icon'}
                        textClasses={'text-size'}
                    />
                }
                onClick={() => {}}
                type="primary"
                classes={'d-block write-post-btn'}
            />
            {   
                customText?.map((item)=>{
                    return (
                        <CustomText
                            key={item?.id}
                            leftIcon={item?.leftIcon}
                            text={item?.text}
                            classes={'d-flex align-center side-bar-list'}
                            iconClasses={'item-icon'}
                            textClasses={'item-text-size'}
                        />
                    )
                })
            }
        </aside>
    );
};

export default memo(SideBar);