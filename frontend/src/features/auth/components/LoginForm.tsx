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
import { Mail, Lock, Zap } from "lucide-react";
import { motion } from "motion/react";

const LoginForm: React.FC = () => {
  const email = "demo@ratelimiter.studio";
  const password = "demo";
  const rememberMe = true;
  const isLoading = false;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Card
      className={
        "max-w-md w-full !gap-4 !py-12 " +
        "bg-black/70 dark:bg-black/70 " +
        "border-[#78e26a]/50 shadow-2xl shadow-[#78e26a]/20 " +
        "backdrop-blur-sm"
      }
    >
      <CardHeader className="text-center !px-12 !pb-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }} // Use 360 for continuous spin
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-4 bg-[#78e26a]/10 rounded-2xl border border-[#78e26a]/20"
            >
              <Zap className="w-12 h-12 text-[#78e26a] stroke-2" />
            </motion.div>
          </div>

          <CardTitle className="text-xl text-[#78e26a] font-semibold pt-1">RateLimiter Studio</CardTitle>
          <CardDescription className="text-gray-400">Sign in to your account</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 !px-12 !pb-6">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email Input Group */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#78e26a] font-medium">
              <Mail className="size-4 inline-block mr-1 translate-y-[-1px]" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue={email}
              className={
                "h-12 text-base rounded-lg " +
                "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
              }
            />
          </div>

          {/* Password Input Group */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#78e26a] font-medium">
              <Lock className="size-4 inline-block mr-1 translate-y-[-1px]" />
              Password
            </Label>
            <Input
              id="password"
              type="password"
              defaultValue={password}
              className={
                "h-12 text-base rounded-lg " +
                "border-[#78e26a]/30 bg-black/40 text-white placeholder:text-gray-500 " +
                "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
              }
            />
          </div>

          {/* Remember Me & Forgot Password Section */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                className={
                  "rounded-sm border-2 border-[#78e26a] " +
                  "data-[state=checked]:bg-[#78e26a] data-[state=checked]:text-black " +
                  "focus-visible:ring-[#78e26a] focus-visible:ring-offset-black"
                }
              />
              <label
                htmlFor="remember"
                className="text-gray-400 cursor-pointer text-sm font-medium"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-[#78e26a] hover:underline text-sm font-medium">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full text-base font-semibold h-12"
            variant="neon"
            size="lg"
            disabled={isLoading}
          >
            Sign In
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 text-center !px-12 !pt-0 !pb-12">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-[#78e26a] font-semibold hover:underline">
            Sign up
          </a>
        </p>

        <div className="bg-black/40 border border-[#78e26a]/30 p-3 rounded-lg text-sm text-gray-400 shadow-md shadow-[#78e26a]/10">
          <p className="text-white">Demo Credentials:</p>
          <p className="text-[#78e26a] font-mono mt-1">demo@ratelimiter.studio / demo</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
