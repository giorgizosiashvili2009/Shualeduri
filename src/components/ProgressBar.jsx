export default function ProgressBar({ current, total }) {
  return (
    <div className="progress-track" aria-label={`Question ${current} of ${total}`}>
      <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
    </div>
  );
}
