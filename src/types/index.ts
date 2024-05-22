import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    type?: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    title: string;
    containerStyles?: string;
}