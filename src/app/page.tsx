"use client";

import { useState } from "react";
import { BlockTypes } from "@/constants/blockTypes";
import styles from "./page.module.css";

const blocks = [
	{
		type: BlockTypes.YesNo,
		question: "Q1",
	},
	{
		type: BlockTypes.YesNo,
		question: "Q2",
	},
	{
		type: BlockTypes.YesNo,
		question: "Q3",
	},
];

const getBlockWrapperStyles = (index: number, step: number) => {
	switch (index) {
		case step:
			return {};

		case step - 1:
			return { opacity: 0, transform: `translateY(-100vh)` };

		case step + 1:
			return { opacity: 0, transform: `translateY(100vh)` };

		default:
			return { display: "none" };
	}
};

export default function Home() {
	const [step, setStep] = useState(0);

	return (
		<main className={styles.main}>
			{blocks.map((block, index) => {
				return (
					<section
						key={block.question}
						className={styles.blockWrapper}
						style={getBlockWrapperStyles(index, step)}
					>
						<div className={styles.block}>{block.question}</div>
					</section>
				);
			})}

			<div className={styles.navigation}>
				<button
					disabled={step === 0}
					onClick={() => setStep((step) => step - 1)}
				>
					Previous
				</button>
				<button
					disabled={step === blocks.length - 1}
					onClick={() => setStep((step) => step + 1)}
				>
					Next
				</button>
			</div>
		</main>
	);
}
