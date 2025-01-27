import { memo } from "react";
import '../../styles/components/sidebar.css';
import CustomButton from "../customButton";
import CustomText from "../customText";

const customText = (item) => [
    {
        id:1,
        leftIcon: 'postGenerator',
        text: "Post Generator",
        hidden: item === "footerElement"
    },
    {
        id:2,
        leftIcon: 'hiLightBulb',
        text: "Ideas Generator",
        hidden: item === "footerElement"
    },
    {
        id:3,
        leftIcon: "verticalMenu",
        text: "Carousel Maker",
        hidden: item === "footerElement"
    },
    {
        id:4,
        leftIcon: 'copy',
        text: "Posts",
        hidden: item === "footerElement"
    },
    {
        id:5,
        leftIcon: "upArrow",
        text: "Content Inspiration",
        hidden: item === "footerElement"
    },
    {
        id:6,
        leftIcon: "post",
        text: "Posts for You",
        hidden: item === "footerElement"
    },
    {
        id:7,
        leftIcon: "schedule",
        text: "Schedule",
        hidden: item === "footerElement"
    },
    {
        id:8,
        leftIcon: "preferences",
        text: "Preferences",
        hidden: item === "element"
    },
    {
        id:9,
        leftIcon: "featureRequest",
        text: "Feature Request",
        hidden: item === "element"
    },
].filter((item)=>!item?.hidden)

const SideBar = () => {
    return (
        <aside className="side-bar">
            {/* Sidebar */}

            <div className="d-flex write-post-btn-container">
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
            </div>
            <div className="d-flex flex-column sidebar-upper-element">
                {   
                    customText("element")?.map((item)=>{
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
            </div>
            <div className="footer-side-bar-element">
                {
                    customText("footerElement")?.map((item)=>{
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
                <div className="d-flex flex-column gap-5 footer-side-bar-card">
                    <div className="d-flex justify-between align-center">
                        <CustomText
                            rightIcon={'wordsGenerated'}
                            text={"Words generated"}
                            classes={'d-flex align-center gap-4'}
                            iconClasses={'info-icon'}
                            textClasses={'wordsGenerated-text-size'}
                        />
                        <p className="analytics-size">1.25k / 50k</p>
                    </div>
                    <div className="outer-scroll-bar">
                        <div className="inner-scroll-bar"></div>
                    </div>
                    <p className="reset-text">Monthly usage resets in 29 days</p>
                    <div className="d-flex align-center justify-center">
                        <CustomButton
                            title={
                                <CustomText
                                    leftIcon={'thunder'}
                                    tooltip={'Upgrade Plan'}
                                    text={'Upgrade Plan'}
                                    classes={'d-flex align-center gap-4 justify-center'}
                                    iconClasses={'thunder-icon'}
                                    textClasses={'upgradePlan-text-size'}
                                />
                            }
                            onClick={() => {}}
                            type="default"
                            classes={'upgradePlan-btn'}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default memo(SideBar);