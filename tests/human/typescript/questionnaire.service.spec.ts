import { QuestionnaireService, Questionnaire } from "../../../src/typescript/questionnaire/questionnaire.service";

describe('Questionnaire Service', () => {

    let questionnaireService: QuestionnaireService;

    let validQuestionnaire: Questionnaire = {
        id: '1',
        questions: [
            {
                id: '1',
                additionalText: 'some valid text',
                text: 'What is your favorite fruit?',
                type: "single",
                answers: [
                    {
                        text: 'banana',
                        next: '2.a',
                        value: 'banana'
                    },
                    {
                        text: 'kiwi',
                        next: '2.b',
                        value: 'kiwi'
                    },
                    {
                        text: 'mango',
                        next: '2.c',
                        value: 'mango'
                    }
                ]

            },
            {
                id: '2.a',
                additionalText: 'some valid text again',
                text: 'Why do you like bananas?',
                type: "single",
                answers: [
                    {
                        text: 'because of their form',
                        next: '3',
                        value: 'form'
                    },
                    {
                        text: 'because of their color',
                        next: '3',
                        value: 'color'
                    },
                    {
                        text: 'because they are bent',
                        next: '3',
                        value: 'bent'
                    }],
                next: '3'
            },
            {
                id: '3',
                additionalText: 'last valid text',
                text: 'thank you for your participation',
                type: "finish",
                answers: [
                    {
                        text: 'Thank you, too',
                        next: '',
                        value: 'thanks'
                    }
                ]
            }
        ]
    }

    test('should get initialized correctly', () => {
        questionnaireService = new QuestionnaireService(validQuestionnaire)

        expect(questionnaireService.getQuestionMap()).toEqual({
            "1": {
                "additionalText": "some valid text",
                "answers": [{"next": "2.a", "text": "banana", "value": "banana"}, {
                    "next": "2.b",
                    "text": "kiwi",
                    "value": "kiwi"
                }, {"next": "2.c", "text": "mango", "value": "mango"}],
                "id": "1",
                "text": "What is your favorite fruit?",
                "type": "single"
            },
            "2.a": {
                "additionalText": "some valid text again",
                "answers": [
                    {"next": "3", "text": "because of their form", "value": "form"},
                    {"next": "3", "text": "because of their color", "value": "color"},
                    {"next": "3", "text": "because they are bent", "value": "bent"}
                ],
                "id": "2.a",
                "next": "3",
                "text": "Why do you like bananas?",
                "type": "single"
            },
            "3": {
                "additionalText": "last valid text",
                "answers": [
                    {
                        "next": "",
                        "text": "Thank you, too",
                        "value": "thanks"
                    }
                ],
                "id": "3",
                "text": "thank you for your participation",
                "type": "finish"
            }
        })
    })

    test('should generate empty question map on empty questionnaire', () => {
        questionnaireService = new QuestionnaireService({
            id: '1',
            questions: []
        })

        expect(questionnaireService.getQuestionMap()).toEqual({})
    })

    describe('getCurrentQuestion with valid questionnaire', () => {

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(validQuestionnaire);
        })

        test('should return the correct question with valid currentQuestionId', () => {
            questionnaireService.setCurrentQuestionId('2.a')

            let actualResult = questionnaireService.getCurrentQuestion()

            expect(actualResult).toEqual({
                "additionalText": "some valid text again",
                "id": "2.a",
                "text": "Why do you like bananas?",
                "type": "single",
                "next": "3",
                "answers": [
                    {"next": "3", "text": "because of their form", "value": "form"},
                    {"next": "3", "text": "because of their color", "value": "color"},
                    {"next": "3", "text": "because they are bent", "value": "bent"}
                ]
            });
        })

        test('should return first question with empty currentQuestionId', () => {
            let actualResult = questionnaireService.getCurrentQuestion()

            expect(actualResult).toEqual({
                "additionalText": "some valid text",
                "answers": [
                    {"next": "2.a", "text": "banana", "value": "banana"},
                    {"next": "2.b", "text": "kiwi", "value": "kiwi"},
                    {"next": "2.c", "text": "mango", "value": "mango"}
                ],
                "id": "1",
                "text": "What is your favorite fruit?",
                "type": "single"
            })
        })

        test('should return undefined with not existing currentQuestionId for questionMap', () => {
            questionnaireService.setCurrentQuestionId('12')

            let actualResult = questionnaireService.getCurrentQuestion()

            expect(actualResult).toEqual(undefined)
        })
    })

    describe('getCurrentQuestion with empty questionnaire', () => {

        beforeEach(() => {
            questionnaireService = new QuestionnaireService({
                id: '1',
                questions: []
            })
        })

        test('should return undefined', () => {
            let actualResult = questionnaireService.getCurrentQuestion()

            expect(actualResult).toEqual(undefined)
        })
    })

    describe('setCurrentQuestionId', () => {

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(validQuestionnaire)
        })

        test('should set currentQuestionId correctly', () => {
            questionnaireService.setCurrentQuestionId('12')

            expect(questionnaireService.getCurrentQuestionId()).toEqual('12')
        })
    })

    describe('answerQuestion with valid questionnaire', () => {

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(validQuestionnaire)
        })

        test('should set answers correctly', () => {
            questionnaireService.answerQuestion('1', 'banana')

            expect(questionnaireService.getAnswers()[1]).toEqual('banana')
        })

        test('should return the correct nextQuestionId', () => {
            let actualResult = questionnaireService.answerQuestion('1', 'mango')

            expect(actualResult).toEqual('2.c')
        })

        test('should delete all following answers if earlier question gets answered', () => {
            questionnaireService.answerQuestion('1', 'banana')
            questionnaireService.answerQuestion('2.a', 'bent')
            questionnaireService.answerQuestion('3', 'thanks')

            expect(questionnaireService.getAnswers()).toEqual({"1": "banana", "2.a": "bent", "3": "thanks"});

            questionnaireService.answerQuestion('1', 'mango')

            expect(questionnaireService.getAnswers()).toEqual({"1": "mango"})
        })
    })

    describe('answerQuestion with invalid questionnaire', () => {

        let invalidQuestionnaire: Questionnaire = {
            id: '1',
            questions: [
                {
                    id: '1',
                    text: 'Do you want to loop?',
                    type: "single",
                    additionalText: 'but does it loop?',
                    answers: [
                        {
                            text: 'yes!',
                            next: '1',
                            value: 'yes'
                        }
                    ]
                },
                {
                    id: '2',
                    text: 'Please finish',
                    type: "finish",
                    answers: [{
                        text: 'ok',
                        value: 'ok',
                        next: ''
                    }],
                    additionalText: 'something'
                }
            ]
        }

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(invalidQuestionnaire);
        })

        test('should return same questionId with looping questions', () => {
            let loopingQuestionId = '1'

            let actualResult = questionnaireService.answerQuestion(loopingQuestionId, 'yes')

            expect(actualResult).toEqual(loopingQuestionId)
        })

        test('should return empty string on empty next answer', () => {
            let actualResult = questionnaireService.answerQuestion('2', 'ok')

            expect(actualResult).toEqual('')
        })
    })

    describe('implicit getNextQuestionId', () => {

        let caseSpecificQuestionnair: Questionnaire = {
            id: '1',
            questions: [
                {
                    id: '1',
                    text: 'What is your favorite color?',
                    type: "single",
                    answers: [
                        {
                            text: 'red',
                            value: 'red',
                            next: '2.b'
                        },
                        {
                            text: 'blue',
                            value: 'blue',
                            next: '2.c'
                        }
                    ]
                },
                {
                    id: '2.a',
                    text: 'What is your favorite animal?',
                    type: "single",
                    answers: [
                        {
                            text: 'cat',
                            value: 'cat',
                            next: '3.a'
                        },
                        {
                            text: 'dog',
                            value: 'dog',
                            next: '3.b'
                        }
                    ]
                },
                {
                    id: '2.b',
                    text: 'What is your favorite country?',
                    type: "single",
                    next: '3.a',
                    answers: []
                },
                {
                    id: '2.c',
                    text: 'What is your favorite superhero?',
                    type: "single",
                    answers: []
                },
                {
                    id: '3',
                    text: 'What is your favorite color?',
                    type: "single",
                    next: '2.a',
                    answers: [
                        {
                            text: 'red',
                            value: 'red',
                            next: '2.b'
                        },
                        {
                            text: 'blue',
                            value: 'blue',
                            next: '2.c'
                        }
                    ]
                },
            ]
        }

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(caseSpecificQuestionnair)
        })

        test('should return the correct next question id, if overall next step and valid answer is defined', () => {
            let actualResult = questionnaireService.answerQuestion('3', 'red')

            expect(actualResult).toEqual('2.b')
            expect(actualResult).not.toEqual('2.a')
        })

        test('should return the correct next question id, if overall next step is not defined, but valid answer', () => {
            let actualResult = questionnaireService.answerQuestion('2.a', 'cat')

            expect(actualResult).toEqual('3.a')
        })

        test('should return undefined if the questionId doesnt exist', () => {
            expect(() =>
                questionnaireService.answerQuestion('22.b', '12'))
                .toThrowError('Cannot read properties of undefined (reading \'answers\')')
        })
    })

    describe('implicit removeLaterAnswers with next step in first question', () => {

        let questionnaireWithoutRunningNumber: Questionnaire = {
            id: '1',
            questions: [
                {
                    id: '1',
                    text: 'What is your favorite anime?',
                    type: "single",
                    next: '2',
                    answers: [
                        {
                            text: 'One Piece',
                            next: '30',
                            value: 'one'
                        },
                        {
                            text: 'Black Lagoon',
                            next: '40',
                            value: 'two'
                        }
                    ]
                },
                {
                    id: '30',
                    text: 'What is your favorite character?',
                    type: "single",
                    answers: [
                        {
                            text: 'Luffy',
                            next: '60',
                            value: 'Luffy'
                        },
                        {
                            text: 'Zorro',
                            next: '80',
                            value: 'Zorro'
                        }
                    ]
                },
            ]
        }

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(questionnaireWithoutRunningNumber)
        })

        test('should remove later questions, even if they are not following numbers', () => {
            questionnaireService.answerQuestion('1', 'one')
            questionnaireService.answerQuestion('30', 'Zorro')

            expect(questionnaireService.getAnswers()).toEqual({"1": "one", "30": "Zorro"});

            questionnaireService.answerQuestion('1', 'two')

            expect(questionnaireService.getAnswers()).toEqual({"1": "two"})
        })
    })

    describe('getAnswers', () => {

        beforeEach(() => {
            questionnaireService = new QuestionnaireService(validQuestionnaire)
        })

        test('should return also empty answers', () => {
            let actualResult = questionnaireService.getAnswers()

            expect(actualResult).toEqual({})
        })

        test('should return correct value, after question is answered', () => {
            questionnaireService.answerQuestion('1', 'banana')

            let actualResult = questionnaireService.getAnswers()

            expect(actualResult).toEqual({"1": "banana"})
        })
    })
})
