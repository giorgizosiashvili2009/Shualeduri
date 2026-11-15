import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import SubjectCard from './components/SubjectCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import ResultsCard from './components/ResultsCard.jsx';
import { subjects, questions } from './data/questions.js';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [subject, setSubject] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState('home');

  const currentQuestions = subject ? questions[subject.id] : [];
  const currentQuestion = currentQuestions[questionIndex];

  function startQuiz(chosenSubject) {
    setSubject(chosenSubject);
    setQuestionIndex(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setScreen('quiz');
  }

  function submitAnswer() {
    if (selected === null || submitted) return;
    if (selected === currentQuestion.answer) setScore((previous) => previous + 1);
    setSubmitted(true);
  }

  function nextQuestion() {
    if (questionIndex === currentQuestions.length - 1) {
      setScreen('results');
      return;
    }
    setQuestionIndex((previous) => previous + 1);
    setSelected(null);
    setSubmitted(false);
  }

  function goHome() {
    setScreen('home');
    setSubject(null);
    setQuestionIndex(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
  }

  return (
    <main className={`app ${theme}`}>
      <div className="background-shape shape-one" />
      <div className="background-shape shape-two" />
      <div className="page-shell">
        <Navbar subject={subject} theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

        {screen === 'home' && (
          <section className="home-layout">
            <div className="intro-copy">
              <h1>Welcome to the<br /><strong>Frontend Quiz!</strong></h1>
              <p>Pick a subject to get started.</p>
            </div>
            <div className="subject-list">
              {subjects.map((item) => <SubjectCard key={item.id} subject={item} onClick={() => startQuiz(item)} />)}
            </div>
          </section>
        )}

        {screen === 'quiz' && currentQuestion && (
          <section className="quiz-layout">
            <div className="question-column">
              <p className="question-count">Question {questionIndex + 1} of {currentQuestions.length}</p>
              <h2>{currentQuestion.question}</h2>
              <ProgressBar current={questionIndex + 1} total={currentQuestions.length} />
            </div>
            <QuestionCard
              question={currentQuestion}
              selected={selected}
              onSelect={setSelected}
              submitted={submitted}
              onSubmit={submitAnswer}
              onNext={nextQuestion}
              isLast={questionIndex === currentQuestions.length - 1}
            />
          </section>
        )}

        {screen === 'results' && (
          <section className="results-layout">
            <div className="results-heading">
              <h1>Quiz completed<br /><strong>You scored...</strong></h1>
            </div>
            <ResultsCard subject={subject} score={score} total={currentQuestions.length} onPlayAgain={goHome} />
          </section>
        )}
      </div>
    </main>
  );
}
