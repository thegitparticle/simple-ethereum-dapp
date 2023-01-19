import React, { useState } from "react";
import {
	useAccount,
	useConnect,
	useContractWrite,
	usePrepareContractWrite,
	useContractRead,
} from "wagmi";
import { ConnectKitButton } from "connectkit";
import Jokes from "../utils/Jokes.json";

export default function Home() {
	const [jokeTyped, setJokeTyped] = useState<string>("");

	const updateJokeTyped = (event: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setJokeTyped(event.target.value);
	};

	const contractABI = Jokes.abi;

	const { address } = useAccount();

	const { data, isError, isLoading } = useContractRead({
		address: "0x22d52a1cd58e6ec803ca9B942d70Cd8Db44f08Aa",
		abi: contractABI,
		functionName: "getAllJokes",
	});

	function RenderOldJokes() {
		const jokesArray = convertToArray(data);

		if (jokesArray.length > 0) {
			return (
				<div className="flex justify-center items-center flex-col">
					{jokesArray.map((joke, index) => {
						return (
							<p
								className="flex text-off_light my-2 font-body"
								key={index}
							>
								{joke.joke}
							</p>
						);
					})}
				</div>
			);
		} else {
			return (
				<div className="flex justify-center items-center flex-col">
					<p className="flex text-off_light my-2 font-body">
						no jokes yet
					</p>
				</div>
			);
		}
	}

	const { config, error } = usePrepareContractWrite({
		address: "0x22d52a1cd58e6ec803ca9B942d70Cd8Db44f08Aa",
		abi: contractABI,
		functionName: "newJoke",
		args: [jokeTyped],
		chainId: 5,
	});

	const { write } = useContractWrite(config);

	return (
		<div className="flex w-full h-screen flex-col justify-start items-center">
			<div className="flex w-5/6 flex-row items-center justify-between my-12">
				<p className="text-off_light font-display text-3xl font-extrabold">
					Home - Simple Ethereum Dapp
				</p>
				<ConnectKitButton />
			</div>
			<div className="flex w-full flex-col items-center justify-center my-12">
				<input
					type="text"
					id="joke"
					name="new joke to be typed here"
					minLength={3}
					maxLength={100}
					onChange={updateJokeTyped}
					placeholder="new joke to be typed here"
					className="flex h-10 w-3/5 bg-gray-800/25 text-md text-gray-200 placeholder:text-gray-600 font-body font-bold text-center rounded-xl"
				/>
				<button
					// disabled={!write}
					onClick={() => write?.()}
					className="flex py-2 px-4 bg-green-500 my-4 rounded-full text-off_dark font-body font-bold "
				>
					tell joke
				</button>
			</div>
			<p className="flex w-5/6 text-off_light font-display text-3xl font-extrabold my-6">
				previously told jokes
			</p>
			<RenderOldJokes />
		</div>
	);
}

function convertToArray(val: unknown): any[] {
	// Use type assertion to tell the TypeScript compiler that val is an array
	const arr = val as any[];

	// Use Array.isArray() to check if val is actually an array
	if (Array.isArray(arr)) {
		return arr;
	} else {
		// If val is not an array, return an empty array
		return [];
	}
}
