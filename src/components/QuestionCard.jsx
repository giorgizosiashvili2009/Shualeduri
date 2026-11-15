const letters = ['A', 'B', 'C', 'D'];

export default function QuestionCard({ question, selected, onSelect, submitted, onSubmit, onNext, isLast }) {
  return (
    <div className="answer-column">
      <div className="answer-list">
        {question.options.map((option, index) => {
          const isCorrect = submitted && index === question.answer;
          const isWrongSelected = submitted && selected === index && index !== question.answer;
          const classNames = ['answer-option'];
          if (!submitted && selected === index) classNames.push('selected');
          if (isCorrect) classNames.push('correct');
          if (isWrongSelected) classNames.push('incorrect');
          return (
            <button key={option} className={classNames.join(' ')} onClick={() => onSelect(index)} disabled={submitted}>
              <span className="answer-letter">{letters[index]}</span>
              <span className="answer-text">{option}</span>
              {isCorrect && <span className="answer-status">✓</span>}
              {isWrongSelected && <span className="answer-status">×</span>}
            </button>
          );
        })}
      </div>
      {!submitted ? (
        <button className="primary-button" onClick={onSubmit} disabled={selected === null}>Submit Answer</button>
      ) : (
        <button className="primary-button" onClick={onNext}>{isLast ? 'See Results' : 'Next Question'}</button>
      )}
    </div>
  );
}
