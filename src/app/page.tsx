"use client";

import { useRef, useState } from "react";
import { Block, BlockVariant } from "@/constants/blockTypes";
import { BlockWrapper } from "@/components/BlockWrapper/BlockWrapper";
import styles from "./page.module.css";
import { BlockItem } from "@/components/BlockItem/BlockItem";

const blocks: Block[] = [
	{
		type: BlockVariant.YesNo,
		question: "Q1",
	},
	{
		type: BlockVariant.YesNo,
		question: "Q2",
	},
	{
		type: BlockVariant.YesNo,
		question: "Q3",
	},
];

export default function Home() {
	const [step, setStep] = useState(0);

	const goToPreviousStep = () => {
		if (step === 0) {
			return;
		}

		setStep((step) => step - 1);
	};

	const goToNextStep = () => {
		if (step === blocks.length - 1) {
			return;
		}

		setStep((step) => step + 1);
	};

	return (
		<main className={styles.main}>
			{blocks.map((block, index) => {
				return (
					<BlockWrapper
						key={block.question}
						className={styles.blockWrapper}
						index={index}
						step={step}
					>
						<BlockItem block={block} className={styles.block} />
					</BlockWrapper>
				);
			})}

			<div className={styles.navigation}>
				<button disabled={step === 0} onClick={goToPreviousStep}>
					Previous
				</button>
				<button disabled={step === blocks.length - 1} onClick={goToNextStep}>
					Next
				</button>
			</div>
		</main>
	);
}
