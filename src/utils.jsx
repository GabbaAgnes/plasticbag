

export function getRandomColor () {
    const colors = ["#ffff8d", "#ff8a80", "#a7ffeb", "#ffd180", "#80d8ff", "#ccff90", "#cfd8dc"];
    return colors[Math.floor(Math.random() * colors.length)];
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula leo a justo \
auctor, ut tristique mauris finibus. Curabitur sit amet dignissim lorem. Sed semper, mauris vel max\
imus efficitur, erat sem facilisis tellus, nec porta libero odio non nisi. Ut sed mi at metus phare\
tra vehicula et ut urna. Vestibulum sed nibh aliquet, tempor quam sed, facilisis erat. In commodo p\
orttitor lacus, eget feugiat ipsum aliquam at. Donec ut suscipit odio. Ut dictum porttitor nunc, ve\
l fringilla neque interdum vitae. Etiam non dolor eget arcu iaculis vehicula. Nulla volutpat varius\
 venenatis. Praesent ac porttitor nunc. Fusce quis ex arcu. Donec at erat velit. Mauris nec metus n\
isi. Nunc ex lorem, vulputate nec felis id, commodo fringilla nunc. Donec dui velit, consequat vene\
natis rutrum sit amet, imperdiet nec nulla. In hac habitasse platea dictumst. Sed at ligula quis to\
rtor consequat gravida a ac ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices po\
suere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incept\
os himenaeos. Praesent vel bibendum ante. Fusce eros turpis, accumsan sit amet lobortis non, egesta\
s in tellus. Phasellus lacinia nec odio quis molestie. Nullam vestibulum sed lectus a molestie. Nul\
la varius ligula sollicitudin.`;
export function getRandomText (length = undefined) {
    let sentences = text.split(/\./g),
        start = Math.floor(Math.random() * (sentences.length - 2)),
        len = length || (1 + Math.floor(Math.random() * (sentences.length - start + 1)));
    return sentences.splice(start, len).join(".");
}

export function generateArticles () {
    let globalID = 0;

    let arr = new Array(1 + Math.floor(Math.random() * 5));

    for (let i = 0; i < arr.length; ++i) {
        arr[i] = {
            id: ++globalID,
            title: ``,
            text: ``,
            cover:`https://api.unsplash.com/search/photos?page=1&query=faces&client_id=9c69ae2ab3bc23ce9a209327505e667fd8cd529f78128c499961d43e1b653500`,
            //cover: `https://baronmag.ca/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ4OTU4NTE1MzIxMzgxOTQz/unnamed.jpg`,
            //cover: `https://source.unsplash.com/user/gabbaagnes/likes/1600x900.${ Math.random().toString().slice(2) }`,
            cardWidth: Math.random() > 0.8 ? 2 : 1
        };
    }

    return arr;

}

export function getRandomCard (id) {
    return {
        id: id,
        header: "This is a dummy card",
        body: getRandomText(),
        width: Math.random() > 0.8 ? 2 : 1,
        color: getRandomColor()
    };
}