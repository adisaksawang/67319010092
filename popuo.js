window.onload = () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopupBtn');

  // แสดง popup ทันทีเมื่อโหลดหน้าเว็บ
  popup.style.display = 'block';

  // ปิด popup
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // ปิด popup เมื่อคลิกพื้นหลัง
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
};