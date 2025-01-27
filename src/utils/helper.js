export const countCharactersWithHTMLTags = (content) => {
    console.log("content", content);
    const textContent = content.replace(/<[^>]+>/g, '');
    console.log("textContent", textContent);
    
    return textContent.length;
}