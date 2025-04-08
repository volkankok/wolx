export default {
  apps: [{
    name: 'wolx',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000,
      FRONTEND_URL: 'https://volkankok.dev',
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS,
      CORS_ORIGIN: 'https://volkankok.dev'
    }
  }]
}