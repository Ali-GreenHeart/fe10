export const nameGenerator = (len) => {
    const alphabet = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
    let ad = ''
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * len)
        ad += alphabet[randomIndex]
    }
    return ad
}
