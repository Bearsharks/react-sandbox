import { type Control, type FieldValues, useFieldArray } from "react-hook-form";

// MyCondition 타입 정의
export interface MyCondition {
  id: number;
  title: string;
}

// 유효성 검증 함수 타입 정의
export type ValidationFunction<T> = (item: T) => boolean;

// 타입 안전하진 않은 FieldArray 훅
export function useTypedFieldArray<TargetType, T extends FieldValues>(
  control: Control<T>,
  name: keyof T,
  validate?: ValidationFunction<TargetType[]>
) {
  const result = useFieldArray({ control, name: name as any });
  type TypedField = TargetType & { id: string };

  if (validate && !validate(result.fields as any)) {
    console.error("유효성 검증 실패", result.fields);
  }
  return {
    fields: result.fields as unknown as TypedField[],
    append: result.append as (item: TargetType | TargetType[]) => void,
    prepend: result.prepend as (item: TargetType | TargetType[]) => void,
    insert: result.insert as (index: number, item: TargetType | TargetType[]) => void,
    update: result.update as (index: number, item: TargetType) => void,
    replace: result.replace as (items: TargetType[]) => void,
    remove: result.remove as (index: ) => void,
  };
}
