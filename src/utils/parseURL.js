export const requestName = () => {
    return window.location.pathname.split("/").pop().split("%20").join(" ")
}