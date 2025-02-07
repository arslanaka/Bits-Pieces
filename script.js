const bitContent = new Array(365).fill(null);

const bitsGrid = document.getElementById('bits-grid');
const contentDisplay = document.getElementById('content-display');
const displayText = document.getElementById('display-text');
const displayImage = document.getElementById('display-image');

function displayContent(content, imageUrl) {
  displayText.textContent = content || "No content available for this day.";
  if (imageUrl) {
    displayImage.src = imageUrl;
    displayImage.style.display = "block";
  } else {
    displayImage.style.display = "none";
  }
}

for (let i = 0; i < 365; i++) {
  const bit = document.createElement('div');
  bit.classList.add('bit');
  bit.addEventListener('click', () => {
    const content = bitContent[i]?.content || null;
    const imageUrl = bitContent[i]?.imageUrl || null;
    displayContent(content, imageUrl);
  });
  bitsGrid.appendChild(bit);
}

function addCustomContent() {
  const dateInput = document.getElementById('date-picker').value;
  const contentInput = document.getElementById('content-input').value;
  const imageUrlInput = document.getElementById('image-url').value;

  if (!dateInput || !contentInput) {
    alert("Please select a date and enter content.");
    return;
  }

  const date = new Date(dateInput);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date - startOfYear) / (1000 * 60 * 60 * 24));

  bitContent[dayOfYear] = { content: contentInput, imageUrl: imageUrlInput };

  bitsGrid.children[dayOfYear].style.backgroundColor = "#a0d8a0";

  alert("Content added successfully!");
}