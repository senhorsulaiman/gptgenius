// import { withClerkMiddleware } from "@clerk/nextjs";
import { authMiddleware} from "@clerk/nextjs";
export default authMiddleware();
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};