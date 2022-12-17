import Image from "next/image";
import React from "react";
import { useAccount } from "wagmi";
import Home from "./Home";
import Landing from "./Landing";

export default function Main() {
	const { isConnected } = useAccount();

	return (
		<div className="flex inset-0 w-full h-screen justify-center items-center bg-dark">
			<Image
				src="/gradients-bg.svg"
				layout="fill"
				alt="gradient background below the blur"
			/>
			<div className="absolute inset-0 bg-background backdrop-blur w-screen h-screen flex-col justify-center items-center" />
			<div className="absolute inset-0 flex flex-col w-full h-screen overflow-y-scroll">
				{isConnected ? <Home /> : <Landing />}
			</div>
		</div>
	);
}
