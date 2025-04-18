const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const APP_DIR = '/umbrel/app-data/wellness-tracker';
const SOURCE_DIR = path.join(__dirname, '..');

async function install() {
  try {
    // Create app directory
    await fs.ensureDir(APP_DIR);
    
    // Copy configuration files
    await fs.copy(
      path.join(SOURCE_DIR, 'docker-compose.yml'),
      path.join(APP_DIR, 'docker-compose.yml')
    );
    await fs.copy(
      path.join(SOURCE_DIR, 'umbrel-app.yml'),
      path.join(APP_DIR, 'umbrel-app.yml')
    );
    
    // Create data directories
    await fs.ensureDir(path.join(APP_DIR, 'data'));
    await fs.ensureDir(path.join(APP_DIR, 'cockroach-data'));
    
    // Start the app
    exec(`cd ${APP_DIR} && docker compose up -d`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting app: ${error}`);
        return;
      }
      console.log('App started successfully');
    });
  } catch (error) {
    console.error(`Installation failed: ${error}`);
  }
}

install(); 