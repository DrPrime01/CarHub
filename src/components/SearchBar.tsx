"use client";
import React, { useState } from "react";
import Image from "next/image";

import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

export default function SearchBar() {
	const router = useRouter();
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (manufacturer === "" && model === "") {
			return alert("Please fill in the search bar");
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}
		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;
		router.push(newPathname);
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherStyles="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="absolute w-5 h-5 ml-4"
					alt="car model"
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder="Tiguan"
					className="searchbar__input"
				/>
				<SearchButton otherStyles="sm:hidden" />
			</div>
			<SearchButton otherStyles="max-sm:hidden" />
		</form>
	);
}

function SearchButton({ otherStyles }: { otherStyles: string }) {
	return (
		<button type="submit" className={`-ml-3 z-10 ${otherStyles}`}>
			<Image
				src="/magnifying-glass.svg"
				alt="magnifying glass"
				width={40}
				height={40}
			/>
		</button>
	);
}
