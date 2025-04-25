const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUserGroups = async (req, res) => {
  const userId = Number(req.params.userId);
  console.log('Запрос на получение групп для пользователя:', userId);

  try {
    const groupTitles = await prisma.$queryRaw`
      SELECT g.title
      FROM "User" u
      JOIN "Teacher" t ON t."userid" = u.id
      JOIN "TeacherGroups" tg ON tg."teacherId" = t.id
      JOIN "Groups" g ON g.id = tg."groupId"
      WHERE u.id = ${userId}`
    ;

    console.log('✅ Названия групп (SQL):', groupTitles);

    const titles = groupTitles.map(g => g.title);
    res.status(200).json({ groupTitles: titles });
  } catch (err) {
    console.error('❌ Ошибка при выполнении SQL-запроса:', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};