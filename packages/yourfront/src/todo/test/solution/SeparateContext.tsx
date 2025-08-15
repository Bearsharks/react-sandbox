// 조건 목록만을 위한 별도 컨텍스트
const ConditionContext = createContext<{
  fields: any[];
  append: (item: any) => void;
  remove: (index: number) => void;
} | null>(null);

export const ConditionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { control } = useFormContext<MyMyVO>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "conditions",
  });

  return (
    <ConditionContext.Provider value={{ fields, append, remove }}>
      {children}
    </ConditionContext.Provider>
  );
};
