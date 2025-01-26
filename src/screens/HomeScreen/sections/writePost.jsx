import { memo } from 'react';
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

const WritePostSection = () => {
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

            <div className='text-area default-padding'></div>
            

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