import { topics } from '../shared/topics.js';

// ===== Preencha os dados da loja aqui =====
const WHATSAPP_NUMBER = '5561920051014';

const STORE = {
  name: 'DZ7 Motos',
  tagline: 'Peças e serviços para a sua moto. Fale direto com a gente no WhatsApp.',
  address: '[ENDEREÇO DA LOJA], [CIDADE]',
  hours: '[HORÁRIO DE ATENDIMENTO]',
};

function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

const stroke = {
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const icons = {
  gear: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4v5.5M12 14.5V20M4.5 9l5 1.8M14.5 13.2l5 1.8" />
    </>
  ),
  wrench: (
    <path
      d="M14.5 6.5a4 4 0 0 0 4.9 4.9L21 13l-3 3-1.6-1.6L8 23l-3-3 8.6-8.4A4 4 0 0 1 14.5 6.5z"
      transform="scale(.92) translate(1 -1)"
    />
  ),
  doc: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h7M9 17h5" />
    </>
  ),
  moto: (
    <>
      <circle cx="5.5" cy="16" r="3.5" />
      <circle cx="18.5" cy="16" r="3.5" />
      <path d="M5.5 16l3-7h5l3 7M9 9H7M13.5 9l1.5-3h2.5M12 16l-1.5-5" />
    </>
  ),
};

function Icon({ name, size = 28, color = '#5b95ff', width = 1.6 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={width}
      className="icon"
      {...stroke}
    >
      {icons[name]}
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="#9fb0c8" strokeWidth="2" className="icon" {...stroke}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <img className="logo" src="/logo.png" alt="Logo DZ7 Motos" width="120" height="120" />
        <h1>{STORE.name}</h1>
        <p className="tagline">{STORE.tagline}</p>
      </header>

      <a
        className="cta"
        href={buildWhatsAppUrl('Olá! Vim pelo Instagram e gostaria de falar com a loja.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" {...stroke}>
          <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.8.7a3.6 3.6 0 0 1-1.6-1.6l.7-.8-1-2L9 9.5z" />
        </svg>
        Chamar no WhatsApp
      </a>

      <section className="topics">
        <h2>Sobre o que você quer falar?</h2>
        {topics.map((t) => (
          <a
            key={t.id}
            className="row"
            href={buildWhatsAppUrl(t.message || `Olá! Vim pelo Instagram e gostaria de falar sobre: ${t.title}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={t.icon} />
            <span className="row-text">
              <strong>{t.title}</strong>
              <small>{t.subtitle}</small>
            </span>
            <Chevron />
          </a>
        ))}
      </section>

      <footer className="info">
        <p>
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="#9fb0c8" strokeWidth="1.8" className="icon" {...stroke}>
            <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <span>{STORE.address}</span>
        </p>
        <p>
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="#9fb0c8" strokeWidth="1.8" className="icon" {...stroke}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span>{STORE.hours}</span>
        </p>
      </footer>
    </main>
  );
}