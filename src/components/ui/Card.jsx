export default function Card({ children, className = '' }) {
  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-[#ebedfa] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}