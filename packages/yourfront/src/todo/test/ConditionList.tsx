import { Controller, useWatch } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { useTypedFieldArray } from "./util/util";
import type { MyCondition } from "./vo/testVO";

interface ConditionListProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
}

export const CommonConditionList = <T extends FieldValues>({
  control,
  name,
  label = "조건 목록",
}: ConditionListProps<T>) => {
  const { fields, append, remove } = useTypedFieldArray<MyCondition, T>(
    control,
    name
  );
  const conditions = useWatch({
    name: name,
    control,
  }) as MyCondition[];

  return (
    <div>
      <div>{label}</div>
      {fields.map((field, index) => (
        <div
          key={field.id}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <div>
            <strong>현재 값:</strong> {conditions?.[index]?.title || ""}
          </div>
          <Controller
            name={`${String(name)}.${index}.title` as any}
            control={control}
            rules={{ required: true }}
            render={({ field: inputField }) => (
              <input {...inputField} placeholder={`조건 ${index + 1} 제목`} />
            )}
          />
          <button type="button" onClick={() => remove(index)}>
            삭제
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          const newCondition: MyCondition = {
            id: fields.length,
            title: `새 조건 ${fields.length + 1}`,
          };
          append(newCondition);
        }}
      >
        조건 추가
      </button>

      {/* watch된 전체 값 표시 */}
      <div style={{ marginTop: 16, padding: 8, backgroundColor: "#f5f5f5" }}>
        <div>Watch된 전체 값:</div>
        <div>{JSON.stringify(conditions, null, 2)}</div>
      </div>
    </div>
  );
};
