
const axios = require('axios')
const cheerio = require('cheerio')

/*axios.get('https://binarysearch.com/@/BruceWayne007')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log("Error in getting html page", err);
    })
*/


const getIBScore = async () => {
    try {
        const { data } = await axios.get(
            'https://www.interviewbit.com/profile/anurag-alvala'
        );
        const $ = cheerio.load(data);
        const score = $("div.user-stats > div.stat.pull-left:eq(1)").html()
        //console.log(sc);

        return score;
    } catch (error) {
        throw error;
    }
};

getIBScore()
    .then((score) => console.log(score))
    .catch((err) => console.log("error in reading", err))
