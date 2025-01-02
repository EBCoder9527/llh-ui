# ths-upload 简介
- 普通附件上传
# 配置参数
## fileList
- 文件列表
- type：Array
## accept
- 接收文件类型限制
- type：String
## disabled
- 是否禁用
- type：Boolean
## maxCount
- 最大上传数量
- type：Number
## multiple
- 是否支持上传多个文件
- type：Boolean
## slotType
- 自定义上传样式
- type：String，默认值：default，传入任意其他值即可自定义书写上传控件组件
## isShowMsg
- 是否显示上传状态默认提示语
- type：Boolean
# 插槽
## name: fileItem
- 上传列表自定义样式
# 事件回调
## handleChange
- 文件上传变化事件回调
- 主要配合beforeUpload 对上传进行限制处理提示
## beforeUpload
- 文件上传前的校验和判断处理
# 示例代码
```vue
<template>
<Upload :fileList="fileList" @handleChange='handleChange' @beforeUpload="beforeUpload">
      <!-- 上传控件自定义插槽 -->
      <!-- 上传列表的自定义插槽 -->
      <template v-slot:fileItem="{ file,actions }">
      <a-space>
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>
        <a v-if="file.status === 'done'" href="javascript:;" @click="actions.download">下载</a>
        <a href="javascript:;" @click="actions.remove">删除</a>
      </a-space>
      </template>
    </Upload>
</template>
<script setup lang="ts">
const fileList = ref([
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
const handleChange = (info)=>{
  // 未通过上传预处理
   if (info.file.status === undefined) {
    message.error("上传受限！");
    fileList.value.pop();
  }
}
const beforeUpload = (file,fileList1,isPass)=>{
  // isPass 来决定是否通过上传预处理
  if (fileList.value.length > 3) {
    // return false;
    isPass.value = false
  }
  // 返回true 则走到handleChange，上传文件；返回false则挂起
}
</script>
```
# 注意事项
## 插槽
### 默认插槽
- 需传递slotType属性，值不为default即可
- 直接按照默认插槽书写即可
### fileItem
- 插槽模版接收 file，actions属性
## beforeUpload
- 第三个参数 来决定是否通过上传预处理，如果值为false 则进入handleChange `if (info.file.status === undefined) {}`判断语句中