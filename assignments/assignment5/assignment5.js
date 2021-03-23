var clickCount = 0;
var inputText;   
var topic1Blog;
var comment1Blog;
var comment2Blog; 

function postFunction()
{
    clickCount += 1;
    inputText = document.getElementById("text1").value;    
    topic1Blog = document.getElementById("topic1");
    comment1Blog = document.getElementById("comment1");
    comment2Blog = document.getElementById("comment2");    

    if (clickCount == 1)
    {
        topic1Blog.innerHTML = inputText;
    }
    else if (clickCount == 2)
    {
        comment1Blog.innerHTML = inputText;
    }
    else if (clickCount == 3)
    {
        comment2Blog.innerHTML = inputText;
    }    
}

function clearFunction()
{
    clickCount = 0;    
    document.getElementById("text1").value = "";
    topic1Blog.innerHTML = null;
    comment1Blog.innerHTML = null;
    comment2Blog.innerHTML = null;
}