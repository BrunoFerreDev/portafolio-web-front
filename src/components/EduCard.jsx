import useFadeIn from "../hooks/useFadeIn";

export default function EduCard({ icon, period, title, institution, desc }) {
    const ref = useFadeIn();
    return (
        <div className="edu-card fade-in" ref={ref}>
            <div className="edu-icon-box">{icon}</div>
            <div>
                <div className="edu-period">{period}</div>
                <div className="edu-title">{title}</div>
                <div className="edu-inst">{institution}</div>
                <div className="edu-desc">{desc}</div>
            </div>
        </div>
    );
}
