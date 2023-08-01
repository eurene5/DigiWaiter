const textHelper = {
    generateSlug : (name) => {
        var slug = ""
        return slug += (name.replaceAll(' ', '-') + new Date().now())
    }
}