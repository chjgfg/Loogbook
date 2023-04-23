<template>
  <div class="edits">
    <div v-if="editor" class="edit-button">
      <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        加粗
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        斜体
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        删除
      </button>
      <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        代码
      </button>

      <button @click="editor.chain().focus().unsetAllMarks().run()">
        清除
      </button>
      <button @click="editor.chain().focus().clearNodes().run()">
        清除列表
      </button>
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        段首对齐
      </button>

      <button>
        <el-dropdown>
          <span class="font-zise">
          字号
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
              <span @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                h1
              </span>
              </el-dropdown-item>
              <el-dropdown-item>
              <span @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                h2
              </span>
              </el-dropdown-item>
              <el-dropdown-item>
              <span @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                h3
              </span>
              </el-dropdown-item>
              <el-dropdown-item>
              <span @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                h4
              </span>
              </el-dropdown-item>
              <el-dropdown-item>
              <span @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                h5
              </span>
              </el-dropdown-item>
              <el-dropdown-item>
              <span @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                h6
              </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </button>


      <!--    </floating-menu>-->
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        点列表
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        排序列表
      </button>
      <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        代码块
      </button>
      <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        块引用
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        水平线
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        换行
      </button>
      <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
        撤销
      </button>
      <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
        恢复
      </button>
      <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
        新建表
      </button>
      <button @click="editor.chain().focus().addColumnBefore().run()" :disabled="!editor.can().addColumnBefore()">
        前加1列
      </button>
      <button @click="editor.chain().focus().addColumnAfter().run()" :disabled="!editor.can().addColumnAfter()">
        后加1列
      </button>
      <button @click="editor.chain().focus().deleteColumn().run()" :disabled="!editor.can().deleteColumn()">
        删除列
      </button>
      <button @click="editor.chain().focus().addRowBefore().run()" :disabled="!editor.can().addRowBefore()">
        上加1行
      </button>
      <button @click="editor.chain().focus().addRowAfter().run()" :disabled="!editor.can().addRowAfter()">
        下加1行
      </button>
      <button @click="editor.chain().focus().deleteRow().run()" :disabled="!editor.can().deleteRow()">
        删除行
      </button>
      <button @click="editor.chain().focus().deleteTable().run()" :disabled="!editor.can().deleteTable()">
        删除表
      </button>
      <button @click="editor.chain().focus().mergeCells().run()" :disabled="!editor.can().mergeCells()">
        合并选中
      </button>
      <button @click="editor.chain().focus().splitCell().run()" :disabled="!editor.can().splitCell()">
        分割选中
      </button>
      <button @click="editor.chain().focus().toggleHeaderColumn().run()" :disabled="!editor.can().toggleHeaderColumn()">
        首列重色
      </button>
      <button @click="editor.chain().focus().toggleHeaderRow().run()" :disabled="!editor.can().toggleHeaderRow()">
        表头重色
      </button>
      <button @click="editor.chain().focus().toggleHeaderCell().run()" :disabled="!editor.can().toggleHeaderCell()">
        选中重色
      </button>
      <button @click="editor.chain().focus().mergeOrSplit().run()" :disabled="!editor.can().mergeOrSplit()">
        合并或分割
      </button>
      <button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()" :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')">
        无色填充
      </button>
      <button @click="editor.chain().focus().fixTables().run()" :disabled="!editor.can().fixTables()">
        恢复
      </button>
      <button @click="editor.chain().focus().goToNextCell().run()" :disabled="!editor.can().goToNextCell()">
        下一列
      </button>
      <button @click="editor.chain().focus().goToPreviousCell().run()" :disabled="!editor.can().goToPreviousCell()">
        上一列
      </button>
      <button @click="addImage">
        图片
      </button>
      <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
        左对齐
      </button>
      <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
        居中
      </button>
      <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
        右对齐
      </button>
      <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
        对齐
      </button>
      <button @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }">
        高亮
      </button>
      <button @click="save">
        保存
      </button>
    </div>
    <div class="content">
      <editor-content :editor="editor"/>
    </div>
  </div>
</template>

