
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className = "", hoverEffect = true, ...props }: CardProps) => {
    return (
        <div
            className={`
        bg-[#12122b] border border-white/5 rounded-xl p-6 relative overflow-hidden transition-all duration-300
        ${hoverEffect ? 'hover:-translate-y-1 hover:border-[#00f3ff]/30 hover:shadow-[0_0_20px_rgba(0,243,255,0.05)]' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};
