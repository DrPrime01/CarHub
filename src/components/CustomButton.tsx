"use client";
import Image from "next/image";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
	isDisabled,
	type,
	handleClick,
	title,
	containerStyles,
	textStyles,
	rightIcon,
}: CustomButtonProps) {
	return (
		<button
			disabled={isDisabled}
			type={type || "button"}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						alt="right icon"
						fill
						className="object-contain"
					/>
				</div>
			)}
		</button>
	);
}
