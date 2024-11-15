let movableDiv = document.querySelector('#movable')
let mouseDown = false
let main = document.querySelector('main')


movableDiv.addEventListener('mousemove', updatePos)
movableDiv.addEventListener('mousedown', function(){ mouseDown = true
  movableDiv.style.boxShadow = '20px 20px 66px #4f4f9e'
  movableDiv.style.background = 'linear-gradient(145deg, #8989ff, #7373e6)'
  digHole()
})
movableDiv.addEventListener('mouseup', function(){ mouseDown = false
movableDiv.style.boxShadow = '0px 0px 0px'
movableDiv.style.background = '#8080ff'
})

// function mousePosition() {
//   addEventListener('mousedown', updatePos)
// }

function updatePos (e) {
  if (mouseDown === true) {
    posX = e.pageX
    posY = e.pageY
    movableDiv.style.left = posX - 50 + 'px'
    movableDiv.style.top = posY -50 + 'px'
  }
}

function digHole () {
  let hole = document.createElement('div')
  hole.className ="hole"
  hole.style.left = getDivPos()[0]
  hole.style.top = getDivPos()[1]
  main.appendChild(hole)
}

function getDivPos () {
  const x = movableDiv.style.left
  const y = movableDiv.style.top
  return [x, y]
}
