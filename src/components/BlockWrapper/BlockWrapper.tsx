import { ReactElement } from "react";

type BlockWrapperProps = {
	children: ReactElement;
	step: number;
	index: number;
	className: string;
};
export const BlockWrapper = ({
	step,
	index,
	className,
	children,
}: BlockWrapperProps) => {
	return (
		<section className={className} style={getBlockWrapperStyles(index, step)}>
			{children}
		</section>
	);
};

function getBlockWrapperStyles(index: number, step: number) {
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
}
