interface ButtonProps {
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ type = "button", children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 active:scale-[0.98] transition-all shadow-lg shadow-orange-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      {children}
    </button>
  );
}
