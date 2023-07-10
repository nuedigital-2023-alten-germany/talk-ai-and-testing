import { Question } from './question.model';

export interface Questionnaire {
  id: string;
  questions: Array<Question>;
}
