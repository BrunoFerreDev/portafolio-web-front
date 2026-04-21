import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_zlzj5dt";
const TEMPLATE_ID = "template_4n5oyrs";
const PUBLIC_KEY  = "Q9n5GuYZqYvcHYcLU";

export default function ContactForm() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // "idle" | "loading" | "sent" | "error"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            });
            setStatus("sent");
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    if (status === "sent") {
        return (
            <div className="form-card">
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>¡Mensaje enviado!</div>
                    <div style={{ color: "var(--muted)", marginTop: ".5rem", fontSize: ".9rem" }}>
                        Te respondo a la brevedad.
                    </div>
                    <button
                        className="btn-send"
                        style={{ marginTop: "1.5rem" }}
                        onClick={() => setStatus("idle")}
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="form-card">
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>❌</div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Algo salió mal</div>
                    <div style={{ color: "var(--muted)", marginTop: ".5rem", fontSize: ".9rem" }}>
                        Por favor intentá de nuevo o escribime directamente.
                    </div>
                    <button
                        className="btn-send"
                        style={{ marginTop: "1.5rem" }}
                        onClick={() => setStatus("idle")}
                    >
                        Intentar de nuevo
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="form-card">
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row" style={{ marginBottom: "1rem" }}>
                    <div className="form-group">
                        <label className="form-label">NOMBRE</label>
                        <input
                            className="form-input"
                            type="text"
                            name="from_name"
                            placeholder="Juan Pérez"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">EMAIL</label>
                        <input
                            className="form-input"
                            type="email"
                            name="from_email"
                            placeholder="juan@ejemplo.com"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">ASUNTO</label>
                    <select className="form-select" name="subject">
                        <option>Oportunidad laboral</option>
                        <option>Proyecto freelance</option>
                        <option>Consulta técnica</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">MENSAJE</label>
                    <textarea
                        className="form-textarea"
                        name="message"
                        placeholder="Contame en qué puedo ayudarte..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn-send"
                    disabled={status === "loading"}
                    style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                >
                    {status === "loading" ? "Enviando..." : "Enviar mensaje →"}
                </button>
            </form>
        </div>
    );
}
