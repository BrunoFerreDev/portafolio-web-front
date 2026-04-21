export default function StatItem({ value, label }) {
    return (
        <div>
            <div className="stat-val">{value}</div>
            <div className="stat-lbl">{label}</div>
        </div>
    );
}
