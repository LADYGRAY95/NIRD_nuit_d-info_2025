export default function SectionTitle({ icon: Icon, title, subtitle, iconColor = "#374dc8", className = '' }) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      {Icon && (
        <div 
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: `${iconColor}15` }} // 15 = ~10% opacity
        >
          <Icon size={26} color={iconColor} />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#374dc8]">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl mx-auto text-lg text-[#374dc8]/80">{subtitle}</p>}
    </div>
  );
}