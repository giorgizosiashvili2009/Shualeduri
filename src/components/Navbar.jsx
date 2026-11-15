import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar({ subject, theme, onToggleTheme, showBrand = false }) {
  return (
    <nav className="navbar">
      <div className="nav-subject">
        {subject && !showBrand ? (
          <><span className={`subject-icon ${subject.color}`}>{subject.icon}</span><span>{subject.name}</span></>
        ) : null}
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </nav>
  );
}
