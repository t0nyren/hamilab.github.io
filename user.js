//$DOC.mod('theme-switcher');

// example of using $DOC.parseContent function to create sections
$DOC.parseContent(function(){/*

<!--fixed-top-bar
[navbar]
[HAMI Lab]({{=$DOC.root}}index.html)
***
* [研究领域]({{=$DOC.root}}index.html)
 * [计算机视觉]({{=$DOC.root}}fields/cv.html)
* [项目]({{=$DOC.root}}index.html)
 * [人脸识别]({{=$DOC.root}}projects/welfare.html)
 * [人脸跟踪]({{=$DOC.root}}projects/facetrack.html)
 * [图片搜索]({{=$DOC.root}}projects/imgsearch.html)
 * [相似视频检测]({{=$DOC.root}}projects/dupvideo.html)
 * [票房预测]({{=$DOC.root}}projects/boxoffice.html)
* [团队]({{=$DOC.root}}info/team.html)
* [帮助]({{=$DOC.root}}index.html)
 * [CML (Component Markdown Language)]({{=$DOC.root}}docs/CML.html)
 * [CSS]({{=$DOC.root}}components/controls.css.html)
 * [Layout]({{=$DOC.root}}docs/layout.html)
 * [URL parameters]({{=$DOC.root}}docs/url-parameters.html)
 * [API]({{=$DOC.root}}docs/api.html)
 * [Editor]({{=$DOC.root}}docs/editor.html?edit)
 * [Blog]({{=$DOC.root}}blog.html)
 * [Overview]({{=$DOC.root}}docs/components.html)
 * [Navigation bar]({{=$DOC.root}}components/controls.navbar.html)
 * [Footer layout]({{=$DOC.root}}components/controls.footer-layout.html)
 * [Alert]({{=$DOC.root}}components/controls.alert.html)
 * [Panel]({{=$DOC.root}}components/controls.panel.html)
 * [Collapse]({{=$DOC.root}}components/controls.collapse.html)
 * [Tabbed panel]({{=$DOC.root}}components/controls.tabpanel.html)
 * [Carousel]({{=$DOC.root}}components/controls.carousel.html)
 * [Page layout]({{=$DOC.root}}components/controls.page-layout.html)
 * [Emoji]({{=$DOC.root}}components/controls.emoji.html)
 * [YouTube Player]({{=$DOC.root}}components/YouTube.Player.html)
 * [Mediawiki markup]({{=$DOC.root}}components/wiki.instaview.html)
 * [MathJax]({{=$DOC.root}}components/controls.math.html)
 * [Google Charts]({{=$DOC.root}}components/gcharts/Google%20Charts.html)
 * [d3js.org]({{=$DOC.root}}components/d3/d3.html)
 * [Code highlighting]({{=$DOC.root}}components/controls.highlight.html)
[/navbar]
-->

<!--header-panel

# HAMI Lab
### Human, Algorithm and Machine Intelligence Laboratory

-->

*/});

// another example of creating a named section
$DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2013 [aplib on GitHub](https://github.com/aplib/markdown-site-template) MIT\n\
***\n\
* [Free download template from GitHub](http://aplib.github.io/markdown-site-template/markdown-site-template.zip)\
[/footer-layout]';
