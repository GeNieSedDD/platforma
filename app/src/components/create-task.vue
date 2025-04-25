<template>
  <div id="app">
    <navigation />
    <main>
      <!-- Форма создания теста -->
      <div class="heading-question">
        <h2 class="healding-max">Создание теста</h2>
        <span id="popUp-hint" class="healding-3">Посмотреть подсказку</span>
      </div>
      <form class="constructor-test" @submit.prevent="question">
        <!-- Вопрос 1 -->
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="question"
        >
          <div class="heading">
            <h1 class="healding-max">Вопрос</h1>
            <h1 class="healding-max">{{ index + 1 }}</h1>
          </div>
          <div class="content-question">
            <div class="description">
              <div class="input-label">
                <label class="healding-2-bold"
                  >Описание вопроса <span id="required">*</span></label
                >
                <input
                  class="input-default texting-3"
                  type="text"
                  v-model="question.description"
                  placeholder="Введите описание"
                  required
                />
              </div>
              <a href="" class="texting-1-bold">+ Добавить фотографию</a>
            </div>
            <div class="constructor-answers">
              <div class="answers">
                <div
                  v-for="(answer, answerIndex) in question.answers"
                  :key="answerIndex"
                  class="input-label"
                >
                  <div class="radio-label">
                    <input
                      type="radio"
                      :name="'question' + index"
                      :id="'answer' + index + answerIndex"
                      v-model="questions.selectAnswer"
                      :value="answer"
                    />
                    <label
                      for="'answer' + index + answerIndex"
                      class="texting-2"
                      >Вариант ответа</label
                    >
                    <span>{{ answerIndex + 1 }}</span>
                  </div>
                  <input
                    class="input-default texting-3"
                    type="text"
                    v-model="answers"
                    placeholder="Введите вариант ответа"
                    required
                  />
                </div>
              </div>

              <a
                href=""
                class="texting-1-bold"
                @click.prevent="addAnswer(index)"
                >+ Добавить вариант ответа</a
              >
            </div>
          </div>
        </div>
        <button
          class="button button-primary healding-3"
          type="button"
          @click="addQuestion"
        >
          Добавить вопрос
        </button>
      </form>
    </main>
    <footer>
      <div class="setting-test">
        <h2 class="healding-1">Настройки теста</h2>
        <div class="inputs">
          <div class="input-label">
            <label for="" class="texting-1">Дата начала теста</label>
            <input type="date" class="input-default" />
          </div>
          <div class="input-label">
            <label for="" class="texting-1">Дата окончания теста</label>
            <input type="date" class="input-default texting-3" />
          </div>
          <div class="input-label">
            <label for="" class="texting-1">Время прохождения</label>
            <input type="time" class="input-default texting-3" />
          </div>
          <div class="input-label">
            <label for="" class="texting-1">Выбор групп</label>
            <select name="" id="" class="dropdown texting-3" v-model="fetchGroupTitle">
              <option v-for="group in groupTitles" :key="group" :value="group.id">{{ group}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="information-test">
        <h2 class="healding-1">Информация о тесте</h2>
        <div class="update-test">
          <div class="input-label">
            <label for="" class="texting-1">Заголовок</label>
            <input
              type="text"
              class="input-default texting-3"
              placeholder="Введите заголовое текста"
            />
          </div>
          <div class="input-label" id="description">
            <label for="" class="texting-1">Описание теста</label>
            <textarea               
              class="input input-default texting-3"
              placeholder="Введите название">
            </textarea>
          </div>
          <div class="input-label">
            <label for="" class="texting-1">Обложка фотографии</label>
            <input type="fil"/>
          </div>
        </div>
        <button class="button button-primary healding-3">Опубликовать тест</button>
      </div>
  </footer>
  </div>
</template>
<script setup>
const submitTest = async () => {
  try {
    const test = {
      title: title.value,
      description: description.value,
      img: img.value,
      beginningDate: beginningDate.value,
      endDate: endDate.value,
      time: time.value,
      groupId: selectGroup.value,
      teacherId: user.value.id,
      questions: questions.value.map((number) => ({
        description: number.description,
        img: null,
        answers: number.answers.map((number, index) => ({
          text: number,
          isCorrect: number.selectAnswer === index
        }))
      }))
    }
    const res = await http.post('tests', test)
    console.log('Успешно отправлено!', res.data)
    alert('Тест успешно создан')
  }
  catch(error) {
    console.error('Ошибка при создании теста', error)
    alert('Не удалось создать тест')
  }
}
</script>
<style scoped>
@import "../css/components/block/buttons/button.css";
@import "../css/components/block/inputs/input.css";
@import "../css/components/variables/text-style.css";
@import "../css/components/variables/variables.css";
@import "../css/pages/create-test.css"; 
</style>
