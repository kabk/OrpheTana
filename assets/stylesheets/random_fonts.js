<section id = "inleiding" style = "display:none"> See You next season</div>
<div id = "div1" style="display:none">Details of the first match</div>
<div id = "div2" style="display:none">Details of the second match</div>

<script type = "text/javascript">

var today = new Date();

var endofseason = new Date("September 30, 2013");
if (today >= endofseason) {document.getElementById("cunextseason").style.display = "block"}

var startEventDate = new Date("February 1, 2013 14:00"); // time is optional
var endEventDate = new Date ("March 20, 2013 18:00");
if ((today >= startEventDate)  && (today <=endEventDate)) {document.getElementById("div1").style.display = "block"}
var startEventDate = new Date("February 10, 2013 08:00");
var endEventDate = new Date ("March 30, 2013 18:00");
if ((today >= startEventDate)  && (today <=endEventDate)) {document.getElementById("div2").style.display = "block"}

</script>