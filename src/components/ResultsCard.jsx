export default function ResultsCard({ subject, score, total, onPlayAgain }) {
  return (
    <div className="results-card-wrap">
      <div className="results-card">
        <div className="results-subject">
          <span className={`subject-icon ${subject.color}`}>{subject.icon}</span>
          <span>{subject.name}</span>
        </div>
        <div className="score-number">{score}</div>
        <p className="score-caption">out of {total}</p>
      </div>
      <button className="primary-button" onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}
