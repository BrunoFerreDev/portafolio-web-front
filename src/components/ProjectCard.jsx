import useFadeIn from "../hooks/useFadeIn";

export default function ProjectCard({ emoji, gradient, img, title, desc, tags, github, demo }) {
    const ref = useFadeIn();
    return (
        <div className="project-card fade-in" ref={ref}>
            <div className="project-thumb" style={{ background: img ? "#0d1220" : gradient }}>
                {img ? (
                    <img
                        src={img}
                        alt={title}
                        className="project-thumb-img"
                    />
                ) : (
                    <span className="project-thumb-emoji">{emoji}</span>
                )}
                <div className="project-overlay" />
                <div className="project-label">{title}</div>
            </div>
            <div className="project-body">
                <p className="project-desc">{desc}</p>
                <div className="tags">
                    {tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-links">
                    {github && <a href={github} className="project-link" target="_blank" rel="noreferrer">⟶ GitHub</a>}
                    {demo && <a href={demo} className="project-link" target="_blank" rel="noreferrer">⟶ Demo</a>}
                </div>
            </div>
        </div>
    );
}
