// useMyForm.ts - 비즈니스 로직만 담당
export const useMyForm = () => {
  const methods = useForm<MyMyVO>({
    defaultValues: {
      id: 0,
      title: "",
      conditions: [{ id: 0, title: "" }],
    },
  });

  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "conditions",
  });

  const onSubmit = (data: MyMyVO) => {
    console.log(data);
  };

  return {
    control,
    fields,
    append,
    remove,
    handleSubmit: handleSubmit(onSubmit),
  };
};

// MyForm.tsx - UI만 담당
export const MyForm = () => {
  const formHook = useMyForm();

  return (
    <form onSubmit={formHook.handleSubmit}>
      <ReusableInput name="title" control={formHook.control} label="제목" />
      <ConditionList {...formHook} />
    </form>
  );
};
