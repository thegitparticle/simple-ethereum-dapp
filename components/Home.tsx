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
							<p className="flex text-off_light my-2" key={index}>
								{joke.joke}
							</p>
						);
					})}
				</div>
			);
		} else {
			return (
				<div className="flex justify-center items-center flex-col">
					<p className="flex text-off_light my-2">no jokes yet</p>
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
		<div className="flex w-full h-screen flex-col justify-center items-center">
			<p className="text-off_light font-display text-xs my-12">
				Home - Simple Ethereum Dapp
			</p>
			<p className="text-off_light font-display text-xs my-12">
				{address}
			</p>
			<input
				type="text"
				id="joke"
				name="new joke to be typed here"
				minLength={3}
				maxLength={100}
				onChange={updateJokeTyped}
				className="flex h-10 w-3/5 bg-gray-800/25 text-md text-gray-500 font-body font-bold text-center rounded-xl"
			/>
			<button
				// disabled={!write}
				onClick={() => write?.()}
				className="flex py-2 px-4 bg-green-500 my-4 rounded-full text-off_dark"
			>
				Tell Joke
			</button>
			<RenderOldJokes />
			<ConnectKitButton />
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
