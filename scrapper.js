
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')


/*axios.get('https://binarysearch.com/@/BruceWayne007')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log("Error in getting html page", err);
    })
*/

const getIBScore = async (username) => {
    try {
        const { data } = await axios.get(
            `https://www.interviewbit.com/profile/${username}`
        );
        const $ = cheerio.load(data);
        const score = $(".user-stats > .stat.pull-left:nth-of-type(2) > .txt").html()
        return score;
    } catch (error) {
        throw error;
    }
};

getIBScore('varunrudrangi')
    .then((score) => console.log(score))
    .catch((err) => console.log("error in reading", err))


const getCFScore = async (username) => {
    try {
        const { data } = await axios.get(
            `https://codeforces.com/api/user.info?handles=${username}`
        );
        //console.log(data)
        const rating = data.result[0].rating;
        return rating
    } catch (error) {
        throw error;
    }
};
    
getCFScore('varunrudrangi')
    .then((score) => console.log(score))
    .catch((err) => console.log("error in reading", err))



    const getCCScore = async (username) => {
        try {
            const { data } = await axios.get(
                `https://www.codechef.com/users/${username}`
            );
            const $ = cheerio.load(data);
            const rating = $(".rating-number").html()
            return rating
        } catch (error) {
            throw error;
        }
    };      
    getCCScore('lemillion22')
        .then((score) => console.log(score))
        .catch((err) => console.log("error in reading", err))


const getHRScore = async (username) => {
    try {
        const obj = await fetch(
            `https://www.hackerrank.com/rest/hackers/${username}/scores_elo`,{
                headers: {
                    method: 'GET',
                    mode: 'no-cors',
                }
                ,
                proxy: {
                    host: '104.236.174.88',
                    port: 3128
                }
            }
            );
            obj.json().then(res=>console.log(res)).catch(err=>console.log(err))
            //trackid -3,-17 add cheyali
            const score = 69
            return score;
        } catch (error) {
            throw error;
        }
};
    getHRScore('anuragalvala2000')
    .then((score) => console.log(score))
    .catch((err) => console.log("error in reading", err))

        
    
     

const getBSscore = async (username) => {
    try {
        const { data } = await axios.get(
            `https://binarysearch.com/api/users/${username}/profile?`
        );
        
    const score = data.user.stat.grade;
    return score;


    }
    catch (error) {
        throw error;
    }
};      
    getBSscore('BruceWayne007')
        .then((score) => console.log(score))
        .catch((err) => console.log("error in reading", err))
        