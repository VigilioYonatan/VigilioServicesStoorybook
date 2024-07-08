import type { JSX } from "preact/jsx-runtime";
import LoaderSubmit from "~/stories/2024/loaders/components/LoaderSubmit";

interface FormButtonSubmitProps {
	isLoading: boolean;
	title: string;
	className?: string;
	ico?: JSX.Element | JSX.Element[] | null;
	disabled?: boolean;
}
function FormButtonSubmit({
	isLoading,
	title,
	className,
	disabled = false,
	ico = <i class="fa-regular fa-floppy-disk mr-1" />,
}: FormButtonSubmitProps) {
	return (
		<button
			type="submit"
			class={`${className} text-xs bg-primary py-2 px-4 rounded-md text-white font-bold uppercase mt-3 flex items-center gap-1`}
			disabled={disabled}
		>
			{isLoading ? (
				<LoaderSubmit color="white" />
			) : (
				<>
					{ico}
					{title}
				</>
			)}
		</button>
	);
}

export default FormButtonSubmit;
