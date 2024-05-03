enum BlockVariant {
	YesNo,
	MultipleChoice,
}

type Block = {
	type: BlockVariant;
	question: string;
	options: string[];
};

export { BlockVariant };

export type { Block };
