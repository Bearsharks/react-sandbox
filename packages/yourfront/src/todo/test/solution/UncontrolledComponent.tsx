// 전체 폼 구조를 몰라도 되는 단순한 컴포넌트
interface SimpleInputProps {
  label: string;
  error?: string;
  [key: string]: any; // register에서 오는 모든 props 허용
}

export const SimpleInput = forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} {...props} />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

// 사용법
<SimpleInput
  label="제목"
  error={errors.title?.message}
  {...register("title")}
/>;
