import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount, useConnect } from "wagmi";

export default function Landing() {
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center">
			<p className="text-off_light font-display text-lg mt-12 mb-2">
				Simple-Ethereum-Dapp
			</p>
			<p className="text-off_light font-display text-xs mb-12 mt-2">
				just tell a joke to the ethereum contract and receive some ether
				in return. currently runs only on the goerli testnet.
			</p>
			<ConnectKitButton />
		</div>
	);
}
