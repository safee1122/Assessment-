// Middleware to check if the user has the required permission
exports.checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      // Check if the user has a role with the required permission
      if (
        user &&
        user.userRole &&
        user.userRole.permissions.includes(requiredPermission)
      ) {
        next(); // User has the required permission, proceed to the next middleware/route
      } else {
        throw new Error("Unauthorized Access");
      }
    } catch (error) {
      next(error);
    }
  };
};
// Example usage:
// In your route definition, use the middleware like this:
// router.get("/some-protected-route", checkPermission("admin"), (req, res) => {
// Route logic for users with the required permission
//   res.json({ message: "Access granted!" });
// });
