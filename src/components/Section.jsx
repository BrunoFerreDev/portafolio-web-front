export default function Section({ id, alt, head, sub, children }) {
    return (
        <section id={id} className={`section${alt ? " alt" : ""}`}>
            {head && (
                <div className="section-head">
                    <div className="section-title">{head}</div>
                    {sub && <div className="section-sub">{sub}</div>}
                    <div className="section-line" />
                </div>
            )}
            {children}
        </section>
    );
}
