/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // For production deployments, specify allowed domains
    // domains: ['yourdomain.com'],
    
    // Disable if you're having optimization issues (temporary)
    unoptimized: false, // Keep as false for normal operation
    
    // For static exports (if you're using `next export`)
    // loader: 'custom',
    // loaderFile: './src/imageLoader.js',
    
    // Enable if you see "hostname not configured" errors
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all domains (not recommended for production)
      },
    ],
    
    // Adjust for your image quality needs
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Content Security Policy (if needed)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable React Strict Mode
  reactStrictMode: true,
}

export default nextConfig