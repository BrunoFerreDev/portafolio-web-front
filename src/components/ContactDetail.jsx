export default function ContactDetail({ icon, label, value, href }) {
    return (
        <div className="contact-detail">
            <div className="contact-icon">{icon}</div>
            <div>
                <div style={{ fontSize: ".68rem", color: "var(--muted)", marginBottom: ".1rem", fontFamily: "var(--mono)", letterSpacing: ".06em" }}>
                    {label}
                </div>
                {href
                    ? <a href={href} target="_blank" rel="noreferrer">{value}</a>
                    : <span>{value}</span>
                }
            </div>
        </div>
    );
}
