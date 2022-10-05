export const generateCode = (value) => {
    let output = ''
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').forEach(item => {
        output += item.charAt(1) + item.charAt(0)
    });
    return output.toUpperCase() + value.length
}
