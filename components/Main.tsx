import React from "react";
import { useAccount } from "wagmi";
import Home from "./Home";
import Landing from "./Landing";

export default function Main() {
	const { isConnected } = useAccount();

	return (
		<div className="flex w-full h-screen justify-center items-center bg-dark">
			{isConnected ? <Home /> : <Landing />}
		</div>
	);
}