<script>
  import Table from '@tiptap/extension-table'
  import TableCell from '@tiptap/extension-table-cell'
  import TableHeader from '@tiptap/extension-table-header'
  import TableRow from '@tiptap/extension-table-row'
  import Document from '@tiptap/extension-document'
  import Dropcursor from '@tiptap/extension-dropcursor'
  import Image from '@tiptap/extension-image'
  import Paragraph from '@tiptap/extension-paragraph'
  import Text from '@tiptap/extension-text'
  import TaskItem from '@tiptap/extension-task-item'
  import TaskList from '@tiptap/extension-task-list'
  import Highlight from '@tiptap/extension-highlight'
  import Typography from '@tiptap/extension-typography'
  import TextAlign from '@tiptap/extension-text-align'
  import Code from '@tiptap/extension-code'
  import StarterKit from '@tiptap/starter-kit'
  import {Editor, EditorContent, FloatingMenu} from '@tiptap/vue-3'

  import {Color_highlighter} from '../../../utils/color_highlighter.ts'
  import {SmilieReplacer} from '../../../utils/smilie_replacer.ts'

  // import Paper from '../../../utils/Paper.js'


  const CustomDocument = Document.extend({
    content: 'taskList',
  });

  const CustomTaskItem = TaskItem.extend({
    content: 'inline*',
  });

  const CustomTableCell = TableCell.extend({
    addAttributes() {
      return {
        // extend the existing attributes …
        ...this.parent?.(),

        // and add a new one …
        backgroundColor: {
          default: null,
          parseHTML: element => element.getAttribute('data-background-color'),
          renderHTML: attributes => {
            return {
              'data-background-color': attributes.backgroundColor,
              style: `background-color: ${attributes.backgroundColor}`,
            }
          },
        },
      }
    },
  });

  export default {
    components: {
      EditorContent, FloatingMenu,
    },

    data() {
      return {
        editor: null,
      }
    },


    methods: {
      addImage() {
        const url = window.prompt('URL');
        if (url) {
          this.editor.chain().focus().setImage({src: url}).run()
        }
      },
      save(){
        console.log(this.editor.getJSON());
      }
    },

    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
          Table.configure({
            resizable: true,
          }),
          TableRow,
          TableHeader,
          CustomTableCell,
          Document,
          // Document.extend({
          //   content: 'paper',
          // }),
          // Paper,
          Paragraph,
          Text,
          Image,
          Dropcursor,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
          Highlight,
          Typography,
          TaskList,
          CustomTaskItem,
          Color_highlighter,
          SmilieReplacer,
          Code,
        ],
        content: `https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png`,
      })
    },

    beforeUnmount() {
      this.editor.destroy()
    },
  }
</script>

<style lang="less">
  .edits {
    width: 90%;
    margin-left: 5%;

    .edit-button {

      button, .font-zise {
        font-size: 5px;
        text-align: center;
        color: #0D0D0D;
        line-height: normal;
      }
    }

    .ProseMirror-focused {

      &:focus {
        outline: 1px;
      }
    }
    .ProseMirror {
      margin-top: 20px;
      height: 470px !important;
      padding: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      /*border: 1px solid #959595;*/
      border-radius: 0.5em;
      &:hover {
        cursor: pointer;
      }

      /*滚动条的样式,宽高分别对应横竖滚动条的尺寸*/

      &::-webkit-scrollbar {
        width: 2px;
      }

      /*滚动条里面默认的小方块,自定义样式*/

      &::-webkit-scrollbar-thumb {
        background: #626faf;
        border-radius: 2px;
      }

      /*滚动条里面的轨道*/

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      > * + * {
        margin-top: 0.75em;

      }

      ul, ol {
        padding: 0 1rem;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.1;
      }

      code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
      }

      pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
          color: inherit;
          padding: 0;
          background: none;
          font-size: 0.8rem;
        }
      }

      img {
        max-width: 100%;
        height: auto;
      }

      blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
      }

      hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
      }


      table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden;

        td, th {
          min-width: 1em;
          border: 2px solid #ced4da;
          padding: 3px 5px;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;

          > * {
            margin-bottom: 0;
          }
        }

        th {
          font-weight: bold;
          text-align: left;
          background-color: #f1f3f5;
        }

        .selectedCell:after {
          z-index: 2;
          position: absolute;
          content: "";
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(200, 200, 255, 0.4);
          pointer-events: none;
        }

        .column-resize-handle {
          position: absolute;
          right: -2px;
          top: 0;
          bottom: -2px;
          width: 4px;
          background-color: #adf;
          pointer-events: none;
        }

        p {
          margin: 0;
        }
      }

      ul[data-type="taskList"] {
        list-style: none;
        padding: 0;

        li {
          display: flex;
          align-items: center;

          > label {
            flex: 0 0 auto;
            margin-right: 0.5rem;
            user-select: none;
          }

          > div {
            flex: 1 1 auto;
          }
        }

        input[type="checkbox"] {
          cursor: pointer;
        }
      }

      code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
      }
    }
  }

  .tableWrapper {
    overflow-x: auto;
  }

  .color {
    white-space: nowrap;

    &::before {
      content: ' ';
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 1px solid rgba(128, 128, 128, 0.3);
      vertical-align: middle;
      margin-right: 0.1em;
      margin-bottom: 0.15em;
      border-radius: 2px;
      background-color: var(--color);
    }
  }

  .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }

  .content {
    margin-top: 50px;
    height: 500px !important;
    padding: 0;
  }

</style>
