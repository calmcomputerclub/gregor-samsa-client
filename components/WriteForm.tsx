import { Field, Form, Formik, ErrorMessage } from "formik"
import Input from "./base/Input"
import TextArea from "./base/TextArea"

interface FormState {
  title: string
  content: string
}

type ErrorState = Record<keyof FormState, string>

const initalState: FormState = {
  title: "",
  content: "",
}

const WriteForm = () => {
  return (
    <Formik
      initialValues={initalState}
      validate={(values) => {
        const error: ErrorState = {
          title: "",
          content: "",
        }
        if (!values.title) {
          error.title = "필수 입력 사항입니다."
        }
        if (!values.content) {
          error.content = "필수 입력 사항입니다."
        }
        return error
      }}
      onSubmit={(args) => {}}
    >
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 mt-14">
            <div>
              <Input
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="제목을 작성해주세요."
              />
              {errors.title && (
                <span className="w-full font-bold text-red-600">
                  {errors.title}
                </span>
              )}
            </div>
            <div>
              <TextArea
                name="content"
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="내용을 작성해주세요."
              />
              {errors.content && (
                <span className="w-full font-bold text-red-600">
                  {errors.content}
                </span>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="w-full text-3xl bg-indigo-500 text-white font-bold p-1 rounded-md hover:bg-indigo-300"
              type="submit"
            >
              등록하기
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default WriteForm
