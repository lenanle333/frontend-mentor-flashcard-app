import Button from "../../ui/Button";
import plusIcon from "../../../assets/images/icon-circle-plus.svg";
import { TextInput } from "../../ui/TextInput";
import { TextArea } from "../../ui/TextArea";
import FormContainer from "../../ui/FormContainer";

export default function FlashcardForm() {
	return (
		<FormContainer>
			<form className="flex flex-col items-start gap-200 self-stretch">
				<TextInput
					id="question"
					label="Question"
					placeholder="e.g., What is the capital of France?"
					name="flashcard-question"
				/>
				<TextArea id="answer" label="Answer" placeholder="e.g., Paris" name="flashcard-answer" />
				<TextInput id="category" label="Category" placeholder="e.g., Geography" name="flashcard-category" />
			</form>
			<div className="flex flex-col content-center items-start self-stretch">
				<Button variant="primary">
					<img src={plusIcon} alt="plus icon" />
					Create Card
				</Button>
			</div>
		</FormContainer>
	);
}
