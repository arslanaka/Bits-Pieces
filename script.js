let staticContent = JSON.parse(localStorage.getItem('staticContent')) || {
    0: { content: "New Year Cringe!" },
    32: { content: "Did this fun project" },
    364: { content: "Just another run" }
  };
  
  const bitsGrid = document.getElementById('bits-grid');
  const displayText = document.getElementById('display-text');
  
  for (let i = 0; i < 365; i++) {
    const bit = document.createElement('div');
    bit.classList.add('bit');
  
    if (staticContent[i]) {
      bit.style.backgroundColor = "#a0d8a0";
    }
  
    bit.addEventListener('click', () => fetchContentForDay(i));
    bitsGrid.appendChild(bit);
  }
  
  function fetchContentForDay(dayOfYear) {
    const data = staticContent[dayOfYear];
    if (data) {
      displayContent(data.content);
    } else {
      displayContent("No content available for this day.");
    }
  }
  
  function displayContent(content) {
    displayText.textContent = content || "No content available for this day.";
  }
  
  function addCustomContent() {
    const dateInput = document.getElementById('date-picker').value;
    const contentInput = document.getElementById('content-input').value;
  
    if (!dateInput || !contentInput) {
      alert("Please select a date and enter content.");
      return;
    }
  
    const date = new Date(dateInput);
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((date - startOfYear) / (1000 * 60 * 60 * 24));
  
    staticContent[dayOfYear] = { content: contentInput };
  
    localStorage.setItem('staticContent', JSON.stringify(staticContent));
  
    bitsGrid.children[dayOfYear].style.backgroundColor = "#a0d8a0";
    
    alert("Content added successfully!");
  }
    
  document.getElementById('add-content-button').addEventListener('click', addCustomContent);
  