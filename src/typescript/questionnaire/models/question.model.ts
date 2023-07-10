import { Answer } from "./answer.model";

export type QuestionType =
  | "single"
  | "pictureSelection"
  | "address"
  | "texttt"
  | "finish"
  | "finish-complex";

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  additionalText?: string;
  answers: Array<Answer>;
  next?: string;
}
