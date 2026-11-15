export default function ThemeToggle({ theme, onToggle }) {
  return (
    <div className="theme-toggle">
      <span className="sun-icon" aria-hidden="true">☼</span>
      <button className={`toggle-switch ${theme === 'dark' ? 'is-dark' : ''}`} onClick={onToggle} aria-label="Toggle color theme">
        <span />
      </button>
      <span className="moon-icon" aria-hidden="true">☾</span>
    </div>
  );
}
