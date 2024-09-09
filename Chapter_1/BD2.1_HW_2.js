import express from "express";
const app = express();

let githubPublicData = {
    username: "ankit123",
    fullName: "Ankit Kumar",
    email: "ankit@gmail.com", repositories: 24,
    gists: 12,
    joinedOn: "Sep 2018",
}

// Exercise 1: Profile URL
app.get("/github-profile", (req, res) => {
    let profileUrl = getProfileUrl(githubPublicData); 
    res.json({ profileUrl: profileUrl });
});

function getProfileUrl(githubPublicData) {
    return `https://github.com/${githubPublicData.username}`;
}


// Exercise 2: Public Email
app.get("/github-public-email", (req, res) => {
    let publicEmail = getPublicEmail(githubPublicData); 
    res.json({publicEmail: publicEmail });
});

function getPublicEmail(githubPublicData) { 
    return githubPublicData.email;
}


// Exercise 3: Get Repos Count
app.get("/github-repos-count", (req, res) => {
    let reposCount = getReposCount(githubPublicData); 
    res.json({ reposCount: reposCount });
});

function getReposCount(githubPublicData) { 
    return githubPublicData.repositories;
}


// Exercise 4: Get Gists Count

app.get("/github-gists-count", (req, res) => {
    let gistsCount = getGistsCount(githubPublicData); 
    res.json({ gistsCount: gistsCount });
});
    
function getGistsCount(githubPublicData) { 
    return githubPublicData.gists;
}


// Exercise 5: Get User Bio
app.get("/github-user-bio", (req, res) => {
    let userBio = getUserBio(githubPublicData); 
    res.json(userBio);
});

function getUserBio(githubPublicData) {  
    return {
        fullName: githubPublicData.fullName, 
        joinedOn: githubPublicData.joinedOn,
        email: githubPublicData.email
    }
}


// Exercise 6: Repository URL

app.get("/github-repo-url", (req, res) => {
    let repoName = req.query.repoName;
    let repoUrl = getRepoUrl(githubPublicData, repoName); 
    res.json({ repoUrl: repoUrl});
});

function getRepoUrl(githubPublicData, repoName) {
    return `https://github.com/${githubPublicData.username}/${repoName}`;
}


app.listen(3000, () => {
    console.log("server is running on port 3000");
});