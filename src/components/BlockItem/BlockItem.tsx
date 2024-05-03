import { Block } from "@/constants/blockTypes";
import styles from "./BlockItem.module.css";
import { Button, Heading } from "@radix-ui/themes";

type BlockItemProps = {
	block: Block;
	stepNumber: number;
};

export const BlockItem = ({ stepNumber, block }: BlockItemProps) => {
	return (
		<div className={styles.wrapper}>
			<Heading>
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

			<Button>OK</Button>
		</div>
	);
};
