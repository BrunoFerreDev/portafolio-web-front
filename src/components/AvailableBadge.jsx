export default function AvailableBadge({ available }) {
    if (!available) return null;
    return (
        <div className="badge">
            <div className="badge-dot" />
            DISPONIBLE PARA OPORTUNIDADES
        </div>
    );
}
