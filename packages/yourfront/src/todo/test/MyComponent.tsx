import { useForm, FormProvider } from "react-hook-form";
import type { MyMyVO } from "./vo/testVO";
import { CommonConditionList } from "./ConditionList";

export const MyComponent = () => {
  const methods = useForm<MyMyVO>({
    defaultValues: {
      id: 0,
      title: "",
      conditions: [{ id: 0, title: "" }],
    },
  });

  const { control, handleSubmit, register } = methods;

  const onSubmit = (data: MyMyVO) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>제목</div>
          <input
            {...register("title", { required: true })}
            placeholder="제목 입력"
          />
        </div>
        <CommonConditionList control={control} name="conditions" />
        <button type="submit">제출</button>
      </form>
    </FormProvider>
  );
};
