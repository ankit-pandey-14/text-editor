import { memo } from "react";
import '../../styles/components/sidebar.css';
import CustomButton from "../customButton";

const SideBar = () => {
    return (
        <aside className="side-bar">
            {/* Sidebar */}

            <CustomButton
                title={'Write Post'}
                onClick={() => {}}
                type="primary"
                classes={'d-block'}
            />
        </aside>
    );
};

export default memo(SideBar);