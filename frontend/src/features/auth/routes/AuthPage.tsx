import Particles from "@/components/Particles";
import LoginForm from "../components/LoginForm";

function AuthPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Particles
          particleColors={['#78e26a', '#34d399', '#78e26a']}
          particleCount={250}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 flex justify-center items-center min-h-screen p-4">
        <LoginForm />
      </div>
    </div>
  );
}

export default AuthPage;
