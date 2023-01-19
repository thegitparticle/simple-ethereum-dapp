import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount, useConnect } from "wagmi";

export default function Landing() {
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center">
			<p className="text-off_light font-display text-3xl mt-12 mb-4 font-extrabold">
				Simple-Ethereum-Dapp
			</p>
			<p className="text-off_light font-display text-md mb-12 mt-4 font-regular text-center">
				just tell a joke to the ethereum contract and receive some ether
				in return. <br /> currently runs only on the goerli testnet.
			</p>
			<ConnectKitButton />
		</div>
	);
}
