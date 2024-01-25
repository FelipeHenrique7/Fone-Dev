function showImgPreview() {
    $('.preview-container').show();
    $('#prev-img').attr('src', 'https://i.postimg.cc/rwm6FtY6/hset.png');
  }
  
  
  function hidePreview() { $('.preview-container').hide(); }
  function showAlert(mess) { 
    Swal.fire({ position: 'center', icon: 'success', title: '', text: mess, showConfirmButton: false, timer: 1500 }); 
  }