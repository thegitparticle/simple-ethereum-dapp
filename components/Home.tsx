import React from "react";
import {
	useAccount,
	useConnect,
	useContractWrite,
	usePrepareContractWrite,
} from "wagmi";
import { ConnectKitButton } from "connectkit";
import Jokes from "../utils/Jokes.json";

export default function Home() {
	const contractAddress = "0xE36bC68Eeb08719536e9D39D32775335Fe158e13";
	const contractABI = Jokes.abi;

	const { address } = useAccount();

	const jokeString: string =
		"Superman once went to a party. Some people wore bitcoin suits, other dogecoin. Superman was upset, no one told him it was a crypto night.";

	const { config, error } = usePrepareContractWrite({
		address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
		abi: contractABI,
		functionName: "newJoke",
		args: [jokeString],
		chainId: 5,
	});

	const { data, isLoading, isSuccess, write } = useContractWrite(config);

	return (
		<div className="flex w-full h-screen flex-col justify-center items-center">
			<p className="text-off_light font-display text-xs my-12">
				Home - Simple Ethereum Dapp
			</p>
			<p className="text-off_light font-display text-xs my-12">
				{address}
			</p>
			<button
				// disabled={!write}
				onClick={() => write?.()}
				className="flex py-2 px-4 bg-green-500 my-4 rounded-full text-off_dark"
			>
				Tell Joke
			</button>
			<ConnectKitButton />
		</div>
	);
}
