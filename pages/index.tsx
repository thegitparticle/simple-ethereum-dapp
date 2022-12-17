import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

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
			<main className={styles.main}></main>
			<div className="flex w-full justify-center items-center bg-dark snap-end border-t-2 border-light/25">
				<p className="text-mid_ground font-display text-xs my-12">
					Simple Ethereum Dapp
				</p>
			</div>
		</>
	);
}
