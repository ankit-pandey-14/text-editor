import { memo, useState } from "react";
import ReactHtmlParser from 'html-react-parser';
import DummyPerson from '../../../assets/dummy-person.jpg';

import CustomIconImage from "../../../components/customIconImage";
import CustomButton from "../../../components/customButton";
import CustomText from "../../../components/customText";


const devicesList = [
    { key: 1, icon: 'phone', tooltip: 'Phone' },
    { key: 2, icon: 'tablet', tooltip: 'Tablet' },
    { key: 3, icon: 'desktop', tooltip: 'Desktop' },
];

const cardActions = [
    { key: 'C1', icon: 'like', text: 'Like' },
    { key: 'C2', icon: 'comment', text: 'Comment' },
    { key: 'C3', icon: 'share', text: 'Share' },
    { key: 'C4', icon: 'sendTilted', text: 'Send' },
];

const reactions = [
    { key: 'R1', icon: 'like', classes: 'like' },
    { key: 'R2', icon: 'clap', classes: 'clap' },
    { key: 'R3', icon: 'support', classes: 'support' },
    { key: 'R4', icon: 'heart', classes: 'heart' },
];

const PreviewPostSection = ({ post }) => {
    const [activeDevice, setActiceDevice] = useState('phone');

    return (
        <section className="preview-section">
            <div className="d-flex justify-between align-center p-x-14 height-65 border-down">
                <div className="text-disabled fw-medium">Post Preview</div>

                <div className="d-flex align-center gap-4 text-disabled">
                    <p>Devices : </p>

                    <div className="d-flex align-center devices">
                        {
                            devicesList.map((device) => {
                                const { key, icon, tooltip } = device;
                                return (
                                    <CustomIconImage
                                        key={key}
                                        icon={icon}
                                        tooltip={tooltip}
                                        classes={`cursor-pointer device-icon${activeDevice === icon ? ' active-device' : ''}`}
                                        onClick={() => {
                                            setActiceDevice(icon);
                                        }}
                                    />
                                );
                            })
                        }
                    </div>

                </div>
            </div>

            <div className="preview-post">
                <CustomButton
                    title={'Copy Text'}
                    type="default"
                    classes={'w-fit d-block mx-auto'}
                />

                <div className="mx-auto card">
                    <div className="d-flex align-start gap-5">
                        <CustomIconImage
                            imageSrc={DummyPerson}
                            altText={'Dummy Person'}
                            classes={'card-profile'}
                        />

                        <div className="text-disabled profile-info">
                            <h3 className="text-black">Cody Fisher</h3>
                            <div>UI/UX Design | Web & Mobile Design | Front-end | UI Developer</div>
                            <div className="d-flex gap-4 align-center">
                                Now
                                <span className="dot" />
                                <CustomIconImage
                                    icon={'world'}
                                    tooltip={'World'}
                                    classes={'d-flex align-center justify-center'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 card-content">
                        { ReactHtmlParser(post) }
                    </div>

                    <div className="mt-5 border-down d-flex justify-between gap-4 align-center p-y-14">
                        <div className="d-flex gap-5 reactions">
                            <div className="d-flex">
                                {
                                    reactions.map((reaction) => {
                                        return (
                                            <CustomIconImage
                                                key={reaction.key}
                                                icon={reaction.icon}
                                                classes={`d-flex align-center justify-center reaction-icon ${reaction.classes}`}
                                            />

                                        );
                                    })
                                }

                            </div>

                            <span className="text-disabled">88</span>
                        </div>

                        <div className="d-flex gap-4 align-center text-disabled">
                            <span>4 comments</span>
                            <span className="dot" />
                            <span>1 repost</span>
                        </div>
                    </div>

                    <div className="d-flex justify-between align-center card-actions">
                        {
                            cardActions.map((cardAction) => {
                                return (
                                    <CustomText
                                        key={cardAction.key}
                                        leftIcon={cardAction.icon}
                                        leftAltText={cardAction.text}
                                        text={cardAction.text}
                                        classes={'cursor-pointer text-disabled d-flex gap-4'}
                                        iconClasses={'action-icon'}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(PreviewPostSection);