import useFadeIn from "../hooks/useFadeIn";

export default function SkillCard({ icon, name }) {
    const ref = useFadeIn();
    return (
        <div className="skill-card fade-in" ref={ref}>
            <div className="skill-icon">{icon}</div>
            <div className="skill-name">{name}</div>
        </div>
    );
}
