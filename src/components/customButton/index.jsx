import { memo } from "react";
import '../../styles/components/button.css';

const btnClass = {
    primary: 'primary-button',
    default: 'default-button'
};

const CustomButton = ({ classes, title, tooltip, type='default', onClick, btnType }) => {
    return (
        <button
            className={`custom-button cursor-pointer ${classes || ''} ${btnClass?.[type]}`}
            onClick={ onClick || (() => {}) }
            title={tooltip || title}
            type={btnType}
        >
            { title }
        </button>
    );
};

export default memo(CustomButton);