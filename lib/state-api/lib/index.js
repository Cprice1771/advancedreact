class StateApi {

    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors:this.mapIntoObject(rawData.authors)
        };
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) =>{
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    getArticles() {
        return this.data.articles;
    }

    getAuthors() {
        return this.data.authors;
    }

    getState = () => {
        return this.data;
    }

    lookupAuthor = (authorId) => {
        return this.data.authors[authorId];
    }
}

export default StateApi;