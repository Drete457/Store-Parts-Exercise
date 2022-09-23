const queryContent = (content, query) => {
	if (!content || !query) return content;
	const toReturn = content.reduce((filteredContent, part) => {
		const stringifiedPart = JSON.stringify(part).toLowerCase();
		if (stringifiedPart.includes(query)) filteredContent.push(part);
        return filteredContent;
	}, []);
	return toReturn;
};

module.exports = queryContent;
