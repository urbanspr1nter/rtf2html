const editable = document.querySelector("#editor");

InlineEditor.create(editable).then((editorInstance) => {
    const editor = editorInstance;

    editor.model.change(writer => {
        const el = writer.createText("Testing!");

        editor.model.insertContent(el);
    });
});
