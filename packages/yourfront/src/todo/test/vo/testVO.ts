export interface MyCondition {
  id: number;
  title: string;
}

export interface MyMyVO {
  id: number;
  title: string;
  conditions: MyCondition[];
}

export interface YourYourVO {
  id: number;
  conditionList: MyCondition[];
}
