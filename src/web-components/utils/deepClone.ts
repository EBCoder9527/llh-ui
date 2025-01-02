export function deepClone(obj) {
  // 如果是’Date‘、'RegExp'返回对应类型
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 如果是基本类型，直接返回
  if (obj === null || typeof obj !== "object") return obj;
  // 如果obj是数组，那么obj.constructor 是 [Funtion:Array]
  // 如果obj是数组，那么obj.constructor 是 [Funtion:Object]
  let t = new obj.constructor();
  for (let key in obj) {
    // 如果obj[key] 是复杂数据类型，递归
    // 是否是自身属性
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key]);
    }
  }

  return t;
}
