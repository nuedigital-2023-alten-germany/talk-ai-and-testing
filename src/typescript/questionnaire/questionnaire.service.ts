/* eslint-disable no-param-reassign */

export interface Questionnaire {
  id: string;
  questions: Array<Question>;
}

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

export interface Answer {
  text: string;
  value: string;
  next: string;
}

type QuestionMap = Record<string, Question>;
type Answers = Record<string, string>;

export class QuestionnaireService {
  private currentQuestionId = "";

  private readonly questionMap: QuestionMap = {};

  private readonly answers: Answers = {};

  constructor(private readonly questionnaire: Questionnaire) {
    this.questionMap = this.buildQuestionMap();
  }

  public getCurrentQuestion(): Question {
    if (this.getCurrentQuestionId()) {
      return this.questionMap[this.getCurrentQuestionId()];
    }

    return this.questionnaire.questions[0];
  }

  public setCurrentQuestionId(id: string): void {
    this.currentQuestionId = id;
  }

  public getCurrentQuestionId(): string {
    return this.currentQuestionId;
  }

  public getQuestionMap(): QuestionMap {
    return this.questionMap;
  }

  public answerQuestion(questionId: string, answerValue: string): string {
    this.answers[questionId] = answerValue;
    this.currentQuestionId = this.getNextQuestionId(questionId, answerValue);

    this.removeLaterAnswers(questionId);

    return this.getCurrentQuestionId();
  }

  public getAnswers(): Answers {
    return this.answers;
  }

  private buildQuestionMap(): QuestionMap {
    return this.questionnaire.questions.reduce(
      (qMap: QuestionMap, question) => {
        qMap[question.id] = question;
        return qMap;
      },
      {}
    );
  }

  private getNextQuestionId(
    currentQuestionId: string,
    answerValue: string
  ): string {
    if (!currentQuestionId) {
      currentQuestionId = this.getCurrentQuestion().id;
    }

    const question = this.questionMap[currentQuestionId];
    const answer = question.answers.find((ans) => ans.value === answerValue);

    if (answer) {
      return answer.next;
    }

    if (question.next) {
      return question.next;
    }

    throw new Error(
      `Question ${currentQuestionId} has no answer with value ${answerValue}`
    );
  }

  private removeLaterAnswers(currentQuestionId: string): void {
    Object.keys(this.answers).forEach((key) => {
      const [currentQuestionNumber] = currentQuestionId.split(".");
      const [answerNumber] = key.split(".");

      if (answerNumber > currentQuestionNumber) {
        delete this.answers[key];
      }
    });
  }
}
