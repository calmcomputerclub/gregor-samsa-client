import { Field, Form, Formik, ErrorMessage } from "formik";

interface FormState {
  title: string;
  content: string;
}

type ErrorState = Record<keyof FormState, string>;

const initalState: FormState = {
  title: "",
  content: "",
};

const WriteForm = () => {
  return (
    <Formik
      initialValues={initalState}
      validate={(values) => {
        const error: ErrorState = {
          title: "",
          content: "",
        };
        if (!values.title) {
          error.title = "필수 입력 사항입니다.";
        }
        if (!values.content) {
          error.content = "필수 입력 사항입니다.";
        }
        return error;
      }}
      onSubmit={(args) => {}}
    >
      {() => (
        <Form>
          <div className="flex flex-col gap-5 mt-14">
            <div>
              <Field
                className="text-5xl w-full p-2"
                type="text"
                name="title"
                placeholder="제목을 작성해주세요."
              />
              <ErrorMessage
                className="w-full font-bold text-red-600"
                name="title"
                component="div"
              />
            </div>
            <div>
              <Field
                as="textarea"
                className="text-2xl w-full min-h-[300px] p-2"
                type="text"
                name="content"
                placeholder="내용을 작성해주세요."
              />
              <ErrorMessage
                className="w-full font-bold text-red-600"
                name="content"
                component="div"
              />
            </div>
            <button
              className="w-full text-3xl bg-indigo-500 text-white font-bold p-1 rounded-md hover:bg-indigo-300"
              type="submit"
            >
              Publish
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default WriteForm;
