export default function SubjectCard({ subject, onClick }) {
  return (
    <button className="subject-card" onClick={onClick}>
      <span className={`subject-icon ${subject.color}`}>{subject.icon}</span>
      <span>{subject.name}</span>
      <span className="card-arrow">›</span>
    </button>
  );
}
