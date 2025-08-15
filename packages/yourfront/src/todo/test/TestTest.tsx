import { useForm, FormProvider } from "react-hook-form";
import type { MyCondition, MyMyVO } from "./vo/testVO";
import { FieldAndWatch } from "./solution/FieldAndWatch";
import { useState } from "react";

const replaceSomething = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.random();
};

export const TestTest = () => {
  const methods = useForm<MyMyVO>({
    defaultValues: {
      id: 0,
      title: "",
      conditions: [{ id: 0, title: "" }],
    },
  });

  const [something, setSomething] = useState<{
    id: number;
    conditions: MyCondition[];
  }>({
    id: 0,
    conditions: [],
  });

  return (
    <FormProvider {...methods}>
      <FieldAndWatch
        serverSomething={something}
        replaceSomething={() =>
          replaceSomething().then((value) =>
            setSomething({
              id: value,
              conditions: [
                { id: value, title: value.toString() },
                { id: value + 1, title: value.toString() + "2" },
              ],
            })
          )
        }
      />
    </FormProvider>
  );
};
