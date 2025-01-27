export const countCharactersWithHTMLTags = (content) => {
    let textContent = content?.length > 0
                        ? content.replace(/&nbsp;/g, '').replace(/<[^>]+>/g, '')
                        : '';
    
    return textContent.length;
}