function line_numbers(el)
{	
	/* This function creates line numbers on source code in a pre tag
		by using ordered list <ol> tag and <li> for each line of code
		but the old code is layered on top of the ordered list so that
		when you copy and paste the code the tabs are preserved and you
		don't copy the line numbers.
		Created by Jeff Baker on April 5, 2013
		Copyright (C) 2013 Jeff Baker
		http://www.seabreezecomputers.com/syntax/
		
		Call the function like this:
		line_numbers(document.getElementById('line_nums')); 
	*/
	var lines = el.innerHTML.split('\n'); // split contents by newline
	el.style.position = "relative"; // Make the pre tag a relative element
	//el.style.margin = "1em";
	el.style.padding = "0";
	
	// Create another element that has identical style and innerHTML by copying el
	var cloned = el.cloneNode(true);
	cloned.style.position = "absolute"; // Absolute so we can put cloned element on top of old pre
	cloned.style.zIndex = 1; // You may have to increase the zIndex if you are using z-index other places
	cloned.style.top = '0px'; // Position on top of old element
	cloned.style.left = '3em'; // Position a little to the left.
	cloned.style.backgroundColor = "rgba(0,0,0, 0.81)"; // Add a background color
	cloned.style.height = 'auto';
	cloned.style.width = 'auto';
	cloned.style.overflow = "scroll";
	
	el.id = "old_"+el.id; // Change id of pre tag to "old_id"

	// Now add an Ordered List to the contents
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) // Chrome cuts off 3 digit line numbers on the left
		var new_contents = "<ol style='margin-left: .5em'>"; // if we don't add a .5em margin
	else
		var new_contents = "<ol>";
	for(var i=0; i<lines.length; i++)
	{
		new_contents += "<li><pre style='display: inline; visibility: hidden;'>"+lines[i]+"</pre></li>";
	}
	new_contents += "</ol>";
	
	el.innerHTML = new_contents; // Put the ordered list into the old element
	el.appendChild(cloned); // Add the new cloned element to the old element

} // end function line_numbers(el)


if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4))
{
	// if Internet Explorer 4 or above	
	document.write('<INPUT TYPE="BUTTON" onClick = "selectElementContents(document.getElementById(\'preview\'));" VALUE="Copy to Clipboard">');
}
else // if netscape or firefox
{
	document.write('<INPUT TYPE="BUTTON" onClick = "selectElementContents(document.getElementById(\'preview\'));" VALUE="Select All"> then type CTRL-C to copy');
}

function selectElementContents(el) 
{
    /* http://stackoverflow.com/questions/8019534/how-can-i-use-javascript-to-select-text-in-a-pre-node-block */
	if (window.getSelection && document.createRange) {
        // IE 9 and non-IE
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (document.body.createTextRange) {
        // IE < 9
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");
    }
} // end function selectElementContents(el) 
