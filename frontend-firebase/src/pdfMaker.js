import jsPDF from "jspdf";
import $ from "jquery";
$().ready(function() {
  var specialElementHandlers = {
    "#editor": function(element, renderer) {
      return true;
    }
  };

  $("#cmd").click(function() {
    var doc = new jsPDF();
    doc.fromHTML($("#root").html(), 15, 15, {
      width: 170,
      elementHandlers: specialElementHandlers
    });
    doc.save("Report.pdf");
  });
});
    