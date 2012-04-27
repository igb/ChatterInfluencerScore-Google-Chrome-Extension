function replaceInfluencerBarWithNumber()
{
    var elems = document.getElementsByTagName('*'),i;
    for (i in elems)
        {
	    if((" "+elems[i].className+" ").indexOf(" influence-bar ") > -1)
		{
		    var children = elems[i].childNodes;
		    for (j in children)
			{
			    if((" "+children[j].className+" ").indexOf(" marker ") > -1) {
				var marker = children[j];
				var parentNode=elems[i].parentNode;
				parentNode.removeChild(elems[i]);
				var score=document.createElement("div");
				score.setAttribute("class", "influenceNumber");
				score.setAttribute("style", "color:#000000");
				score.innerHTML="<br/>Chatter Score: " + marker.style.left.substring(0, 5);
				parentNode.appendChild(score);
			    }
			
			}

		}
        }
}


replaceInfluencerBarWithNumber();


