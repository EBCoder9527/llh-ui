# ths-img-upload 简介
- 支持上传图片、删除图片、回显、预览图片功能

# 配置参数
## fileList
- 文件数组对象
- type:Array<FileObj> 
```ts
type FileObj = {
    url:string,
    fileId?:string,
    [key:string]:any
}
```
## maxCount
- 最大上传数量 type:Number
## multiple
- 是否支持多选文件 type:Boolean
## disabled
- 是否禁用
# 事件
## delFile
- 删除文件事件
- 可传递一个当前删除的index
## uploadFn
- 上传文件处理函数
- 传递一个 option配置
# 示例代码
```vue
<template>
 <UploadImg :fileList="fileList" @delFile="delFile" />
 </template>
 <script lang='ts' setup>
 import { reactive } from "vue";
 const fileList = reactive([
    {
      uid: '-1',
      name: 'image1.jpg',
      status: 'done',
      url: 'https://img2.baidu.com/it/u=1906530840,3695714173&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
    },
    {
      uid: '-2',
      name: 'image2.jpg',
      status: 'done',
      url: 'https://img2.baidu.com/it/u=1906530840,3695714173&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
    },
  ]);
const delFile = (index)=>{
  fileList.splice(index,1)
}
const uploadFn = (options: any) => {
      const { file, onError } = options;
      
      const formData = new FormData();
      // 设置上传字段名称
      formData.append('editormd-image-file', file);
      // 调用后端上传接口
      uploadSysFileImage(formData) // 使用 uploadSysFile 方法
        .then(response => {
          console.log('res---', response);
          if (response.data.success) {
            message.success('文件上传成功');
            // 回显已上传图片
            getImageByIdFn(response.data.fileId, true);
          } else {
            message.error('文件上传失败');
          }
        })
        .catch(error => {
          console.log(error);
          message.error('文件上传失败');
        });
    };
     // 通过id获取图片
    function getImageByIdFn(fileId) {
      getImageById(fileId).then(res => {
        // 使用 URL.createObjectURL 创建一个临时的 URL
        const imageUrl = URL.createObjectURL(res.data);
        const file = {
          url: imageUrl,
          fileId,
        };
        // 将临时 URL 设置为 img 的 src
        fileList.value.push(file);
      });
    }
 </script>
```
# 注意