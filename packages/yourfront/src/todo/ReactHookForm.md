# ReactHookForm의 단점

## 1. 관심사 분리의 문제

텍스트 기반으로 필드를 찾아가기 때문에 하위 컴포넌트도 그 필드 경로를 모두 알고 있어야한다. 이것은 하위 컴포넌트를 ReactHookForm에 종속되게하고, 나아가 내부 모든 하위 컴포넌트가 폼 모델에 종속되록록 강제한다. 자신이 담당하는 부분만 알고 있게하려면 control과 fieldname을 prop으로 전달하는 등의 패턴을 사용해야하고,
그 패턴을 사용해도 ReactHookForm에 종속되는 문제는 여전히 남아 있으며,
field의 타입을 추론 할 수 없어, 강제타입캐스팅을 하거나 복잡한 타입 정의 과정을 거쳐야 한다.

## 2. 낮은 컴포넌트 재사용성

form provider내의 하위 컴포넌트에서 값을 입력받으려면 어떤 필드의 어떤 값이 변경되는지를 지정해야하고, 그렇기 때문에 form provider가 전달하는 바로 그 인터페이스(모델)에 하위 컴포넌트가 종속된다. 모델의 변경은 하위 컴포넌트의 변경으로 이어진다.

"당연 한 것 아니냐 원래도 그랬다. 그것이 어떻게 ReactHookForm의 단점이 되는 것이냐"
라고 반문 할 수 있지만, ReactHookForm을 사용하지 않았다고 하면 단순한 이름 변경은 ide의 리팩토링 기능을 활용하면 간단하게 해결되고, 내부 타입 변경의 경우 해당 프로퍼티의 사용처를 간단하게 쫒아가면 되지만, ReactHookForm을 사용하는 경우 텍스트 기반 검색과 타입검사를 해야 사용처를 찾아갈 수 있다.

문제는 이뿐만이 아니다. 만약 어떤 커다란 모델 내부의 어떤 프로퍼티 A에 관한 인풋에 대한 컴포넌트가 있다고 가정하자 이제 기능이 확장되어 프로퍼티 A와 동일한 타입인데 필드명이 다른 프로퍼트 a'를 다른 곳에서도 사용을 해야 한다고 할때 이 인풋컴포넌트를 재사용 할 수 있을까?

```tsx
export const UnReusableInput = ({ label, rules }: Props) => {
  const { control } = useFormContext<SomeType>();
  const [field, fieldState] = useController({
    name: "propertyA",
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
```

이미 이 컴포넌트는 내부에서 필드명으로 프로퍼티 A를 명시해 두었기 때문에 재사용이 불가능하다. 그대로 복사를 떠서 propertyA 대신 propertyA'로 바꾼 새로운 컴포넌트를 만들던지 혹은 control과 fieldName을 props으로 받아 사용하는 방법이 있을텐데

그럴때 field.value의 타입이 명확하지 않기때문에 장황한 타입정의를 하던지 아니면
강제 타입캐스팅을 해야하는 상황에 빠지는데 강제 타입캐스팅이건 장황한 타입정의건
원래는 필요하지 않았을 코드를 추가해야한다.

## 3. 베스트 프랙티스?

결국 컴포넌트 재사용을 위해서는 control을 통해 필드를 뽑아내서 컴포넌트에 필드의 value와 onChange를 전달하여 controlled 컴포넌트로 만드는 방식을 추천한다.

그러기 위해서 최적화를 위해 useControl을 사용하는 컴포넌트, 그리고 컨트롤드 컴포넌트 두가지를 만들어서 컨트롤드 컴포넌트를 재사용하는 방식을 추천한다.
혹은 <Control>를 활용하던지,

ReactHookForm에 종속된 컴포넌트는 추천하지 않는다. 장황한 코드를 추가해야하고, 추적이 힘들고, 그렇게 힘들게 컴포넌트를 구성해도 모델이 조금만 달라도 재사용 할 수 없기 때문이다.
