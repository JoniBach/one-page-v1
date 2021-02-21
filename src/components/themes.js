const defSpace = 10

const spacing = (props) => {
    return props ? props * defSpace : defSpace
}

const radius = (props) => {
    return props ? props * defSpace : defSpace
}

const color = {
    background: '#36384C',
    surface: '#333',
    main: '#849974',
    accent: '#613843',
    // 36384C - blue
    // 849974 - green
    // E9DCCD - white
    // 613843 - read
}

export const themes = {
    spacing,
    color,
    radius
}