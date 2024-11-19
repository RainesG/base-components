import styles from './index.module.scss'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import React from 'react'

export interface BulletType {
  text?: string
  avatar?: string
}

export interface BulletScreenType {
  bullets: { text?: string; avatar?: string }[]
  className?: string
  bulletStyle?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  duration?: string
  lines?: number
}

const baseClass = `bulletScreen`

export const BulletScreen = ({
  bullets,
  bulletStyle,
  className,
  direction = 'left',
  duration = '5s',
  lines = 3
}: BulletScreenType) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const bulletsRef = useRef<HTMLDivElement>(null)
  const [containerRect, setContainerRect] = useState<DOMRect>()
  const [bulletsRect, setBulletsRect] = useState<DOMRect | null>(null)
  const horizontal = useMemo(() => {
    return direction === 'left' || direction === 'right'
  }, [direction])
  const amountsPerLine = useMemo(() => {
    return Math.ceil(bullets.length / lines)
  }, [lines])
  const transferedBullets = useMemo(() => {
    let result: BulletType[][] = []
    let tempArray = ([] as BulletType[]).concat(bullets)

    for (let index = 0; index < lines; index++) {
      result.push(tempArray.splice(0, amountsPerLine))
    }

    return result
  }, [amountsPerLine])

  console.count('bullets')

  useLayoutEffect(() => {
    if (!containerRef.current || !bulletsRef.current) return
    setContainerRect(containerRef.current.getBoundingClientRect())
    setBulletsRect(bulletsRef.current.getBoundingClientRect())
  }, [])

  return (
    <div
      className={classNames(styles[`${baseClass}`], className)}
      ref={containerRef}
      style={{
        maxHeight: bulletsRect?.height,
        maxWidth: Math.min(
          bulletsRect?.width || window.innerWidth,
          window.innerWidth
        )
      }}
    >
      <div
        className={classNames(
          styles[`${baseClass}_wrapper`],
          styles[`${baseClass}_${direction}`]
        )}
        style={{
          animationDuration: duration,
          flexDirection:
            direction === 'up' || direction === 'down' ? 'column' : 'row',
          maxWidth: !horizontal ? '100%' : 'unset'
        }}
      >
        <div
          className={styles[`${baseClass}_bullets`]}
          ref={bulletsRef}
          style={{
            minWidth: horizontal
              ? Math.min(
                  containerRect?.width || window.innerWidth,
                  window.innerWidth
                )
              : 'unset',
            maxWidth: horizontal ? 'unset' : '100%'
          }}
        >
          {transferedBullets.map((bulletsGroup, groupIndex) => {
            return (
              <div
                className={styles[`${baseClass}_bulletsGroup`]}
                key={`bulletsGroup-${groupIndex}`}
                style={{ flexWrap: horizontal ? 'nowrap' : 'wrap' }}
              >
                {bulletsGroup.map(({ avatar, text }, index) => {
                  return (
                    <div
                      className={classNames(
                        styles[`${baseClass}_item`],
                        bulletStyle
                      )}
                      key={`marquee-${index}`}
                      style={{
                        flex: horizontal ? 1 : 'unset',
                        maxWidth: horizontal ? 'unset' : '100%'
                      }}
                    >
                      <img
                        src={avatar || ''}
                        className={styles[`${baseClass}_avatar`]}
                      />
                      <p
                        className={styles[`${baseClass}_text`]}
                        style={{
                          maxWidth: horizontal
                            ? 'unset'
                            : 'calc(100% - 1.4rem)',
                          whiteSpace: horizontal ? 'nowrap' : 'pre-wrap'
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        <div
          className={styles[`${baseClass}_bullets`]}
          ref={bulletsRef}
          style={{
            minWidth: horizontal
              ? Math.min(
                  containerRect?.width || window.innerWidth,
                  window.innerWidth
                )
              : 'unset',
            maxWidth: horizontal ? 'unset' : '100%'
          }}
        >
          {transferedBullets.map((bulletsGroup, groupIndex) => {
            return (
              <div
                className={styles[`${baseClass}_bulletsGroup`]}
                key={`bulletsGroup-${groupIndex}`}
                style={{ flexWrap: horizontal ? 'nowrap' : 'wrap' }}
              >
                {bulletsGroup.map(({ avatar, text }, index) => {
                  return (
                    <div
                      className={classNames(
                        styles[`${baseClass}_item`],
                        bulletStyle
                      )}
                      key={`marquee-${index}`}
                      style={{
                        flex: horizontal ? 1 : 'unset',
                        maxWidth: horizontal ? 'unset' : '100%'
                      }}
                    >
                      <img
                        src={avatar || ''}
                        className={styles[`${baseClass}_avatar`]}
                      />
                      <p
                        className={styles[`${baseClass}_text`]}
                        style={{
                          maxWidth: horizontal
                            ? 'unset'
                            : 'calc(100% - 1.4rem)',
                          whiteSpace: horizontal ? 'nowrap' : 'pre-wrap'
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
