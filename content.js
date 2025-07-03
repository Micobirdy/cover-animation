// 创建二维码容器
const qrContainer = document.createElement('div');
qrContainer.id = 'website-qr-code';
document.body.appendChild(qrContainer);

// 获取网站信息
const websiteName = document.domain;
const pageTitle = document.title.slice(0, 15);
const logoUrl = document.querySelector('link[rel*="icon"]')?.href || '';

// 创建二维码
const qr = new QRCode(qrContainer, {
  text: window.location.href,
  width: 256,
  height: 256,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// 添加网站logo
if (logoUrl) {
  const logoImg = document.createElement('img');
  logoImg.src = logoUrl;
  logoImg.style.position = 'absolute';
  logoImg.style.top = '50%';
  logoImg.style.left = '50%';
  logoImg.style.transform = 'translate(-50%, -50%)';
  logoImg.style.width = '20%';
  logoImg.style.height = 'auto';
  qrContainer.appendChild(logoImg);
}

// 添加网站名称和标题
const infoContainer = document.createElement('div');
infoContainer.innerHTML = `
  <div>${websiteName}</div>
  <div><strong>${pageTitle}</strong></div>
`;
qrContainer.appendChild(infoContainer);