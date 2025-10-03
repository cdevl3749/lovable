module.exports = {
  flowFile: 'flows.json',
  uiPort: process.env.PORT || 1880,
  adminAuth: null, // ⚠️ Optionnel : pas de mot de passe admin
  httpNodeAuth: null,
  editorTheme: {
    projects: {
      enabled: false
    }
  },
  logging: {
    console: {
      level: 'info',
      metrics: false,
      audit: false
    }
  }
}

