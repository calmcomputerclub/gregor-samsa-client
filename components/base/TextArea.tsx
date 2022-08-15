import { ChangeEventHandler, FocusEventHandler, forwardRef } from "react"

interface TextAreaProps {
  value?: string
  onChange?: ChangeEventHandler
  onBlur?: FocusEventHandler
  placeholder?: string
  name?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ onBlur, onChange, value, placeholder, name }, ref) => {
    return (
      <textarea
        className="text-2xl w-full min-h-[300px] p-2 bg-slate-200 dark:bg-slate-600 rounded-md"
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        ref={ref}
      />
    )
  }
)

TextArea.displayName = "TextArea"

export default TextArea
