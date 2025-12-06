/**
 * Aurora Borealis Theme Test File
 * This file demonstrates how the theme looks with various code elements
 */

// Import statements
import React, { useState, useEffect } from 'react';
import { AuroraEffect, NorthernLights } from './aurora-effects';

// Constants and variables
const AURORA_COLORS = ['#64FFDA', '#82B1FF', '#B388FF', '#FFE082', '#FF8A80'];
const MAX_INTENSITY = 100;
let currentIntensity = 0;

/**
 * Aurora Borealis simulation class
 * Demonstrates the mystical beauty of Northern Lights
 */
class AuroraBorealis {
    constructor(latitude = 69.0, longitude = -53.0) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.isActive = false;
        this.particles = [];
        this.colors = AURORA_COLORS;
    }

    /**
     * Initialize the aurora effect
     * @param {Object} options - Configuration options
     * @param {number} options.intensity - Aurora intensity (0-100)
     * @param {string} options.season - Current season
     */
    async initialize(options = {}) {
        const { intensity = 50, season = 'winter' } = options;
        
        try {
            this.intensity = Math.min(intensity, MAX_INTENSITY);
            this.season = season;
            
            // Generate particles based on solar activity
            await this.generateParticles();
            
            console.log(`🌌 Aurora initialized with ${intensity}% intensity`);
            return true;
        } catch (error) {
            console.error('❌ Failed to initialize aurora:', error.message);
            return false;
        }
    }

    /**
     * Generate aurora particles
     */
    async generateParticles() {
        const particleCount = Math.floor(this.intensity * 10);
        
        for (let i = 0; i < particleCount; i++) {
            const particle = {
                id: `particle_${i}`,
                x: Math.random() * 1000,
                y: Math.random() * 500,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                velocity: {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2
                },
                life: Math.random() * 100,
                opacity: Math.random()
            };
            
            this.particles.push(particle);
        }
    }

    /**
     * Start the aurora animation
     */
    start() {
        if (this.isActive) {
            console.warn('⚠️ Aurora is already active');
            return;
        }

        this.isActive = true;
        this.animationLoop();
        console.log('✨ Aurora animation started');
    }

    /**
     * Stop the aurora animation
     */
    stop() {
        this.isActive = false;
        console.log('🛑 Aurora animation stopped');
    }

    /**
     * Main animation loop
     */
    animationLoop() {
        if (!this.isActive) return;

        // Update particles
        this.particles.forEach(particle => {
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
            particle.life -= 0.5;
            particle.opacity = Math.sin(particle.life * 0.1) * 0.5 + 0.5;

            // Reset particle if it dies
            if (particle.life <= 0) {
                particle.x = Math.random() * 1000;
                particle.y = Math.random() * 500;
                particle.life = 100;
            }
        });

        // Continue animation
        requestAnimationFrame(() => this.animationLoop());
    }

    /**
     * Get current aurora statistics
     * @returns {Object} Statistics object
     */
    getStats() {
        return {
            activeParticles: this.particles.filter(p => p.life > 0).length,
            totalParticles: this.particles.length,
            intensity: this.intensity,
            isActive: this.isActive,
            location: `${this.latitude}°N, ${this.longitude}°W`
        };
    }
}

// React component example
const AuroraViewer = () => {
    const [aurora, setAurora] = useState(null);
    const [stats, setStats] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initAurora = async () => {
            setIsLoading(true);
            
            const newAurora = new AuroraBorealis(69.0, -53.0);
            const success = await newAurora.initialize({ 
                intensity: 75, 
                season: 'winter' 
            });

            if (success) {
                setAurora(newAurora);
                newAurora.start();
                
                // Update stats every second
                const statsInterval = setInterval(() => {
                    setStats(newAurora.getStats());
                }, 1000);

                return () => {
                    clearInterval(statsInterval);
                    newAurora.stop();
                };
            }
            
            setIsLoading(false);
        };

        initAurora();
    }, []);

    const handleIntensityChange = (newIntensity) => {
        if (aurora) {
            aurora.intensity = newIntensity;
            console.log(`🎚️ Intensity changed to ${newIntensity}%`);
        }
    };

    if (isLoading) {
        return <div className="loading">🌌 Loading Aurora...</div>;
    }

    return (
        <div className="aurora-viewer">
            <h1>Aurora Borealis Viewer</h1>
            
            <div className="controls">
                <button onClick={() => aurora?.start()}>
                    ▶️ Start Aurora
                </button>
                <button onClick={() => aurora?.stop()}>
                    ⏹️ Stop Aurora
                </button>
                
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={stats.intensity || 0}
                    onChange={(e) => handleIntensityChange(parseInt(e.target.value))}
                />
            </div>

            <div className="stats">
                <h3>Aurora Statistics</h3>
                <ul>
                    <li>Active Particles: {stats.activeParticles}</li>
                    <li>Total Particles: {stats.totalParticles}</li>
                    <li>Intensity: {stats.intensity}%</li>
                    <li>Status: {stats.isActive ? '🟢 Active' : '🔴 Inactive'}</li>
                    <li>Location: {stats.location}</li>
                </ul>
            </div>
        </div>
    );
};

// CSS styles (in template literal for syntax highlighting)
const styles = `
    .aurora-viewer {
        background: linear-gradient(135deg, #0B1426 0%, #1A2332 100%);
        color: #E8F4FD;
        padding: 20px;
        border-radius: 15px;
        font-family: 'Segoe UI', sans-serif;
    }

    .controls button {
        background: linear-gradient(45deg, #64FFDA, #82B1FF);
        border: none;
        color: #0B1426;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .controls button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(100, 255, 218, 0.4);
    }

    .stats {
        background: rgba(130, 177, 255, 0.1);
        border: 1px solid #82B1FF;
        border-radius: 10px;
        padding: 15px;
        margin-top: 20px;
    }

    .loading {
        text-align: center;
        font-size: 1.5em;
        color: #64FFDA;
    }
`;

// Regular expressions for pattern matching
const auroraPatterns = {
    colorHex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    coordinates: /^-?\d+\.?\d*°[NS],\s*-?\d+\.?\d*°[EW]$/,
    intensity: /^(100|[1-9]?\d)%$/
};

// Error handling example
try {
    const testAurora = new AuroraBorealis();
    testAurora.initialize({ intensity: 150 }); // This will be clamped to 100
} catch (error) {
    console.error('Error creating aurora:', error);
} finally {
    console.log('Aurora test completed');
}

// Export for use in other modules
export { AuroraBorealis, AuroraViewer, AURORA_COLORS };
export default AuroraBorealis;

// JSON configuration example
const auroraConfig = {
    "name": "Aurora Borealis Theme",
    "version": "1.0.0",
    "colors": {
        "primary": "#64FFDA",
        "secondary": "#82B1FF",
        "accent": "#B388FF",
        "warning": "#FFE082",
        "error": "#FF8A80"
    },
    "settings": {
        "intensity": 75,
        "autoStart": true,
        "particleCount": 500,
        "animationSpeed": 1.0
    },
    "locations": [
        { "name": "Tromsø, Norway", "lat": 69.6492, "lng": 18.9553 },
        { "name": "Fairbanks, Alaska", "lat": 64.8378, "lng": -147.7164 },
        { "name": "Yellowknife, Canada", "lat": 62.4540, "lng": -114.3718 }
    ]
};

console.log('🌌 Aurora Borealis Theme test file loaded successfully!');
