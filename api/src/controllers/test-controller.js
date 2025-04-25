const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTest = async (req, res) => {
    const {
        title,
        description,
        img,
        beginningDate,
        endDate,
        time,
        groupId,
        teacherId,
        questions
    } = req.body;

    try {
        const test = await prisma.testTasks.create({
            data: {
                title,
                description,
                img,
                beginningdate: new Date(beginningDate),
                enddatetime: new Date(endDate),
                time: new Date(time),
                groupid: groupId,
                teacherid: teacherId,
                questions: {
                    create: questions.map(question => ({
                        description: question.description,
                        img: question.img || null,
                        answers: {
                            create: question.answers.map(answer => ({
                                text: answer.text,
                                iscorrect: answer.isCorrect ?? false
                            }))
                        }
                    }))
                }
            },
            include: {
                questions: {
                    include: {
                        answers: true
                    }
                }
            }
        });

        res.status(201).json({
            message: 'Тест успешно создан с вопросами и ответами',
            test
        });
    } catch (error) {
        console.error('Ошибка при создании теста:', error);
        res.status(500).json({
            message: 'Ошибка при создании теста',
            error: error.message
        });
    }
};