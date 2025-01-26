import { memo } from "react";
import '../../styles/components/sidebar.css';
import CustomButton from "../customButton";
import CustomText from "../customText";

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
                    />
                }
                onClick={() => {}}
                type="primary"
                classes={'d-block write-post-btn'}
            />

        </aside>
    );
};

export default memo(SideBar);