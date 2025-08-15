import { useController, useFieldArray, useFormContext } from "react-hook-form";
import type { MyCondition, MyMyVO } from "../vo/testVO";
import { FieldAndWatchInner } from "./FieldAndWatchInner";
import { useEffect } from "react";

interface Props {
  replaceSomething: () => Promise<void>;
  serverSomething: { id: number; conditions: MyCondition[] };
}
export const FieldAndWatch = ({ replaceSomething, serverSomething }: Props) => {
  const { control } = useFormContext<MyMyVO>();
  const { field } = useController({
    control,
    name: "id",
  });

  const { replace } = useFieldArray({
    control,
    name: "conditions",
  });

  useEffect(() => {
    if (serverSomething.id !== field.value) {
      replace(serverSomething.conditions);
    }
  }, [serverSomething, field.value, replace]);

  return (
    <div>
      <FieldAndWatchInner />
      <button onClick={replaceSomething}>뭔가 바꿔봅니다.</button>
    </div>
  );
};
