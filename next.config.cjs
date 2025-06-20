/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_AWS_REGION: 'us-east-1',
    NEXT_PUBLIC_COGNITO_CLIENT_ID: '47cqd1ogpsuicbd79aajigcl6',
    NEXT_PUBLIC_USER_POOL_ID: 'us-east-1_BPNJtlBQz'
  }
}

module.exports = nextConfig 