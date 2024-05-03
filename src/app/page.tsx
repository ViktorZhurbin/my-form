"use client";

import { useRef, useState } from "react";
import { Block, BlockVariant } from "@/constants/blockTypes";
import { BlockWrapper } from "@/components/BlockWrapper/BlockWrapper";
import styles from "./page.module.css";
import { BlockItem } from "@/components/BlockItem/BlockItem";
import { Button } from "@radix-ui/themes";

const blocks: Block[] = [
	{
		type: BlockVariant.YesNo,
		question: "Some Question",
		options: ["Yes", "No"],
	},
	{
		type: BlockVariant.YesNo,
		question: "Some Question",
		options: ["Yes", "No"],
	},
	{
		type: BlockVariant.YesNo,
		question: "Some Question",
		options: ["Yes", "No"],
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
						<BlockItem stepNumber={index + 1} block={block} />
					</BlockWrapper>
				);
			})}

			<div className={styles.navigation}>
				<Button disabled={step === 0} onClick={goToPreviousStep}>
					Previous
				</Button>
				<Button disabled={step === blocks.length - 1} onClick={goToNextStep}>
					Next
				</Button>
			</div>
		</main>
	);
}
