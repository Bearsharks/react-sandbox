// 전체 폼 구조를 몰라도 되는 재사용 가능한 컴포넌트
import { Controller, useController, useFormContext } from "react-hook-form";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface Props {
  label: string;
  rules?: any;
}

export const UnReusableInput = ({ label, rules }: Props) => {
  const { control } = useFormContext<SomeType>();
  const [field, fieldState] = useController({
    name: "name",
    control: control,
    rules: rules,
  });
  return (
    <div>
      <label>{label}</label>
      <input value={field.value} onChange={field.onChange} />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
};
