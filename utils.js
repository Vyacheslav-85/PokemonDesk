function random (max, min) {
    const num = max - min
    return Math.ceil(Math.random() * num + min)
}
export default random