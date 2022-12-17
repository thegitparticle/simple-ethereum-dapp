import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import { FiGithub } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Simple Ethereum Dapp</title>
				<meta
					name="description"
					content="A simple ethereum dapp to show how to interact with smart contracts."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex-col justify-center items-center flex-1 flex bg-dark">
				<Main />
			</main>
			<div className="flex w-full flex-col justify-center items-center py-12 bg-dark snap-end border-t-2 border-light/25">
				<a
					href="https://github.com/thegitparticle/simple-ethereum-dapp"
					target="_blank"
					rel="noreferrer"
				>
					<FiGithub color="#DDDDDD" />
				</a>
				<p className="text-off_light font-display text-xs my-4">
					Simple Ethereum Dapp
				</p>
			</div>
		</>
	);
}
