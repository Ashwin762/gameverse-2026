import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { gsap } from 'gsap'

const DEFAULT_MODEL_URL = 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf'
const SCREEN_ZOOM_MULTIPLIER = 15
const MODEL_BASE_ROTATION = {
  x: 0,
  y: Math.PI,
  z: 0
}

function disposeMaterial(material) {
  if (Array.isArray(material)) {
    material.forEach((item) => item.dispose())
    return
  }
  material.dispose()
}

export default function IntroOverlay({ onComplete, modelUrl = DEFAULT_MODEL_URL }) {
  const rootRef = useRef(null)
  const canvasRef = useRef(null)
  const modelRef = useRef(null)
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const targetRotationRef = useRef(new THREE.Vector2(0, 0))
  const baseRotationRef = useRef(new THREE.Vector3(0, 0, 0))
  const isTransitioningRef = useRef(false)

  useEffect(() => {
    const rootEl = rootRef.current
    const canvasEl = canvasRef.current

    if (!rootEl || !canvasEl) {
      return undefined
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 8.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    canvasEl.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    const cyanLight = new THREE.PointLight(0x00f2ff, 15, 20)
    const magentaLight = new THREE.PointLight(0xff00ff, 10, 20)

    cyanLight.position.set(5, 3, 5)
    magentaLight.position.set(-5, -3, 2)

    scene.add(ambient)
    scene.add(cyanLight)
    scene.add(magentaLight)

    const raycaster = new THREE.Raycaster()
    const loader = new GLTFLoader()
    let frameId = 0
    let isTransitioning = false

    const fallbackGeometry = new THREE.TorusKnotGeometry(1.1, 0.28, 128, 32)
    const fallbackMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f2ff,
      emissive: 0x001f22,
      metalness: 0.8,
      roughness: 0.25
    })

    const fitModelInView = (object3D, fitFactor = 1.24) => {
      const box = new THREE.Box3().setFromObject(object3D)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      const maxDim = Math.max(size.x, size.y, size.z)
      const fov = (camera.fov * Math.PI) / 180
      const cameraDistance = Math.max((maxDim / (2 * Math.tan(fov / 2))) * fitFactor, 4.2)

      camera.position.z = cameraDistance
      camera.lookAt(0, 0, 0)

      object3D.position.sub(center)
    }

    const applyScreenZoom = (multiplier = SCREEN_ZOOM_MULTIPLIER) => {
      camera.position.z = Math.max(camera.position.z / multiplier, 1.2)
      camera.lookAt(0, 0, 0)
    }

    const addFallbackModel = () => {
      const mesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial)
      mesh.scale.setScalar(1.05)
      baseRotationRef.current.set(0, 0, 0)
      mesh.rotation.set(0, 0, 0)
      scene.add(mesh)
      modelRef.current = mesh
      fitModelInView(mesh)
      applyScreenZoom()
    }

    loader.load(
      modelUrl,
      (gltf) => {
        modelRef.current = gltf.scene
        baseRotationRef.current.set(
          MODEL_BASE_ROTATION.x,
          MODEL_BASE_ROTATION.y,
          MODEL_BASE_ROTATION.z
        )
        modelRef.current.rotation.set(
          baseRotationRef.current.x,
          baseRotationRef.current.y,
          baseRotationRef.current.z
        )
        modelRef.current.scale.set(1.12, 1.12, 1.12)
        scene.add(modelRef.current)
        fitModelInView(modelRef.current)
        applyScreenZoom()
      },
      undefined,
      () => {
        addFallbackModel()
      }
    )

    const onMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
      targetRotationRef.current.x = -mouseRef.current.y * 0.52
      targetRotationRef.current.y = mouseRef.current.x * 0.52
    }

    const onWheel = (event) => {
      const nextX = targetRotationRef.current.x + event.deltaY * 0.0012
      targetRotationRef.current.x = THREE.MathUtils.clamp(nextX, -0.6, 0.6)
    }

    const onClick = () => {
      if (isTransitioning || !modelRef.current) {
        return
      }

      raycaster.setFromCamera(mouseRef.current, camera)
      const intersects = raycaster.intersectObject(modelRef.current, true)

      if (!intersects.length) {
        return
      }

      isTransitioning = true
      isTransitioningRef.current = true

      const timeline = gsap.timeline({
        onComplete: () => {
          onComplete?.()
        }
      })

      const startScale = modelRef.current.scale.x

      timeline.to(cyanLight, {
        intensity: 24,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      })

      timeline.to(magentaLight, {
        intensity: 4,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      }, '<')

      timeline.to(camera.position, {
        z: Math.max(camera.position.z * 0.08, 0.12),
        duration: 0.78,
        ease: 'power4.in'
      }, '+=0.02')

      timeline.to(modelRef.current.rotation, {
        x: modelRef.current.rotation.x + 0.22,
        y: modelRef.current.rotation.y + 0.95,
        duration: 0.78,
        ease: 'power4.in'
      }, '<')

      timeline.to(modelRef.current.scale, {
        x: startScale * 3.2,
        y: startScale * 3.2,
        z: startScale * 3.2,
        duration: 0.78,
        ease: 'power4.in'
      }, '<')

      timeline.to(
        rootEl,
        {
          opacity: 0,
          filter: 'blur(14px)',
          duration: 0.52,
          ease: 'power2.out'
        },
        '-=0.32'
      )
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    const animate = () => {
      frameId = window.requestAnimationFrame(animate)

      const model = modelRef.current
      if (model) {
        if (!isTransitioningRef.current) {
          const targetX = baseRotationRef.current.x + targetRotationRef.current.x
          const targetY = baseRotationRef.current.y + targetRotationRef.current.y
          const targetZ = baseRotationRef.current.z

          model.rotation.x += (targetX - model.rotation.x) * 0.1
          model.rotation.y += (targetY - model.rotation.y) * 0.1
          model.rotation.z += (targetZ - model.rotation.z) * 0.12
          model.rotation.y += 0.002
        }
      }

      renderer.render(scene, camera)
    }

    animate()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('click', onClick)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      window.cancelAnimationFrame(frameId)

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose()
        }
        if (object.material) {
          disposeMaterial(object.material)
        }
      })

      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [modelUrl, onComplete])

  return (
    <div ref={rootRef} className="gv-intro-root" role="dialog" aria-label="GameVerse intro">
      <div ref={canvasRef} className="gv-intro-canvas" />
      <div className="gv-intro-title-wrap" aria-hidden="true">
        <h1 className="gv-intro-title">GAMEVERSE 2026</h1>
        <p className="gv-intro-subtitle">DATE TO BE ANNOUNCED</p>
      </div>
      <div className="gv-intro-overlay-ui">
        <div className="gv-intro-glitch">Click to experience the game dev world</div>
      </div>
    </div>
  )
}
