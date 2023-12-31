// Generated by CodiumAI

import { QuestionnaireService } from "../../../../src/typescript/questionnaire/questionnaire.service";

/*
Code Analysis

Main functionalities:
The QuestionnaireService class is responsible for managing the state of a questionnaire, including the current question, the user's answers, and the question map. It allows the user to answer questions, retrieve the current question, and get the answers submitted so far. The class also handles the logic for determining the next question based on the user's answer.

Methods:
- getCurrentQuestion(): returns the current question object
- setCurrentQuestionId(id: string): sets the current question ID
- getCurrentQuestionId(): returns the current question ID
- getQuestionMap(): returns the question map object
- answerQuestion(questionId: string, answerValue: string): records the user's answer and determines the next question
- getAnswers(): returns the answers submitted so far

Fields:
- currentQuestionId: the ID of the current question
- questionMap: a map of all the questions in the questionnaire
- answers: a map of the user's answers, with question IDs as keys and answer values as values
*/

describe("QuestionnaireService_class", () => {
  // Tests that getCurrentQuestion returns the first question if no current question id is set
  it("test_get_current_question_no_id", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(service.getCurrentQuestion()).toEqual(questionnaire.questions[0]);
  });

  /*  
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  
  Testfall haben wir auch. Ist etwas minimalistischer geschrieben als unserer. 
  
  Die Testdaten werden für jeden Fall individuell angelegt (Kein beforeEach o.ä.) 
  */

  // Tests that getCurrentQuestion returns the current question if current question id is set
  it("test_get_current_question_with_id", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    service.setCurrentQuestionId("1.2");
    expect(service.getCurrentQuestion()).toEqual(questionnaire.questions[1]);
  });
  /*  
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Testfall haben wir auch.
  */

  // Tests that setCurrentQuestionId sets the current question id
  it("test_set_current_question_id", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    service.setCurrentQuestionId("1.2");
    expect(service.getCurrentQuestionId()).toEqual("1.2");
  });
  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Diesen Test haben wir auch.
  */

  // Tests that getQuestionMap returns the question map
  it("test_get_question_map", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(service.getQuestionMap()).toEqual({
      "1.1": questionnaire.questions[0],
      "1.2": questionnaire.questions[1],
    });
  });
  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Diesen Test haben wir auch.

  Wenn man before Hooks benutzt sollte man hier nicht mit questionnaire.question[0] arbeiten da unleserlich.
  */

  // Tests that answerQuestion updates answers and sets current question id to next question id
  it("test_answer_question_with_next", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [
            { value: "yes", next: "1.2" },
            { value: "no", next: "1.3" },
          ],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
        {
          id: "1.3",
          type: "text",
          text: "Question 1.3",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(service.answerQuestion("1.1", "yes")).toEqual("1.2");
    expect(service.getAnswers()).toEqual({ "1.1": "yes" });
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Diesen Test haben wir auch, nur in getrennten Testfällen

  Answers können so nicht gebaut werden, die Property 'Answer:text' fehlt in den Testdaten.
  */

  // Tests that getAnswers returns the answers
  it("test_get_answers", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [
            { value: "yes", next: "1.2" },
            { value: "no", next: "1.3" },
          ],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
        {
          id: "1.3",
          type: "text",
          text: "Question 1.3",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    service.answerQuestion("1.1", "yes");
    expect(service.getAnswers()).toEqual({ "1.1": "yes" });
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Wurde im Test oben bereits getestet, darum Wiederholung.
  */

  // Tests that getCurrentQuestion throws an error if no questions in questionnaire
  it("test_get_current_question_no_questions", () => {
    const questionnaire = {
      id: "1",
      questions: [],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(() => service.getCurrentQuestion()).toThrowError(
      "Questionnaire has no questions"
    );
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Diesen Testfall haben wir auch.

  Der Fehler wird nicht geworfen, hier müsste undefined zurückkommen. 
  
  Test fehlerhaft, diese Fehlermeldung existiert nicht im Code. 
  Vermutung: Dieser Text muss aus dem AI language model stammen.
  */

  // Tests that getNextQuestionId throws an error if answer value not found and no next question id
  it("test_get_next_question_id_no_answer_or_next", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(() => service.answerQuestion("1.1", "yes")).toThrowError(
      "Question 1.1 has no answer with value yes"
    );
  });
  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  Diesen Test haben wir auch.

  Fehlerbedingung wird richtig überprüft, der Code wurde korrekt analysiert.
  */

  // Tests that removeLaterAnswers deletes answers for later questions
  it("test_remove_later_answers", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
        {
          id: "1.3",
          type: "text",
          text: "Question 1.3",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    service.answerQuestion("1.1", "yes");
    service.answerQuestion("1.2", "no");
    expect(service.getAnswers()).toEqual({ "1.1": "yes", "1.2": "no" });
    service.answerQuestion("1.1", "no");
    expect(service.getAnswers()).toEqual({ "1.1": "no" });
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  
  Test an sich gut aber Testdaten falsch! Hier fehlen Answers!
  */

  // Tests that buildQuestionMap creates question map from questionnaire
  it("test_build_question_map", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(service.getQuestionMap()).toEqual({
      "1.1": questionnaire.questions[0],
      "1.2": questionnaire.questions[1],
    });
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft
  Praktisch identischer Test wie ab Zeile 114, Wiederholung.
  */

  // Tests that getNextQuestionId sets current question id to first question if no current question id is set
  it("test_get_next_question_id_no_current_id", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(service.getNextQuestionId(null, "yes")).toEqual("1.1");
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  
  Code testet fälschlicherweise eine private Methode, Codeanalyse war also fehlerhaft. 
  */

  // Tests that getNextQuestionId returns next question id from answer if found
  it("test_get_next_question_id_answer_found", () => {
    const questionnaire = {
      id: "1",
      questions: [
        {
          id: "1.1",
          type: "text",
          text: "Question 1.1",
          answers: [
            { value: "yes", next: "1.2" },
            { value: "no", next: "1.3" },
          ],
        },
        {
          id: "1.2",
          type: "text",
          text: "Question 1.2",
          answers: [],
        },
        {
          id: "1.3",
          type: "text",
          text: "Question 1.3",
          answers: [],
        },
      ],
    };
    const service = new QuestionnaireService(questionnaire);
    expect(service.getNextQuestionId("1.1", "yes")).toEqual("1.2");
  });

  /* 
  Typisierung falsch, man muss hier nachbessern damit der Code keinen Fehler wirft.
  
  Code testet fälschlicherweise eine private Methode, Codeanalyse war also fehlerhaft. 
  */
});

/*
Fazit:

Codium AI hat massive Probleme, komplexere Testdaten korrekt zu erzeugen und die Methoden wirklich zu analysieren. 
Daher sind viele der generierten Tests nicht lauffähig. 

Auch mit Typescript-spezifischen Themen wie Typisierung oder Sichtbarkeit von Methoden kommt 
das Tool noch nicht zurecht. 

Als Inspiration für "echte" Tests können die generierten Tests verwendet werden, 
aber keinesfalls als Ersatz. 
*/
