export default function SocialBtn({ href, title, children }) {
    return (
        <a href={href} className="social-btn" title={title} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}
