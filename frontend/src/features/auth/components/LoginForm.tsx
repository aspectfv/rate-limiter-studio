import { useState, useEffect } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
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
  Mail,
  Lock,
  Zap,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const LoginForm: React.FC = () => {
  const error = useActionData() as string | undefined;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const email = "demo@ratelimiter.studio";
  const password = "demo";
  const rememberMe = true;

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
          "w-full !gap-4 !py-12 " +
          "bg-black/70 dark:bg-black/70 " +
          "border border-[#78e26a] shadow-[0_0_80px_rgba(120,226,106,0.3)] " +
          "backdrop-blur-sm"
        }
      >
        <CardHeader className="text-center !px-12 !pb-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
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
              RateLimiter Studio
            </CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to your account
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
              <Label htmlFor="email" className="text-[#78e26a] font-medium">
                <Mail className="size-4 inline-block mr-1 translate-y-[-1px]" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                defaultValue={email}
                className={
                  "h-12 text-base rounded-lg " +
                  "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
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
                defaultValue={password}
                className={
                  "h-12 text-base rounded-lg " +
                  "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-between items-center text-sm"
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={rememberMe}
                  className={
                    "rounded-sm border-2 border-[#78e26a] " +
                    "data-[state=checked]:bg-[#78e26a] data-[state=checked]:text-black " +
                    "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                  }
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="remember"
                  className="text-gray-400 cursor-pointer text-sm font-medium"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-[#78e26a] hover:underline text-sm font-medium"
              >
                Forgot password?
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
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
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 text-center !px-12 !pt-0 !pb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-gray-400"
          >
            Don't have an account?{" "}
            <a href="#" className="text-[#78e26a] font-semibold hover:underline">
              Sign up
            </a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-black/40 border border-[#78e26a]/30 p-3 rounded-lg text-sm text-gray-400 shadow-md shadow-[#78e26a]/10"
          >
            <p className="text-white">Demo Credentials:</p>
            <p className="text-[#78e26a] font-mono mt-1">
              demo@ratelimiter.studio / demo
            </p>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginForm;
