export enum AnnotationEditorType{
  DISABLE = -1, // 禁用批注编辑器
  NONE = 0, // 没有批注类型
  FREETEXT = 3, // 自由文本批注
  HIGHLIGHT = 9, // 高亮批注
  STAMP = 13, // 盖章批注
  INK = 15 // 墨迹（自由绘制）批注
  };
export enum AnnotationEditorParamsType {
    RESIZE = 1,
    CREATE = 2,
    FREETEXT_SIZE = 11,
    FREETEXT_COLOR = 12,
    FREETEXT_OPACITY = 13,
    INK_COLOR = 21,
    INK_THICKNESS = 22,
    INK_OPACITY = 23,
    HIGHLIGHT_COLOR = 31,
    HIGHLIGHT_DEFAULT_COLOR = 32,
    HIGHLIGHT_THICKNESS = 33,
    HIGHLIGHT_FREE = 34,
    HIGHLIGHT_SHOW_ALL = 35,
  };

  // 自定义的批注类型枚举
// 用于定义在应用中使用的批注类型
export enum AnnotationType {
  NONE = -1, // 没有批注类型
  SELECT = 0, // 选择批注
  HIGHLIGHT = 1, // 高亮批注
  STRIKEOUT = 2, // 删除线批注
  UNDERLINE = 3, // 下划线批注
  FREETEXT = 4, // 自由文本批注
  RECTANGLE = 5, // 矩形批注
  ELLIPSE = 6, // 圆形批注
  FREEHAND = 7, // 自由绘制批注
  FREE_HIGHLIGHT = 8, // 自由高亮批注
  SIGNATURE = 9, // 签名批注
  STAMP = 10 // 盖章批注
}
export enum ModalTilte {
  TEXT_ANNOTATION = '文字批注',
  SIGNATURE = '选择签名'
}
// AnnotationEditorType
  