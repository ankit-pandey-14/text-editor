import { memo } from 'react';
import '../../styles/components/image.css';


const CustomIconImage = ({ icon, imageSrc, altText, tooltip, onClick, classes }) => {
    return (
        <div
            className={`custom-image ${classes || ''}`}
            title={tooltip}
            onClick={onClick || (() => {})}
        >
            <img
                src={ icon || imageSrc }
                alt={altText}
                loading='lazy'
            />
        </div>
    );
};

export default memo(CustomIconImage);