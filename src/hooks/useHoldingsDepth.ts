import { useLayoutEffect, type RefObject } from 'react'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

const STAGE_PERSPECTIVE = 1300
const HOVER_ZINDEX = 50
const HOVER_Z = 72
const HOVER_SCALE = 1.03
const DEPTH_DURATION = 0.35

type CardConfig = {
  selector: string
  baseZ: number
  baseZIndex: number
  baseRotateZ: number
  tiltX: number
  tiltY: number
  tiltRX: number
  tiltRY: number
}

const CARDS_CONFIG: CardConfig[] = [
  {
    selector: '[data-holding-panel]',
    baseZ: 32,
    baseZIndex: 4,
    baseRotateZ: 0,
    tiltX: 16,
    tiltY: 11,
    tiltRX: 2.4,
    tiltRY: 3.2,
  },
  {
    selector: '[data-holding-support="one"]',
    baseZ: 18,
    baseZIndex: 3,
    baseRotateZ: 2.2,
    tiltX: 8,
    tiltY: 6,
    tiltRX: 1.6,
    tiltRY: 2,
  },
  {
    selector: '[data-holding-support="two"]',
    baseZ: 22,
    baseZIndex: 2,
    baseRotateZ: -2.8,
    tiltX: 8,
    tiltY: 6,
    tiltRX: 1.6,
    tiltRY: 2,
  },
]

export function useHoldingsDepth(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const stage = root.querySelector<HTMLElement>('[data-depth-stage]') ?? root
        const bgImage = root.querySelector<HTMLElement>('[data-holding-image="featured"]')
        if (!stage) return

        stage.style.overflow = 'visible'
        stage.style.isolation = 'auto'
        stage.style.perspective = `${STAGE_PERSPECTIVE}px`
        stage.style.transformStyle = 'preserve-3d'

        gsap.set(stage, {
          transform: 'none',
          transformStyle: 'preserve-3d',
        })

        if (bgImage) {
          gsap.set(bgImage, {
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            force3D: true,
            z: -36,
          })
        }

        const bgDriver = bgImage
          ? {
              x: gsap.quickTo(bgImage, 'x', { duration: 0.48, ease: 'power3.out' }),
              y: gsap.quickTo(bgImage, 'y', { duration: 0.48, ease: 'power3.out' }),
              rotateX: gsap.quickTo(bgImage, 'rotateX', { duration: 0.48, ease: 'power3.out' }),
              rotateY: gsap.quickTo(bgImage, 'rotateY', { duration: 0.48, ease: 'power3.out' }),
            }
          : null

        const cardNodes = CARDS_CONFIG.map((config) => {
          const el = root.querySelector<HTMLElement>(config.selector)
          if (!el) return null

          el.style.isolation = 'auto'
          el.style.overflow = 'visible'
          el.style.transformStyle = 'flat'
          el.style.backfaceVisibility = 'visible'

          gsap.set(el, {
            transformStyle: 'flat',
            backfaceVisibility: 'visible',
            force3D: true,
            rotationZ: config.baseRotateZ,
            z: config.baseZ,
            zIndex: config.baseZIndex,
          })

          return {
            el,
            config,
            x: gsap.quickTo(el, 'x', { duration: 0.48, ease: 'power3.out' }),
            y: gsap.quickTo(el, 'y', { duration: 0.48, ease: 'power3.out' }),
            rotateX: gsap.quickTo(el, 'rotateX', { duration: 0.48, ease: 'power3.out' }),
            rotateY: gsap.quickTo(el, 'rotateY', { duration: 0.48, ease: 'power3.out' }),
          }
        }).filter(Boolean) as Array<{
          el: HTMLElement
          config: CardConfig
          x: (n: number) => void
          y: (n: number) => void
          rotateX: (n: number) => void
          rotateY: (n: number) => void
        }>

        let hoveredIndex = -1

        const poseCards = () => {
          cardNodes.forEach((item, index) => {
            const isHovered = index === hoveredIndex
            const targetZIndex = isHovered ? HOVER_ZINDEX : item.config.baseZIndex
            const targetZ = isHovered ? HOVER_Z : item.config.baseZ
            const targetScale = isHovered ? HOVER_SCALE : 1
            const targetLiftY = isHovered ? -8 : 0
            const targetRotateZ = isHovered ? item.config.baseRotateZ * 0.3 : item.config.baseRotateZ

            gsap.set(item.el, { zIndex: targetZIndex })
            gsap.to(item.el, {
              z: targetZ,
              scale: targetScale,
              y: targetLiftY,
              rotationZ: targetRotateZ,
              duration: DEPTH_DURATION,
              ease: 'power3.out',
              overwrite: 'auto',
              force3D: true,
            })
          })
        }

        const onMove = (event: PointerEvent) => {
          const rect = stage.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) return
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2

          if (bgDriver) {
            bgDriver.x(-nx * 14)
            bgDriver.y(-ny * 10)
            bgDriver.rotateX(ny * 2)
            bgDriver.rotateY(-nx * 2.6)
          }

          cardNodes.forEach((item, index) => {
            const isHovered = index === hoveredIndex
            const mult = isHovered ? 1.2 : 1
            item.x(nx * item.config.tiltX * mult)
            item.y((ny * item.config.tiltY + (isHovered ? -6 : 0)) * mult)
            item.rotateX(-ny * item.config.tiltRX * mult)
            item.rotateY(nx * item.config.tiltRY * mult)
          })
        }

        const onStageLeave = () => {
          hoveredIndex = -1
          poseCards()
          if (bgDriver) {
            bgDriver.x(0)
            bgDriver.y(0)
            bgDriver.rotateX(0)
            bgDriver.rotateY(0)
          }
          cardNodes.forEach((item) => {
            item.x(0)
            item.y(0)
            item.rotateX(0)
            item.rotateY(0)
          })
        }

        const enterHandlers = cardNodes.map((_, index) => () => {
          hoveredIndex = index
          poseCards()
        })

        const cardLeaveHandler = () => {
          hoveredIndex = -1
          poseCards()
        }

        stage.addEventListener('pointermove', onMove)
        stage.addEventListener('pointerleave', onStageLeave)

        cardNodes.forEach((item, index) => {
          item.el.addEventListener('pointerenter', enterHandlers[index])
          item.el.addEventListener('pointerleave', cardLeaveHandler)
        })

        return () => {
          stage.removeEventListener('pointermove', onMove)
          stage.removeEventListener('pointerleave', onStageLeave)
          cardNodes.forEach((item, index) => {
            item.el.removeEventListener('pointerenter', enterHandlers[index])
            item.el.removeEventListener('pointerleave', cardLeaveHandler)
            item.el.style.zIndex = ''
            item.el.style.isolation = ''
            item.el.style.overflow = ''
            item.el.style.transformStyle = ''
            item.el.style.backfaceVisibility = ''
          })
          stage.style.overflow = ''
          stage.style.isolation = ''
          stage.style.perspective = ''
          stage.style.transformStyle = ''
        }
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [rootRef])
}
