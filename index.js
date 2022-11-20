const answer = $(".answer")
const question = $(".Questions")

question.click(function()
{
    $(this).find(".qs-div").css("font-weight","700");

    $(this).find(".answer").slideToggle("slow");
})