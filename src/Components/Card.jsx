import React from 'react'

const Card = () => {
    const references = ["https://www.lastjourney.in/lp/delhi-ncr/freezer-box", "https://www.lastjourney.in/lp/delhi-ncr/freezer-box",
        "https://www.lastjourney.in/delhi-ncr/transport-services/", "https://www.lastjourney.in/lp/delhi-ncr/freezer-box",
        "https://www.lastjourney.in/delhi-ncr/transport-services/",
        "https://www.lastjourney.in/delhi-ncr/transport-services/", "https://www.lastjourney.in/lp/delhi-ncr/freezer-box",
        "https://www.lastjourney.in/delhi-ncr/transport-services/", "https://www.lastjourney.in/lp/delhi-ncr/freezer-box",
        "https://www.lastjourney.in/delhi-ncr/transport-services/", "https://www.lastjourney.in/lp/delhi-ncr/artists", "https://www.lastjourney.in/lp/delhi-ncr/obituary"]
    const srcCounter = ["https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_funeral-arrangement.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_chutha-_tervi1.jpg",
        "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_freezer3.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_funeral-arrangement.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_chutha-_tervi1.jpg",
        "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_freezer3.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_funeral-arrangement.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_chutha-_tervi1.jpg",
        "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_freezer3.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_funeral-arrangement.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_chutha-_tervi1.jpg",
        "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_freezer3.jpg", "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_175_110_cremation-ground8.jpg"]
    const str =
        references.map((link, i) => <div>
            < a href={link} title="Freezer Box" > <img class="lazyload" src={srcCounter[i]} alt="Freezer Box" title="Freezer Box" /></a>
            <p><a href={link} title="Freezer Box">Freezer Box</a></p>
        </div>
        )

    console.log(str);
    return str;
}



export default Card