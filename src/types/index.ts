import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	isDisabled?: boolean;
	type?: "button" | "submit";
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	title: string;
	containerStyles?: string;
	textStyles?: string;
	rightIcon?: string;
}

export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}

export interface OptionProps {
	title: string;
	value: string;
}

export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: 26;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface FilterProps {
	manufacturer: string;
	fuel: string;
	year: number;
	limit: number;
	model: string;
	pageNumber?: number;
}

export interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
}
