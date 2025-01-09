// 文字转图片
export function textBecomeImg(text, fontsize, fontcolor) {
  var canvas = document.createElement("canvas");
  //小于32字加1  小于60字加2  小于80字加4    小于100字加6
  let $buHeight = 0;
  if (fontsize <= 32) {
    $buHeight = 1;
  } else if (fontsize > 32 && fontsize <= 60) {
    $buHeight = 2;
  } else if (fontsize > 60 && fontsize <= 80) {
    $buHeight = 4;
  } else if (fontsize > 80 && fontsize <= 100) {
    $buHeight = 6;
  } else if (fontsize > 100) {
    $buHeight = 10;
  }
  //对于g j 等有时会有遮挡，这里增加一些高度
  canvas.height = fontsize + $buHeight;
  let context = canvas.getContext("2d");
  // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
  context?.clearRect(0, 0, canvas.width, canvas.height);
  context!.fillStyle = fontcolor;
  context!.font = fontsize + "px 黑体";
  //top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
  context!.textBaseline = "middle";
  context!.fillText(text, 0, fontsize / 2 + 2);

  //如果在这里直接设置宽度和高度会造成内容丢失 , 暂时未找到原因 , 可以用以下方案临时解决
  //canvas.width = context.measureText(text).width;

  canvas.width = context!.measureText(text).width;
  context!.fillStyle = fontcolor;
  context!.font = fontsize + "px 黑体";
  context!.textBaseline = "middle";
  context!.fillText(text, 0, fontsize / 2 + 2);

  var dataUrl = canvas.toDataURL("image/png"); //注意这里背景透明的话，需要使用png
  return dataUrl;
}
// base64转file对象
export function base64ConvertFile(urlData) {
  if (typeof urlData != "string") {
    return;
  }
  var arr = urlData.split(",");
  var type = arr![0]!.match(/:(.*?);/)![1];
  var fileExt = type.split("/")[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], "filename." + fileExt, {
    type: type,
  });
}
// base64转blob url
export function base64ConvertBlobUrl(base64String) {
  // 1. 提取 Base64 数据中的 MIME 类型和编码部分
  const base64Data = base64String.split(",")[1]; // 去掉前缀 data:image/png;base64,

  // 2. 创建一个 Blob 对象
  const byteCharacters = atob(base64Data); // 解码 Base64 字符串
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset++) {
    const byteArray = byteCharacters.charCodeAt(offset);
    byteArrays.push(byteArray);
  }
  
  const blob = new Blob([new Uint8Array(byteArrays)], { type: "application/pdf" }); // 根据 MIME 类型调整

  //3. 创建 Blob URL
  const blobURL = URL.createObjectURL(blob);
  return blobURL;
}
