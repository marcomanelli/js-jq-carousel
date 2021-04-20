$(function(){
  $('.next').click(nextImage)
  $('.prev').click(prevImage)

  function nextImage() {
    var activeImg = $('.images img.active')
    var activeCircle = $('.nav i.active')

    activeImg.removeClass('active')
    activeCircle.removeClass('active')

    if(activeImg.hasClass('last')) {
      $('.images img.first').addClass('active')
      $('.nav i.first').addClass('active')
    }else{
      activeImg.next('img').addClass('active')
      activeCircle.next('i').addClass('active')
    }
  }

  function prevImage() {
    var activeImg = $('.images img.active')
    var activeCircle = $('.nav i.active')

    activeImg.removeClass('active')
    activeCircle.removeClass('active')

    if(activeImg.hasClass('first')) {
      $('.images img.last').addClass('active')
      $('.nav i.last').addClass('active')
    }else{
      activeImg.prev('img').addClass('active')
      activeCircle.prev('i').addClass('active')
    }
  }
})