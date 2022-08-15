import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps {
  children: ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  onClick?: () => void
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-xl bg-indigo-500 text-white font-bold p-1 rounded-md hover:bg-indigo-300 dark:bg-indigo-700"
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
