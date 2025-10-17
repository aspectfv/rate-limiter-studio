import { useState, useEffect } from "react";
import { Form, useActionData, useNavigation, Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  User,
  Mail,
  Lock,
  Zap,
  AlertCircle,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const RegisterForm: React.FC = () => {
  const error = useActionData() as string | undefined;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error) {
      setHasError(true);
      const timeout = setTimeout(() => setHasError(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        x: hasError ? [-10, 10, -10, 10, 0] : 0,
      }}
      transition={{ duration: hasError ? 0.5 : 0.5 }}
      className="relative z-10 w-full max-w-md"
    >
      <Card
        className={
          "w-full !gap-4 !py-4 " +
          "bg-black/70 dark:bg-black/70 " +
          "border border-[#78e26a] shadow-[0_0_80px_rgba(120,226,106,0.3)] " +
          "backdrop-blur-sm"
        }
      >
        <div className="!px-6 !pt-6">
          <Link
            to="/auth/login"
            className="flex items-center text-gray-400 hover:text-[#78e26a] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to login
          </Link>
        </div>
        <CardHeader className="text-center !px-12 !pb-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-4 bg-[#78e26a]/10 rounded-2xl border border-[#78e26a]/20"
              >
                <Zap className="w-12 h-12 text-[#78e26a] stroke-2" />
              </motion.div>
            </div>

            <CardTitle className="text-xl text-[#78e26a] font-semibold pt-1">
              Create Account
            </CardTitle>
            <CardDescription className="text-gray-400">
              Join RateLimiter Studio
            </CardDescription>
          </motion.div>
        </CardHeader>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="mx-12 mb-6 p-4 bg-red-900/40 border border-red-500/50 rounded-lg flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <CardContent className="space-y-6 !px-12 !pb-6">
          <Form method="post" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="fullName" className="text-[#78e26a] font-medium">
                <User className="size-4 inline-block mr-1 translate-y-[-1px]" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="John Doe"
                className={
                  "h-12 text-base rounded-lg " +
                  "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
                disabled={isSubmitting}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="text-[#78e26a] font-medium">
                <Mail className="size-4 inline-block mr-1 translate-y-[-1px]" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className={
                  "h-12 text-base rounded-lg " +
                  "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
                disabled={isSubmitting}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="password" className="text-[#78e26a] font-medium">
                <Lock className="size-4 inline-block mr-1 translate-y-[-1px]" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className={
                  "h-12 text-base rounded-lg " +
                  "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
                disabled={isSubmitting}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <Label htmlFor="confirmPassword" className="text-[#78e26a] font-medium">
                <Lock className="size-4 inline-block mr-1 translate-y-[-1px]" />
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className={
                  "h-12 text-base rounded-lg " +
                  "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
                disabled={isSubmitting}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-start space-x-2 pt-2"
            >
              <Checkbox
                id="agree"
                name="agree"
                className={cn(
                  "mt-0.5 rounded-sm border-2 border-[#78e26a] " +
                  "data-[state=checked]:bg-[#78e26a] data-[state=checked]:text-black " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                )}
                disabled={isSubmitting}
                required
              />
              <label
                htmlFor="agree"
                className="text-gray-400 cursor-pointer text-sm leading-snug font-medium"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#78e26a] hover:underline transition-colors"
                >
                  Terms and Conditions
                </a>{" "}
                and
                <br className="sm:hidden" />
                <a
                  href="#"
                  className="text-[#78e26a] hover:underline transition-colors block sm:inline-block mt-0.5 sm:mt-0"
                >
                  Privacy Policy
                </a>
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                type="submit"
                className={
                  "w-full text-base font-semibold h-12 " +
                  "bg-[#78e26a] text-black " +
                  "shadow-[0_0_20px_rgba(120,226,106,0.8)] " +
                  "hover:bg-[#78e26a] hover:shadow-[0_0_60px_rgba(120,226,106,1)] " +
                  "transition-all duration-300"
                }
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </motion.div>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 text-center !px-12 !pt-0 !pb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-gray-400"
          >
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-[#78e26a] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </motion.p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RegisterForm;
