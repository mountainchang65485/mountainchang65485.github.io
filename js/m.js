
// 圖片 URL 列表
const imageElements = document.querySelectorAll('.img-load');
const imageUrls = Array.from(imageElements).map(img => img.src);

   // 預載入圖片函數
   function preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
      img.onerror = () => reject(url);
    });
  }

  // 監控所有圖片載入完成
  Promise.all(
    imageUrls.map((url) => preloadImage(url))
  )
  .then(() => {
    console.log('所有圖片載入完成');
    $('#mask-cover').addClass('mask-hide');
  })
  .catch((errorUrl) => {
    console.error(`圖片載入失敗: ${errorUrl}`);
    $('#mask-cover').addClass('mask-hide');
  });
