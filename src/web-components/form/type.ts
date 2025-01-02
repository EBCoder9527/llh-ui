export type FormDataType = {
    type:
      | "input"
      | "textarea"
      | "select"
      | "radio"
      | "switch"
      | "checkbox"
      | "upload"
      | "singleDate"
      | "rangeDate"
      | "slot"; // 表单类型
    value: any; // 该字段的值
    label: string; // 名称
    filedName: string; //字段名称
    disabled?: boolean; // 是否禁用
    maxLength?:number; // textarea 最大字数
    rows?:number; // textarea 行数
    showCount?:boolean;// textarea 是否显示字数
    rule?: Object | Array<any>; // 校验规则
    placeholder?: string; // 提示语
    span?: number; // 一行占比，总共 24
    style?:Object; // 内联样式
    selectValue?: Array<SelectType>; // 下拉选择框options数据
    radioValue?: Array<SelectType>; // radio 数据
    checkboxValue?: Array<SelectType>; // checkbox 数据
  };

export type SelectType = {
    label: string;
    value: string | number | boolean;
  };