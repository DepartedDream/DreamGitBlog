$(document).ready(function()
{
    var ddMusicPlayer=new DdMusicPlayer();
    ddMusicPlayer.initialDdMusicPlayer();
    $("#music_list").html($("#music_list_data").html());
    $("#music_list_data").remove();
    $($(".article_type")[0]).css({"color":"black","background-color":"white"});

    $(".article").on("click",function()
    {
        
        $("#article_list").hide();
        $("#article_content").show();
        $("#article_content").html(marked(decodeURIComponent($(this).attr("article_content"))));
        var codes = $("code");
        for (var i = 0; i <= codes.length; i++) {
            hljs.highlightBlock(codes[i]);
        }
    })

    $(".article_type").on("click",function()
    {
        $(".article_type").removeAttr("style");
        $(this).css({"color":"black","background-color":"white"});
        $("#article_content").hide();
        $("#article_list").show();
        if($(this).text()=="All")
        {
            $(".article").show();
        }
        else
        {
            for(var i=0;i<$(".article").length;i++)
            {
                if($(this).text()==$($(".article")[i]).attr("article_type"))
                {
                    $($(".article")[i]).show();
                }
                else
                {
                    $($(".article")[i]).hide();
                }
            }
        }
    })
})