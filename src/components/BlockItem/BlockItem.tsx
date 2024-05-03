import { Block } from "@/constants/blockTypes";
import styles from "./BlockItem.module.css";
import { Button, Heading } from "@radix-ui/themes";

type BlockItemProps = {
	block: Block;
	stepNumber: number;
	isLast: boolean;
	onSubmitForm: () => void;
	goToNextStep: () => void;
};

export const BlockItem = ({
	block,
	stepNumber,
	isLast,
	onSubmitForm,
	goToNextStep,
}: BlockItemProps) => {
	let buttonText;
	let onSubmit;

	if (isLast) {
		buttonText = "Submit";
		onSubmit = onSubmitForm;
	} else {
		buttonText = "OK";
		onSubmit = goToNextStep;
	}

	return (
		<div className={styles.wrapper}>
			<Heading className={styles.header}>
				{stepNumber}. {block.question}
			</Heading>

			<div className={styles.optionWrapper}>
				{block.options.map((option) => (
					<Button
						key={option}
						variant="outline"
						onClick={() => {
							console.log("click");
						}}
					>
						{option}
					</Button>
				))}
			</div>

			<Button className={styles.submitButton} onClick={onSubmit}>
				{buttonText}
			</Button>
		</div>
	);
};
