import {
  useForm,
  FormProvider,
  useController,
  useFormContext,
} from "react-hook-form";
import { useRef } from "react";

interface TestForm {
  testField: string;
}

const FieldStateTest1 = () => {
  const { control, getValues, setValue } = useFormContext<TestForm>();
  const { field } = useController({
    control,
    name: "testField",
  });

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "5px" }}>
      <h4>Component 1 (useController)</h4>
      <p>field.value: {field.value}</p>
      <p>getValues(): {getValues("testField")}</p>
      <button onClick={() => field.onChange("Changed by Component 1")}>
        Change via field.onChange
      </button>
      <button onClick={() => setValue("testField", "Changed by setValue")}>
        Change via setValue
      </button>
    </div>
  );
};

const FieldStateTest2 = () => {
  const { control, getValues, watch } = useFormContext<TestForm>();
  const { field } = useController({
    control,
    name: "testField",
  });
  const watchedValue = watch("testField");

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "5px" }}>
      <h4>Component 2 (useController + watch)</h4>
      <p>field.value: {field.value}</p>
      <p>watch(): {watchedValue}</p>
      <p>getValues(): {getValues("testField")}</p>
    </div>
  );
};

export const TestFieldStateTest = () => {
  const methods = useForm<TestForm>({
    defaultValues: {
      testField: "초기값",
    },
  });

  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <h3>useController 상태 테스트 (렌더링 횟수: {renderCountRef.current})</h3>
      <FormProvider {...methods}>
        <FieldStateTest1 />
        <FieldStateTest2 />
        <div
          style={{ border: "1px solid green", padding: "10px", margin: "5px" }}
        >
          <h4>직접 폼 상태 확인</h4>
          <p>전역 폼 상태: {JSON.stringify(methods.getValues())}</p>
          <button
            onClick={() =>
              methods.setValue("testField", `외부에서 변경 ${Date.now()}`)
            }
          >
            외부에서 직접 변경
          </button>
        </div>
      </FormProvider>
    </div>
  );
};
