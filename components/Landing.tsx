import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount, useConnect } from "wagmi";

export default function Landing() {
	return (
		<div className="flex w-full justify-center items-center bg-dark">
			<p className="text-off_light font-display text-xs my-12">
				Landing - Simple Ethereum Dapp
			</p>
			<ConnectKitButton />
		</div>
	);
}
