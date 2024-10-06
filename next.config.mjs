/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            // Whenever style and script contents are chagned, new hashes need to be added.
            // Use Chrome Developer's Tool - Console to find the hash values.
            value:
              "img-src 'self' data: blob:; \
              style-src 'self' 'sha256-RpGvlRbRQPlLZDBLDKCjN1VY9+ac/RHqgjmDHc2Y6PA=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='; \
              font-src 'self' https://fonts.googleapis.com; \
              worker-src 'self' blob:; \
              base-uri 'none'; \
              form-action 'self'; \
              manifest-src 'self'; \
              object-src 'none'; \
              child-src blob:; \
              connect-src 'self'; \
              script-src 'self' 'unsafe-inline' 'unsafe-eval' http: https:;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            // Prevent XSS attacks. The following line disallows access
            // to camera, geolocation, and microphone.
            value: 'camera=(), geolocation=(), microphone=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Recommended by Next.js documentation to export as standalone
  // for Docker projects.
  // Source:
  //   https://github.com/vercel/next.js/tree/canary/examples/with-docker#in-existing-projects
  output: 'standalone',
};

export default nextConfig;
