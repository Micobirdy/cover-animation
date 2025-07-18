# 可交互对话流 Demo PRD

## 一、产品目标

打造一个吸引用户的对话流 Demo，首页有动态或可交互的封面，点击后进入类似 ChatGPT 的多轮对话界面，提升用户参与感和科技感。

## 二、核心功能

1. **动态/可交互封面**
   - 动画背景（如粒子、波浪、渐变等）
   - 交互元素（如点击、拖拽、输入昵称等）
   - "开始对话"按钮动效
2. **对话界面**
   - 仿 ChatGPT 的气泡式对话流
   - AI 回复打字机动画
   - 多轮对话支持
   - 主题切换（深色/浅色）
   - 移动端适配
   - 对话历史本地保存
3. **平滑过渡动画**
   - 封面到对话界面的过渡动画

## 三、用户流程

1. 用户访问首页，看到动态/可交互封面
2. 用户点击"开始对话"按钮
3. 页面平滑过渡到对话界面
4. 用户输入消息，AI 进行回复
5. 用户可多轮对话，体验流畅
6. 可切换主题、查看历史

## 四、界面设计

- **首页封面**：
  - 居中动画背景
  - 中央"开始对话"按钮，带动效
  - 可选昵称输入或交互元素
- **对话界面**：
  - 左侧消息流，气泡区分用户/AI
  - 底部输入框，发送按钮
  - 右上角主题切换、清空历史等快捷操作
  - 响应式布局，适配移动端

## 五、技术方案

- **前端**：原生 JS/CSS/HTML 或 React/Vue（可选）
- **动画**：Canvas、SVG、anime.js、GSAP、Lottie
- **对话逻辑**：本地 if/else 或接入 AI API（如 OpenAI）
- **本地存储**：localStorage 保存对话历史
- **移动端适配**：响应式设计

## 六、里程碑

1. PRD 完成 & 设计稿确认（第1天）
2. 动态/交互封面开发（第2-3天）
3. 对话界面开发（第4-6天）
4. 动画与过渡效果完善（第7天）
5. 多轮对话与本地存储实现（第8天）
6. 主题切换与移动端适配（第9天）
7. 测试与优化（第10天）
8. Demo 发布（第11天） 