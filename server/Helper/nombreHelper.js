const nombreHelper = {

    nombreFormat : (nombre, cygle) => {
       var format = new Intl.NumberFormat().format(nombre)
       return `${format} ${cygle}`
    }
}

export default nombreHelper