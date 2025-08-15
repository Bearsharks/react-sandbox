import { useFieldArray, useFormContext } from "react-hook-form";
import type { MyMyVO } from "../vo/testVO";

export const FieldAndWatchInner = () => {
  const { control, watch } = useFormContext<MyMyVO>();
  const value = watch("conditions");
  const { fields, replace } = useFieldArray({
    control,
    name: "conditions",
  });

  console.log(
    fields.map((condition) => condition.title),
    value.map((condition) => condition.title)
  );

  return (
    <div>
      <input
        type="text"
        value={fields.map((condition) => condition.title).join(",")}
        onChange={(e) => replace([{ id: -1, title: e.target.value }])}
      />
    </div>
  );
};
