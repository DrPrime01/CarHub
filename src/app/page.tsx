import Image from "next/image";

import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
import { getCars } from "@/utils";
import { FilterProps } from "@/types";
import { yearsOfProduction, fuels } from "@/constants";

interface SearchParamsProps {
	searchParams: FilterProps;
}

export default async function Home({ searchParams }: SearchParamsProps) {
	const { manufacturer, fuel, year, limit, model } = searchParams;
	const cars = await getCars({ manufacturer, fuel, year, limit, model });
	const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore cars you might like</p>
				</div>
				<div className="home__filters">
					<SearchBar />
					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
					{!isDataEmpty ? (
						<section>
							<div className="home__cars-wrapper">
								{cars?.map((car) => (
									<CarCard key={car?.id} car={car} />
								))}
							</div>
							<ShowMore
								pageNumber={(searchParams.limit || 10) / 10}
								isNext={(searchParams.limit || 10) > cars.length}
							/>
						</section>
					) : (
						<div className="home__error-container">
							<h2 className="text-black text-xl font-bold">
								Oops!, no results
							</h2>
							<p>{cars?.message}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
