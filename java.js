// دالة التحكم في القائمة الجانبية
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const computedStyle = window.getComputedStyle(sidebar);
  if (computedStyle.right === "0px") {
    sidebar.style.right = "-260px";
  } else {
    sidebar.style.right = "0px";
  }
}

// كود التحكم في Slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (!slider || !prevBtn || !nextBtn) {
  console.error('Slider or navigation buttons are missing in the DOM.');
  return;
}

let currentIndex = 0; // الفهرس الحالي
const itemWidth = slider.children[0].offsetWidth + 20; // عرض كل كرت مع المسافة بين الكروت
const totalItems = slider.children.length; // إجمالي عدد الكروت
let itemsPerSlide = Math.floor(slider.parentElement.offsetWidth / itemWidth); // عدد العناصر التي يتم عرضها في كل مرة

// دالة لتحريك الـ Slider
function scrollSlider() {
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // استخدام الأقواس المربعة بشكل صحيح
}

// زر "التالي"
nextBtn.addEventListener('click', () => {
  const maxIndex = totalItems - itemsPerSlide; // آخر مجموعة يمكن عرضها
  if (currentIndex < maxIndex) {
    currentIndex++;
    scrollSlider();
  }
});

// زر "السابق"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollSlider();
  }
});

// تحديث عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
  const newItemWidth = slider.children[0].offsetWidth + 20;
  const newItemsPerSlide = Math.floor(slider.parentElement.offsetWidth / newItemWidth);
  if (itemsPerSlide !== newItemsPerSlide) {
    itemsPerSlide = newItemsPerSlide; // تحديث عدد العناصر لكل شريحة
    currentIndex = 0; // إعادة الفهرس إلى البداية
    scrollSlider();
  }
});