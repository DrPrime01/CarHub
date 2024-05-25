"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import CustomButton from "./CustomButton";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
	const router = useRouter();
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPathname = updateSearchParams("limit", `${newLimit}`);

		router.push(newPathname);
	};
	return (
		<div className="w-full flex-center gap-5 mt-1">
			{!isNext && (
				<CustomButton
					title="Show More"
					type="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
}
