import React from 'react';

interface IconRef {
    id: string;
    viewBox: string;
}

interface Props {
    iconRef: IconRef;
    size?: number;
    className?: string;
}

const CustomSVG = ({ iconRef, size, className, ...other }: Props) => {
    const viewBox = { 'view-box': iconRef.viewBox };
    return (
        <svg className={className} height={size} width={size} {...viewBox} {...other} focusable={false}>
            <use xlinkHref={`#${iconRef.id}`} />
        </svg>
    );
};

export default CustomSVG;
