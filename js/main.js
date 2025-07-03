//特殊效果
window.addEventListener("mousemove", function(e) {
    document.querySelectorAll(".magical").forEach(element => {
        if (!element.querySelector(".show")) {
            element.insertAdjacentHTML("beforeend", "<div class='show'></div>");
        }
        const rect = element.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        element.style.setProperty("--mouse-x", `${offsetX}px`);
        element.style.setProperty("--mouse-y", `${offsetY}px`);

        const hoverElement = element.querySelector(".show");
        if (hoverElement) {
            hoverElement.style.opacity = (offsetX >= 0 && offsetX <= element.clientWidth && offsetY >= 0 && offsetY <= element.clientHeight) ? 1 : 0;
        }
    });
});

//邮箱复制
var timeoutId;
document.addEventListener("DOMContentLoaded", function() {
    var Ecopied = document.getElementById('emailCopied');
    if(Ecopied){
        Ecopied.addEventListener("click", function() {
            clearTimeout(timeoutId);
            
            var inputElement = document.createElement("input");
            inputElement.value = this.textContent;
            document.body.appendChild(inputElement);
            inputElement.select();
            document.execCommand("copy");
            document.body.removeChild(inputElement);
            
            var copiedElement = document.getElementsByClassName('copied')[0];
            copiedElement.style.opacity = 1;
    
            timeoutId = setTimeout(function() {
                copiedElement.style.opacity = 0;
            }, 1000);
        });
    }
});

//移动端菜单
const menuExpand = document.getElementById("menu-expand");
    const menuExpandChild = document.getElementById("menu-expand-child");
    const menuPanel = document.getElementById("menu-panel");
    let isMenuOpen = false;

    menuExpand.addEventListener("click", function(event) {
        event.stopPropagation();

        if (!isMenuOpen) {
            menuPanel.style.left = "40px";
            menuPanel.style.transition = "left .5s";
        } else {
            menuPanel.style.left = "100vw";
            menuPanel.style.transition = "left .5s";
        }
        isMenuOpen = !isMenuOpen;

        menuExpand.classList.toggle("active");

        // 添加旋转动画
        menuExpandChild.children[0].style.transition = "transform .5s";
        menuExpandChild.children[0].style.transform = isMenuOpen ? "rotate(45deg)" : "rotate(0deg)";

        // 防止在动画期间再次点击
        menuExpand.style.pointerEvents = "none";

        // 监听动画结束事件
        menuPanel.addEventListener("transitionend", function() {
            menuExpand.style.pointerEvents = "auto";
            menuPanel.style.transition = "none";
        }, { once: true });
    });

    // 点击文档其他部分来关闭菜单
    document.addEventListener("click", function(event) {
        if (isMenuOpen && event.target !== menuExpand && event.target !== menuPanel) {
            menuPanel.style.left = "100vw";
            menuPanel.style.transition = "left .5s";
            isMenuOpen = false;
            menuExpand.classList.remove("active");

            // 添加反向旋转动画
            menuExpandChild.children[0].style.transition = "transform .5s";
            menuExpandChild.children[0].style.transform = "rotate(0deg)";
        }
    });

// 动态封面粒子动画
const canvas = document.getElementById('cover-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
function createParticles() {
  particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.5 + Math.random() * 2.5,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random(),
      alpha: 0.3 + Math.random() * 0.5
    });
  }
}
createParticles();
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = '#4f8cff';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}
animateParticles();

// 封面到对话界面切换
const cover = document.getElementById('cover');
const chat = document.getElementById('chat');
const startBtn = document.getElementById('start-btn');
const coverCard = document.getElementById('cover-card');
const chatSpace = document.getElementById('chat-space');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

if (startBtn) {
  startBtn.addEventListener('click', () => {
    coverCard.style.display = 'none';
    chatSpace.style.display = 'flex';
    chatInput.focus();
  });
}

function appendMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'bubble ' + sender;
  div.innerText = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function mockAIReply(userText) {
  if (/hello|hi|你好/i.test(userText)) {
    return 'Hello! How can I help you today?';
  } else if (/who|你是谁/i.test(userText)) {
    return 'I am Wegic, your AI assistant.';
  } else if (/bye|再见/i.test(userText)) {
    return 'Goodbye! Have a nice day!';
  } else {
    const replies = [
      'Interesting question! Let me think...',
      'I am still learning. Could you rephrase?',
      'That sounds great!',
      'Hmm, I see.',
      'Can you tell me more?'
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }
}

if (chatForm) {
  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const userText = chatInput.value.trim();
    if (!userText) return;
    appendMessage(userText, 'user');
    chatInput.value = '';
    setTimeout(() => {
      appendMessage(mockAIReply(userText), 'ai');
    }, 600 + Math.random() * 400);
  });
}

// 主题切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('chat-demo-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
// 读取主题
if (localStorage.getItem('chat-demo-theme') === 'dark') {
  document.body.classList.add('dark');
}

// 自动聚焦输入框
chatInput.addEventListener('focus', () => {
  setTimeout(() => chatMessages.scrollTop = chatMessages.scrollHeight, 100);
});