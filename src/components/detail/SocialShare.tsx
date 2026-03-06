interface Props {
  restaurantName: string;
}

export default function SocialShare({ restaurantName }: Props) {
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${restaurantName} — Almanaque Gastronómico`);

    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href);
      return;
    }

    window.open(urls[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const buttons = [
    { id: 'facebook', label: 'Facebook', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
    { id: 'twitter', label: 'X', icon: <path d="M4 4l6.5 7.5L4 20h2l5.3-6.8L16 20h4l-7-8 6-8h-2l-4.7 6L8 4H4z" /> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /> },
    { id: 'linkedin', label: 'LinkedIn', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
    { id: 'copy', label: 'Copiar enlace', icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></> },
  ];

  return (
    <div className="flex items-center gap-3">
      <span
        className="text-sm text-[#212934]/50 mr-1"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Compartir:
      </span>
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => handleShare(btn.id)}
          title={btn.label}
          className="w-9 h-9 rounded-full bg-[#212934] text-white flex items-center justify-center hover:bg-[#ec8d24] transition-colors duration-300"
        >
          <svg
            className="w-4 h-4"
            fill={btn.id === 'copy' ? 'none' : 'currentColor'}
            stroke={btn.id === 'copy' ? 'currentColor' : 'none'}
            strokeWidth={btn.id === 'copy' ? 2 : undefined}
            strokeLinecap={btn.id === 'copy' ? 'round' : undefined}
            strokeLinejoin={btn.id === 'copy' ? 'round' : undefined}
            viewBox="0 0 24 24"
          >
            {btn.icon}
          </svg>
        </button>
      ))}
    </div>
  );
}
