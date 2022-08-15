import cn from "classnames"
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
} from "react"

interface FieldProps {
  name?: string
  placeholder?: string
  large?: boolean
  readOnly?: boolean
  disabled?: boolean
  className?: string
  value?: string
  type?: InputHTMLAttributes<HTMLInputElement>["type"]
  onChange?: ChangeEventHandler
  onBlur?: FocusEventHandler
}

const Input = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      name,
      placeholder,
      readOnly = false,
      disabled = false,
      className,
      large = false,
      type = "text",
      value,
      onChange,
      onBlur,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full p-2 bg-slate-200 dark:bg-slate-600 rounded-md",
          large ? "text-5xl" : "text-3xl",
          className
        )}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
