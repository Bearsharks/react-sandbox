import { useForm, FormProvider } from "react-hook-form";
import type { YourYourVO } from "./vo/testVO";
import { CommonConditionList } from "./ConditionList";

export const YourComponent = () => {
  const methods = useForm<YourYourVO>({
    defaultValues: {
      id: 0,
      conditionList: [{ id: 0, title: "" }],
    },
  });

  const { control, handleSubmit } = methods;

  const onSubmit = (data: YourYourVO) => {
    // 제출 시 데이터 처리
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommonConditionList control={control} name="conditionList" />
        <button type="submit">제출</button>
      </form>
    </FormProvider>
  );
};
