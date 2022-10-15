import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
renderer.domElement.setAttribute('class', 'webgl')

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  500
)
camera.position.set(0, 2, 10)

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

gsap.to(mesh.rotation, {
  y: 2 * Math.PI,
  duration: 3,
  yoyo: true,
  repeat: -1,
})

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
})

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}
animate()
