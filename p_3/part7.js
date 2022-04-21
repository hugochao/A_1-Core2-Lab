

window.addEventListener('DOMContentLoaded', () => {
  const channel = 'receipts-w-xyabskm1y';

  fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      renderTitle(data);
      renderBlocks(data);
      
    });
  
});

const renderTitle = (data) => {
  let title = data['title'];
  document.getElementById('channel-title').innerText = title;
};

const renderBlocks = (data) => {
  let blocks = data['contents'];
  let hue = 0;
  blocks.forEach((block) => {
    let blockClass = block['class'];
    if (blockClass == 'Image') {
      renderImage(block, hue);
    }
    hue = hue + 25;
  });
};

const renderImage = (block, hue) => {
  let imageUrl = block['image']['display']['url'];
  let imageBlockTemplate = document.getElementById('image-block');
  let clone = imageBlockTemplate.content.cloneNode(true);

  clone.querySelector('img').src = imageUrl;

  let randomWidth = Math.random()*5;
  let randomWidthValue = randomWidth + '%';
  clone.querySelector('li').style.setProperty('--width', randomWidthValue);

  document.getElementById('contents').appendChild(clone);
};







