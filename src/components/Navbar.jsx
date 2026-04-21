import useScrolled from "../hooks/useScrolled";

export default function Navbar({ name, initials, links }) {
    const scrolled = useScrolled();
    return (
        <nav className={`nav${scrolled ? " scrolled" : ""}`}>
            <a href="#home" className="nav-logo">
                <div className="nav-avatar">{initials}</div>
                {name}
            </a>
            <ul className="nav-links">
                {links.map((l) => (
                    <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
            </ul>
            <a href="#contact" className="btn-contact">↗ Contactar</a>
        </nav>
    );
}
