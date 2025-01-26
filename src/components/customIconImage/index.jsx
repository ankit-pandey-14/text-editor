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
            />
        </div>
    );
};

export default CustomIconImage;