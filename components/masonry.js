"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { animated } from "@react-spring/web"
import "./masonry.css"

function Masonry({ data }) {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(4)
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(3)
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(2)
      } else {
        setColumns(1) // Breakpoint for mobile devices
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  const ref = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }

    handleResize() // Set initial width
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [ref])

  const [heights, gridItems] = useMemo(() => {
    const heights = new Array(columns).fill(0)
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights))
      const x = (width / columns) * column
      const y = (heights[column] += child.height / 2) - child.height / 2
      return { ...child, x, y, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, data, width])

  return (
    <div ref={ref} className="masonry" style={{ height: Math.max(...heights) }}>
      {gridItems.map((item) => (
        <animated.div
          key={item.id}
          style={{
            x: item.x,
            y: item.y,
            width: item.width,
            height: item.height,
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </animated.div>
      ))}
    </div>
  )
}

export default Masonry
