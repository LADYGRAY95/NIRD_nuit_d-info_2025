export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) {
  const base = "font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  };
  const variants = {
    primary: "bg-gradient-to-r from-[#cd3278] to-[#e505fa] text-white hover:from-[#b804c8] hover:to-[#b804c8] focus:ring-[#cd3278]/50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary: "bg-[#f4ebfa] text-[#374dc8] hover:bg-[#e8d6f5] focus:ring-[#8c34cb]/30",
    outline: "border-2 border-[#cd3278] text-[#cd3278] hover:bg-[#f4ebfa] focus:ring-[#cd3278]/30",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}