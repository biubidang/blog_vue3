<template>
<Header></Header>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script>
import Header from "@/components/myHeader";
export default {
  name: "test",
  components: {Header},
  data() {
    return {
      text: '# HelloMarkdown' +
          ' \n'+
          '# Welcome to Leanote!' +
          ' \n' +
          '## 1. 排版\n' +
          ' \n' +
          '**粗体** *斜体* \n' +
          ' \n' +
          '~~这是一段错误的文本。~~\n' +
          ' \n' +
          '引用:\n' +
          ' \n' +
          '> 引用Leanote官方的话, 为什么要做Leanote, 原因是...\n' +
          ' \n' +
          '有充列表:\n' +
          ' 1. 支持Vim\n' +
          ' 2. 支持Emacs\n' +
          ' \n' +
          '无序列表:\n' +
          ' \n' +
          ' - 项目1\n' +
          ' - 项目2\n' +
          ' \n' +
          ' \n' +
          '## 2. 图片与链接\n' +
          ' \n' +
          '图片:\n' +
          '![leanote](http://leanote.com/images/logo/leanote_icon_blue.png)\n' +
          '链接:\n' +
          ' \n' +
          '[这是去往Leanote官方博客的链接](http://leanote.leanote.com)\n' +
          ' \n' +
          '## 3. 标题\n' +
          ' \n' +
          '以下是各级标题, 最多支持5级标题\n' +
          ' \n' +
          '```\n' +
          '# h1\n' +
          '## h2\n' +
          '### h3\n' +
          '#### h4\n' +
          '##### h4\n' +
          '###### h5\n' +
          '```\n' +
          ' \n' +
          '## 4. 代码\n' +
          ' \n' +
          '示例:\n' +
          ' \n' +
          '    function get(key) {\n' +
          '        return m[key];\n' +
          '    }\n' +
          '    \n' +
          '代码高亮示例:\n' +
          ' \n' +
          '``` javascript\n' +
          '/**\n' +
          '* nth element in the fibonacci series.\n' +
          '* @param n >= 0\n' +
          '* @return the nth element, >= 0.\n' +
          '*/\n' +
          'function fib(n) {\n' +
          '  var a = 1, b = 1;\n' +
          '  var tmp;\n' +
          '  while (--n >= 0) {\n' +
          '    tmp = a;\n' +
          '    a += b;\n' +
          '    b = tmp;\n' +
          '  }\n' +
          '  return a;\n' +
          '}\n' +
          ' \n' +
          'document.write(fib(10));\n' +
          '```\n' +
          ' \n' +
          '```python\n' +
          'class Employee:\n' +
          '   empCount = 0\n' +
          ' \n' +
          '   def __init__(self, name, salary):\n' +
          '        self.name = name\n' +
          '        self.salary = salary\n' +
          '        Employee.empCount += 1\n' +
          '```\n' +
          ' \n' +
          '# 5. Markdown 扩展\n' +
          ' \n' +
          'Markdown 扩展支持:\n' +
          ' \n' +
          '* 表格\n' +
          '* 定义型列表\n' +
          '* Html 标签\n' +
          '* 脚注\n' +
          '* 目录\n' +
          '* 时序图与流程图\n' +
          '* MathJax 公式\n' +
          ' \n' +
          '## 5.1 表格\n' +
          ' \n' +
          'Item     | Value\n' +
          '-------- | ---\n' +
          'Computer | \\$1600\n' +
          'Phone    | \\$12\n' +
          'Pipe     | \\$1\n' +
          ' \n' +
          '可以指定对齐方式, 如Item列左对齐, Value列右对齐, Qty列居中对齐\n' +
          ' \n' +
          '| Item     | Value | Qty   |\n' +
          '| :------- | ----: | :---: |\n' +
          '| Computer | \\$1600 |  5    |\n' +
          '| Phone    | \\$12   |  12   |\n' +
          '| Pipe     | \\$1    |  234  |\n' +
          ' \n' +
          ' \n' +
          '## 5.2 定义型列表\n' +
          ' \n' +
          '名词 1\n' +
          ':   定义 1（左侧有一个可见的冒号和四个不可见的空格）\n' +
          ' \n' +
          '代码块 2\n' +
          ':   这是代码块的定义（左侧有一个可见的冒号和四个不可见的空格）\n' +
          ' \n' +
          '        代码块（左侧有八个不可见的空格）\n' +
          ' \n' +
          '## 5.3 Html 标签\n' +
          ' \n' +
          '支持在 Markdown 语法中嵌套 Html 标签，譬如，你可以用 Html 写一个纵跨两行的表格：\n' +
          ' \n' +
          '    <table>\n' +
          '        <tr>\n' +
          '            <th rowspan="2">值班人员</th>\n' +
          '            <th>星期一</th>\n' +
          '            <th>星期二</th>\n' +
          '            <th>星期三</th>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '            <td>李强</td>\n' +
          '            <td>张明</td>\n' +
          '            <td>王平</td>\n' +
          '        </tr>\n' +
          '    </table>\n' +
          ' \n' +
          ' \n' +
          '<table>\n' +
          '    <tr>\n' +
          '        <th rowspan="2">值班人员</th>\n' +
          '        <th>星期一</th>\n' +
          '        <th>星期二</th>\n' +
          '        <th>星期三</th>\n' +
          '    </tr>\n' +
          '    <tr>\n' +
          '        <td>李强</td>\n' +
          '        <td>张明</td>\n' +
          '        <td>王平</td>\n' +
          '    </tr>\n' +
          '</table>\n' +
          ' \n' +
          '**提示**, 如果想对图片的宽度和高度进行控制, 你也可以通过img标签, 如:\n' +
          ' \n' +
          '<img src="http://leanote.com/images/logo/leanote_icon_blue.png" width="50px" />\n' +
          ' \n' +
          '## 5.4 脚注\n' +
          ' \n' +
          'Leanote[^footnote]来创建一个脚注\n' +
          '  [^footnote]: Leanote是一款强大的开源云笔记产品.\n' +
          ' \n' +
          '## 5.5 目录\n' +
          ' \n' +
          '通过 `[TOC]` 在文档中插入目录, 如:\n' +
          ' \n' +
          '[TOC]\n' +
          ' \n' +
          '## 5.6 时序图与流程图\n' +
          ' \n' +
          '```sequence\n' +
          'Alice->Bob: Hello Bob, how are you?\n' +
          'Note right of Bob: Bob thinks\n' +
          'Bob-->Alice: I am good thanks!\n' +
          '```\n' +
          ' \n' +
          '流程图:\n' +
          ' \n' +
          '```flow\n' +
          'st=>start: Start\n' +
          'e=>end\n' +
          'op=>operation: My Operation\n' +
          'cond=>condition: Yes or No?\n' +
          ' \n' +
          'st->op->cond\n' +
          'cond(yes)->e\n' +
          'cond(no)->op\n' +
          '```\n' +
          ' \n' +
          '> **提示:** 更多关于时序图与流程图的语法请参考:\n' +
          ' \n' +
          '> - [时序图语法](http://bramp.github.io/js-sequence-diagrams/)\n' +
          '> - [流程图语法](http://adrai.github.io/flowchart.js)\n' +
          ' \n'
    };
  },
}
</script>

<style scoped>

</style>
