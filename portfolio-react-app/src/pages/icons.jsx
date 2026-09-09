// Simple placeholder icons so the new components work with zero extra
// dependencies. These are intentionally plain — swap any of these out for
// your own custom icons/assets whenever you're ready (see README).

export const HeartIcon = ({ filled, ...props }) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M12 21s-6.7-4.35-9.33-8.2C.86 10.1 1.4 6.6 4.2 5.1c2.2-1.18 4.6-.4 5.8 1.4.4.6.7 1.2 1 1.8.3-.6.6-1.2 1-1.8 1.2-1.8 3.6-2.58 5.8-1.4 2.8 1.5 3.34 5 1.53 7.7C18.7 16.65 12 21 12 21z" />
    </svg>
);

export const PlayIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const PauseIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
);

export const PrevIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M6 6h2v12H6zM20 6l-10 6 10 6z" />
    </svg>
);

export const NextIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M16 6h2v12h-2zM4 6l10 6-10 6z" />
    </svg>
);

export const ShuffleIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M3 6h3.5L15 18h5.5M3 18h3.5L15 6h5.5" />
        <path d="M17.5 4L21 6l-3.5 2M17.5 20l3.5-2-3.5-2" />
    </svg>
);

export const VolumeIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M4 9v6h4l5 5V4L8 9H4z" />
        <path d="M16 8.5a4.5 4.5 0 010 7" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

export const SortIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
);

// equalizer-style "adjust/filter" icon, closer to the draft's sort icon
export const AdjustIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="M4 7h9M17 7h3M4 12h3M9 12h11M4 17h13M21 17h-1" strokeLinecap="round" />
        <circle cx="13" cy="7" r="2" fill="currentColor" stroke="none" />
        <circle cx="6" cy="12" r="2" fill="currentColor" stroke="none" />
        <circle cx="16" cy="17" r="2" fill="currentColor" stroke="none" />
    </svg>
);

export const CloseIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M6 6l12 12M18 6L6 18" />
    </svg>
);