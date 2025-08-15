// 전체 폼 구조를 몰라도 되는 재사용 가능한 컴포넌트
import { Controller } from "react-hook-form";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface ReusableInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  rules?: any;
}

export const ReusableInput = <T extends FieldValues>({
  name,
  control,
  label,
  rules,
}: ReusableInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <label>{label}</label>
          <input {...field} value={field.value} onChange={field.onChange} onSelect={field.} />
          {fieldState.error && <span>{fieldState.error.message}</span>}
        </div>
      )}
    />
  );
};
