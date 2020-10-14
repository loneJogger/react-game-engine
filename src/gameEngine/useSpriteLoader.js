const useSpriteLoader = (args) => {

  var spriteArray = []

  const loadImages = async () => {
    for (var i = 0; i < args.length; i++) {
      const image =  new Image()
      image.src = args[i]
      spriteArray.push(image)
    }
  }

  (async () => {
    await loadImages()
  })()

  return spriteArray

}

export default useSpriteLoader
