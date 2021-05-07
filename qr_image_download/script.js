/*
$('#cmd2').click(function() {
  	var options = {
		//'width': 800,
  	};
  	var pdf = new jsPDF('p', 'pt', 'a4');
  	pdf.addHTML($("#content2"), -1, 220, options, function() {
    	pdf.save('admit_card.pdf');
  	});
});
*/
var download = document.getElementById("downloadPDF");
download.addEventListener('click', function () {
    domtoimage.toPng(document.getElementById('content2'))
        .then(function (blob) {
            var pdf = new jsPDF('l', 'pt', [$('#content2').width(), $('#content2').height()]);

            pdf.addImage(blob, 'PNG', 0, 0, $('#content2').width(), $('#content2').height());
            pdf.save("test.pdf");

            that.options.api.optionsChanged();
        });
});

// $('#downloadPDF').click(function () {
//     domtoimage.toPng(document.getElementById('content2'))
//         .then(function (blob) {
//             var pdf = new jsPDF('l', 'pt', [$('#content2').width(), $('#content2').height()]);

//             pdf.addImage(blob, 'PNG', 0, 0, $('#content2').width(), $('#content2').height());
//             pdf.save("test.pdf");

//             that.options.api.optionsChanged();
//         });
// });