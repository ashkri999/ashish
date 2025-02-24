const pdfContainer = document.getElementById('pdf-container');

pdfjsLib.getDocument('AshishReadMe.pdf').promise.then(function(pdf) {
    pdf.getPage(1).then(function(page) {
        const scale = 1.5;
        const viewport = page.getViewport({scale: scale});

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext).promise.then(function() {
            pdfContainer.appendChild(canvas);
        });
    });
});
