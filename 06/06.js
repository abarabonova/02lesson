let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play



//
let propsAnim01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#00ffff',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnim01.play


//
let valsAnim01 = anime({
  targets: '.vals .circle',
  translateX: 250,
  duration: 3000,
  backgroundColor: 'rgba(265,152,54,0.5)',
  borderRadius: [0, '50%'],
  easing: 'spring(10, 90, 10, 1)',
  autoplay: false
})

let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnim01.play



//
let valsAnim01 = anime({
  targets: '.elBtn01 .circle',
  translateX: 250,
  duration: 3000,
  backgroundColor: 'rgba(265,152,54,0.5)',
  borderRadius: [0, '50%'],
  easing: 'easeOutElastic(10, 5))',
  autoplay: false
})


let elBtn01 = document.getElementById('elBtn01')
elBtn01.onclick = elAnim01.play






let path = anime.path('path')
let svgMotion = anime ({
  targets: '.svgAnim .circle',
  translateX: path('x'),
  translateX: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 5000,
  loop: true
})
