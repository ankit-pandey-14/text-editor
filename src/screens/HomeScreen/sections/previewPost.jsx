import { memo, useState } from "react";
import CustomIconImage from "../../../components/customIconImage";
import CustomButton from "../../../components/customButton";


const devicesList = [
    { key: 1, icon: 'phone', tooltip: 'Phone' },
    { key: 2, icon: 'tablet', tooltip: 'Tablet' },
    { key: 3, icon: 'desktop', tooltip: 'Desktop' },
];

const PreviewPostSection = () => {
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

                </div>
            </div>
        </section>
    );
};

export default memo(PreviewPostSection);