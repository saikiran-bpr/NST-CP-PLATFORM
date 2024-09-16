// next.config.mjs
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    }
  };
  
  export default nextConfig;