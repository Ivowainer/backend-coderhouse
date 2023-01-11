export const cookieSession = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect("/");
    }
    next();
};

export const cookieExistsSession = (req, res, next) => {
    if (req.session.user) {
        return res.redirect("/dashboard");
    }
    next();
};
