
/**
 * @param {string} word
 */
function capitalizeWord(word) {

    let word1 = word.toLowerCase().trim().replace(/[-,_]/g," "),
        firstChar = word1.charAt(0).toUpperCase(),
        splitedWords = word1.split(" "),
        validWords = [],
        newString = "";

    splitedWords.forEach(word=>{
        if (word !== "") {
            validWords.push(word)
        };
    });

    validWords[0] = `${firstChar}${validWords[0].slice(1)}`;
    validWords.forEach((word,index)=>{
        newString += `${word}`
        newString += (index < validWords.length -1)? ` ` : ``;
    });

    return newString;
};

/**
 * @param {Array} posts
 * @param {string} title
 */
function getMatch(posts,title){
    let matchedFlag = false, index = 0;
    
    while (!matchedFlag && posts.length -1 >= index) {
        if (posts[index++].title === title){
            matchedFlag = true;
        };
    };

    return {matchedFlag:matchedFlag,index:--index};
};

/**
 * @param {Object} post
 * @param {Number} index
 * @return {object} An object formed with two keys: title, content
 */
function truncateContent(content){
    return  (content.length > 100) ? content.slice(0,100-1) : 
            (content.length > 50) ? content.slice(0,50-1) :
            (content.length > 30) ? content.slice(0,30-1) :
            (content.length > 20) ? content.slice(0,20-1) :
            (content.length > 10) ? content.slice(0,10-1) :
            content;
    ;
};

/**
 * @param {[]} posts
 * @return {[{_id:"_id",title:"title",content:"content"}]} An array formed with objects, with 3 keys: {_id:"id", title:"title", content:"content"}
 */
function truncatePosts(posts){
    let postsToRender = [];
    
    posts.forEach((post)=>{
        postsToRender.push({
            _id:post._id,
            title:post.title,
            content:truncateContent(post.content)
        });
    });

    return postsToRender
};

module.exports = { capitalizeWord, getMatch, truncatePosts }
