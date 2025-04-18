# Wellness Apps for Umbrel

A collection of wellness tracking applications for Umbrel.

## Available Apps

### Wellness Tracker
A holistic wellness tracking system that aggregates data from multiple sources into a unified dashboard.

Features:
- WHOOP integration
- Apple Health data
- FoodNoms nutrition tracking
- Day One journal integration
- Recovery tracking
- Spiritual practice logging

## Installation

1. Go to your Umbrel dashboard
2. Navigate to the App Store
3. Click "Add custom app store"
4. Enter: `https://github.com/yehleien/wellness.git`
5. Install the Wellness Tracker from the Wellness Apps store

## Data Sources

* WHOOP (Recovery scores, Sleep data, Strain metrics, HRV/RHR)
* Apple Health (Activity, Vitals, Workouts, Sleep)
* FoodNoms (Nutrition, Meal tracking)
* Day One (Journal entries, Mood tracking)
* Recovery Compass (AA meetings, Daily inventory, Recovery milestones)
* Spiritual Practice (Meditation, Prayer, Gratitude)

## Technical Stack

### Infrastructure

* Umbrel (Self-hosted platform)
* Docker (Container orchestration)
* CockroachDB (Distributed SQL database)

### Backend

* FastAPI (API framework)
* SQLAlchemy (Database ORM)

### Frontend

* Next.js (React framework)
* TailwindCSS (Styling)
* Chart.js (Data visualization)

## Implementation Phases


1. **Basic Infrastructure Setup**
   * Local development environment
   * Docker configuration
   * Database setup
2. **Core Backend Development**
   * Database schema
   * API endpoints
   * Data processing pipeline
3. **Frontend Development**
   * Basic UI
   * Data visualization
   * User experience
4. **Integration & Testing**
   * API integration
   * Data validation
   * Testing suite
5. **Deployment**
   * Umbrel package
   * Backup system
   * Monitoring

## Success Metrics

* System Performance: <1s API response, <2s page load, 99.9% uptime
* Data Quality: Real-time sync, daily imports, zero data loss
* User Experience: Intuitive dashboard, responsive design, meaningful insights

## Development Requirements

* Docker Desktop
* Node.js (v18+)
* Python (3.11+)
* Git


