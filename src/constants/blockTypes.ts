enum BlockVariant {
	YesNo,
}

type Block = {
	type: BlockVariant;
	question: string;
};

export { BlockVariant };

export type { Block };
