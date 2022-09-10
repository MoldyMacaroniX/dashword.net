---
title: Dashword Article Editor
desc: Dashword article editor, for writing content in our format.
permalink: /editor/
layout: base.njk
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
<script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>

<h1 class="heading" style="margin-bottom: 25px;">Dashword Article Editor</h1>

<article class="article article-ta" style="margin-bottom: 0px;">
<textarea id="taEditor"></textarea>
</article>

<script>
var simplemde = new SimpleMDE({
    element: document.getElementById("taEditor"),
    hideIcons: ["fullscreen", "side-by-side"],
    placeholder: "Write your article here and copy paste it into a text file on your machine to save it.",
    renderingConfig: {
        singleLineBreaks: false,
    },
    autosave: {
        enabled: true,
        unique_id: "taEditor",
    },
});

var mdeContent = "";
simplemde.codemirror.on("change", function(){
	mdeContent = simplemde.value();
});
</script>

<button onclick="copy(mdeContent)" class="button" style="margin-bottom: 15px;">Copy Content To Clipboard</button>

<article class="article">
    <h1>How To Use The Dashword Article Editor</h1>
    <ul>
        <li>
            This editor is made to make working with markdown easier. That being said, press the question mark button in the toolbar to learn markdown syntax.
        </li>
        <li>
            Press the eye button in the toolbar to preview your article.
        </li>
        <li>
            Leave a blank line between paragraphs to separate them apart. Otherwise, they will render on the same line. Preview your article using the preview button as described above.
        </li>
        <li>
            Content is autosaved to your cookies every 10 seconds. However, this should not be used as your primary method of saving your work.
        </li>
        <li>
            Generally, don't use keep your articles here if you want to save them. Copy and paste them into a text file on your machine once you are done editing. Autosaving is only a last resort.
        </li>
        <li>
            To submit an article, copy and paste the contents of your article into a text file and submit the text file using the submission form below.
        </li>
        <!--<li>
            This editor is made possible by <a href="https://simplemde.com/">SimpleMDE Markdown Editor</a>.
        </li>-->
    </ul>
</article>

<a href="/posts/2/" class="button button-wide">Submit An Article</a>