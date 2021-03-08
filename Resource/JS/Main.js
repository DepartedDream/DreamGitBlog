$(document).ready(function()
{
    var articleTypeCollection=$(".article_type");
    var articleCollection=$(".article");
    initialMusicPlayer();
    initialArticleList($(articleTypeCollection[0]));
    articleCollection.on("click",function()
    {
        hideArticleList()
        initialArticleContent($(this));
        initialArticleOutline();
    })
    articleTypeCollection.on("click",function()
    {
        initialArticleList($(this));
        hideArticleContent();
        clearArticleOutline();
    })
    scrollArticleTypeList();
    scrollArticleOutline();

})

function initialMusicPlayer()
{
    var ddMusicPlayer=new DdMusicPlayer();
    ddMusicPlayer.initialPlayerHtml(ddMusicPlayer);
    var musicList=$("#music_list");
    var musicListData=$("#music_list_data");
    musicList.html(musicListData.html());
    musicListData.remove();
    ddMusicPlayer.loadDefaultSetting(ddMusicPlayer);
    ddMusicPlayer.loadPlayerEvent(ddMusicPlayer);
}

function initialArticleList(articleType)
{
    var articleList=$("#article_list");
    var articleCollection=$(".article");
    var articleTypeCollection=$(".article_type");
    articleList.show();
    articleTypeCollection.removeAttr("style");
    articleType.css({"color":"black","background-color":"white"});
    if(articleType.text()=="全部")
    {
        articleCollection.show();
    }
    else
    {
        for(var i=0;i<articleCollection.length;i++)
        {
            if(articleType.text()==$(articleCollection[i]).attr("article_type"))
            {
                $(articleCollection[i]).show();
            }
            else
            {
                $(articleCollection[i]).hide();
            }
        }
    }
    articleList.css("height","");
    articleList.height(articleList.height()+80);
}

function initialArticleContent(article)
{

    var articleContent=$("#article_content");
    articleContent.show();
    articleContent.html(marked(decodeURI(article.attr("article_content"))));
    var codes = $("code");
    for (var i = 0; i < codes.length; i++) {
        hljs.highlightBlock(codes[i]);
    }
    $("img").attr("src",`Resource//Article//${$("img").attr("src")}`);
    articleContent.css("height","");
    articleContent.height(articleContent.height()+80);
}

function initialArticleOutline()
{
    var articleOutline=$("#article_outline_list");
    var articleContent=$("#article_content");
    articleOutline.html("");
    var headerCollection=articleContent.children(":header");
    for(var i=0;i<headerCollection.length;i++)
    {
        articleOutline.html(articleOutline.html()+$(headerCollection[i]).prop("outerHTML"));
    }
    var outlineCollection=$("#article_outline_list").children();
    $(outlineCollection).removeAttr("id");
    $(outlineCollection).attr("class","article_outline");
    $(outlineCollection).on("click",function()
    {
        for(var i=0;i<headerCollection.length;i++)
        {
            if($(headerCollection[i]).text()==$(this).text())
            {
                $("html,body").animate({scrollTop:$(headerCollection[i]).offset().top},500);
            }
        }
    })
}

function hideArticleList()
{
    var articleList=$("#article_list");
    articleList.hide();
}

function hideArticleContent()
{
    var articleContent=$("#article_content");
    articleContent.hide();
}

function clearArticleOutline()
{
    var articleOutline=$("#article_outline_list");
    articleOutline.html("");
}

function scrollArticleTypeList()
{
    $(window).scroll(function()
    {
        $("#article_type_list").css("margin-top",$(window).scrollTop());
    })
}

function scrollArticleOutline()
{
    $(window).scroll(function()
    {
        $("#article_outline_list").css("margin-top",$(window).scrollTop());
    })
}