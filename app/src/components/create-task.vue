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
                      type="checkbox"
                      v-model="answer.isCorrect"
                      :id="'answer' + index + answerIndex"
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
                    v-model="answer.text"
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
import { ref } from 'vue'
import navigation from "../module/navigation.vue"

// Инициализация массива вопросов (первый вопрос по умолчанию)
const questions = ref([
  {
    description: '',
    answers: [
      { text: '', isCorrect: false },
      { text: '', isCorrect: false }
    ]
  }
])

// Добавить новый вопрос
function addQuestion() {
  questions.value.push({
    description: '',
    answers: [
      { text: '', isCorrect: false },
      { text: '', isCorrect: false }
    ]
  })
}

// Добавить вариант ответа к конкретному вопросу
function addAnswer(questionIndex) {
  questions.value[questionIndex].answers.push({ text: '', isCorrect: false })
}

// Пример функции для отправки теста (добавь свои остальные поля)
async function submitTest() {
  const test = {
    // ...другие поля...
    questions: questions.value.map(q => ({
      description: q.description,
      img: null,
      answers: q.answers.map(a => ({
        text: a.text,
        isCorrect: a.isCorrect
      }))
    }))
  }

  try {
    // Здесь твой запрос на сервер, например:
    // await axios.post('/api/tests', test)
    alert('Тест успешно собран! (отправка не реализована в этом примере)')
  } catch (error) {
    alert('Ошибка отправки')
  }
}

// Экспортируй функции если используешь их в шаблоне
// В Vue3 с <script setup> просто объявляй функции, они будут доступны в шаблоне
</script>
<style scoped>
@import "../css/components/block/buttons/button.css";
@import "../css/components/block/inputs/input.css";
@import "../css/components/variables/text-style.css";
@import "../css/components/variables/variables.css";
@import "../css/pages/create-test.css"; 
</style>
