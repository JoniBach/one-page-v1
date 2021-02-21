const defSpace = 10

const spacing = (props) => {
    return props ? props * defSpace : defSpace
}

const radius = (props) => {
    return props ? props : defSpace
}

const color = {
    background: 'black',
    surface: '#333',
    main: 'purple',
    accent: 'cyan',
}

export const themes = {
    spacing,
    color,
    radius
}