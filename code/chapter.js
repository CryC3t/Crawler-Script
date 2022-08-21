var uls=document.getElementsByTagName("ul")
//console.log(uls)
for(let i=0;i<uls.length;i++) {
	var lis=uls[i].getElementsByTagName("li")
	// console.log(lis.length)
	if(lis.length>8) {
		length=lis.length
		chapters=uls[i].getElementsByTagName("li")
	}
}
// console.log(chapters)
for(let i=0;i<length;i++) {
	var chapter=chapters[i].getElementsByTagName("a")
	//console.log(chapter[0])
	var title=chapter[0].innerHTML
	console.log(title)
	var href=chapter[0].href
	console.log(href)
	//对其中的href进行爬取
	window.open(href)
}
