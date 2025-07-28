import { useState } from "react"

export const useProjectImageSlider = () => {
  const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: number]: number }>({})

  const nextImage = (projectIndex: number, totalImages: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectIndex: number, totalImages: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectIndex]:
        prev[projectIndex] === 0 || prev[projectIndex] === undefined ? totalImages - 1 : prev[projectIndex] - 1,
    }))
  }

  const setImageIndex = (projectIndex: number, imageIndex: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }))
  }

  return {
    projectImageIndexes,
    nextImage,
    prevImage,
    setImageIndex,
  }
}
