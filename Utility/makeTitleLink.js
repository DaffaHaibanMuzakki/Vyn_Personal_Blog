function TitleLink(data) {
    console.log("Ini adalah fungsi title link");
    console.log(data);
    return data.map(e => e.title.replaceAll(" ", "-").replaceAll("?","%3F"));
}





module.exports = TitleLink ;