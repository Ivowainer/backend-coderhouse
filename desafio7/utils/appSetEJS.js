export const appSetEJS = (app) => {
    app.set('views', './views/ejs')
    app.set('view engine', 'ejs')
}