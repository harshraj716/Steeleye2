function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  plainTextPositions.forEach((position) => {
    const textToHighlight = plainText.slice(position.start, position.end);
    const index = htmlContent.indexOf(textToHighlight);
    
    if (index !== -1) {
      const highlightedText = `<mark>${textToHighlight}</mark>`;
      htmlContent = htmlContent.slice(0, index) + highlightedText + htmlContent.slice(index + textToHighlight.length);
    }
  });
  
  return htmlContent;
}