import * as THREE from 'three'
import gsap from 'gsap'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
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

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}
animate()
