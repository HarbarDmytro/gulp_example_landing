let panel = document.querySelector('.panel')

let xLabel = document.querySelector('.info .x')
let yLabel = document.querySelector('.info .y')

panel.addEventListener('mousemove', function (e) {
    const SIZE = 500
    const [EVENT_OPTION_X, EVENT_OPTION_Y] = ['x', 'y'].map(p => `offset${p.toUpperCase()}`)
    const point = [e[EVENT_OPTION_X], e[EVENT_OPTION_Y]]

    const transformCoefficient = 10

    const [xDeg, yDeg] = point.map(p => Math.round((p - (SIZE / 2)) / transformCoefficient * -1))

    xLabel.innerText = `${xDeg} deg`
    yLabel.innerText = `${yDeg} deg`

    panel.setAttribute('style', `transform: rotateY(${xDeg}deg) rotateX(${yDeg}deg)`)
})

panel.addEventListener('mouseleave', function () {
    panel.setAttribute('style', `transform: rotateX(0) rotateY(0)`)
})