const linksSocialMedia = {
    github: "cfcamargo",
    instagram : "sr.fcamargo",    
    youtube : "UCpHsBW_ibRgXfqiJAHBWrQA",
    facbook : "sr.fcamargo",
    twitter : "camargoodev"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class")

        alert(social)
    }
}

changeSocialMediaLinks()