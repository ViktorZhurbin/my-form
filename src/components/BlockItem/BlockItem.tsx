import { Block } from "@/constants/blockTypes";
import styles from "./BlockItem.module.css";

type BlockItemProps = {
	block: Block;
	className: string;
};

export const BlockItem = ({ block, className }: BlockItemProps) => {
	return <div className={`${styles.block} ${className}`}>{block.question}</div>;
};
