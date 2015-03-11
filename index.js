var myLayout;
var editor;

$(document).ready(function () {

  // 构造左右两个面板
  myLayout = $('body').layout({
    east: {
      size: '50%',
      resizable: false,
      togglerLength_open: 0,
      spacing_open: 1,
      onresize: function(){
        // ACE的wrap貌似有问题，这里手动触发一下。
        editor.session.setUseWrapMode(false);
        editor.session.setUseWrapMode(true);
      }
    }
  });

  // 左侧编辑器
  editor = ace.edit("editor");
  editor.$blockScrolling = Infinity;
  editor.renderer.setShowPrintMargin(false);
  editor.session.setMode("ace/mode/markdown");
  editor.session.setUseWrapMode(true);
  editor.setFontSize('14px');
  editor.focus();

  // 设置marked
  var renderer = new marked.Renderer();
  renderer.listitem = function(text) {
    var taskListRegex1 = /^\[ \]\s/
    if(taskListRegex1.test(text)) { // uncompleted task list
      text = text.replace(taskListRegex1, '<input type="checkbox" disabled/> ');
    }
    var taskListRegex2 = /^\[x\]\s/
    if(taskListRegex2.test(text)) { // completed task list
      text = text.replace(taskListRegex2, '<input type="checkbox" disabled checked/> ');
    }
    return marked.Renderer.prototype.listitem.apply(this, arguments);
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true
  });

  // 实时监听用户的编辑
  editor.session.on('change', function(){
    $('.markdown-body').html(marked(editor.session.getValue())); // 实时预览
    $('pre').addClass('prettyprint').addClass('linenums');
    prettyPrint(); // 语法高亮
  });

});
