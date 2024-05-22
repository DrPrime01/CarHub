"use client";
import Image from "next/image";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
	isDisabled,
	type,
	handleClick,
	title,
	containerStyles,
}: CustomButtonProps) {
	return (
		<button
			disabled={isDisabled}
			type={type || "button"}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	);
}
