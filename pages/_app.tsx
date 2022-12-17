import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

export default function App({ Component, pageProps }: AppProps) {
	const alchemyId = process.env.ALCHEMY_ID;

	const client = createClient(
		getDefaultClient({
			appName: "Simple Ethereum Dapp",
			alchemyId,
		})
	);

	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider>
				<Component {...pageProps} />
			</ConnectKitProvider>
		</WagmiConfig>
	);
}
