import { CarProps, FilterProps } from "@/types";

const apiurl = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
const options = {
	method: "GET",
	headers: {
		"x-rapidapi-key": "a10c7fb9b7msh41b33d797ff21fap1f6fccjsnca1d7ce20a1f",
		"x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
	},
};

export async function getCars(filters: FilterProps) {
	const url = generateApiUrlParams(filters);
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05;

	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export function generateCarImageUrl(car: CarProps, angle?: string) {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, year, model } = car;
	url.searchParams.append("customer", "hrjavascript-mastery");
	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split(" ")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	url.searchParams.append("angle", `${angle}`);

	return `${url}`;
}

function generateApiUrlParams(filters: FilterProps) {
	const { manufacturer, fuel, year, limit, model } = filters;

	const url = new URL(apiurl);
	url.searchParams.append("make", manufacturer || "toyota");
	url.searchParams.append("year", `${year}` || "2022");
	url.searchParams.append("model", model || "corolla");
	url.searchParams.append("limit", `${limit}` || "10");
	url.searchParams.append("fuel_type", fuel || "");

	return `${url}`;
}

export function updateSearchParams(type: string, value: string) {
	const searchParams = new URLSearchParams(window.location.search);

	searchParams.set(type, value);

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
	return newPathname;
}
