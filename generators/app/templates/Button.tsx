import * as React from "react";

export interface IButtonProps {
    type?: string;
    id?: string;
    cssClass?: string;
    disabled?: boolean;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<IButtonProps> = ({
    type,
    id,
    children,
    cssClass,
    disabled,
    handleClick,
}) => {
    return (
        <button
            id={id}
            type={type}
            className={cssClass && `${cssClass}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
