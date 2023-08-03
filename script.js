 let bundeslaender = [];

async function init() {
    let resp = await fetch('./bundesland.json');
    bundeslaender = await resp.json();
    render();
}


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < bundeslaender.length; i++) {
        let land = bundeslaender[i];

        content.innerHTML += /*html*/`
            <a class="bbox" href="${land['url']}" target = "_blank">
                <div>${land['name']}</div>
                <div class="text-gray">${land['population']} Millionen</div>
            </a>
        `
    }

}