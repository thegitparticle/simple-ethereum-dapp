import React from "react";
import { useAccount, useConnect } from "wagmi";
import { ConnectKitButton } from "connectkit";

export default function Home() {
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center">
			<p className="text-off_light font-display text-xs my-12">
				Home - Simple Ethereum Dapp
			</p>
			<ConnectKitButton />
		</div>
	);
}
