/**
 * Aurora Borealis Theme - VS Code Extension Entry Point
 * Inspired by the mystical Northern Lights
 */

const vscode = require('vscode');

/**
 * Called when the extension is activated
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
    console.log('🌌 Aurora Borealis Theme extension is now active!');
    
    // Register command to show welcome message manually
    const welcomeCommand = vscode.commands.registerCommand('aurora-borealis.showWelcome', () => {
        showWelcomeMessage();
    });
    
    context.subscriptions.push(welcomeCommand);
    
    // Check if this is the first time the extension is activated (installation)
    const hasShownWelcome = context.globalState.get('hasShownWelcome', false);
    
    if (!hasShownWelcome) {
        // Mark that we've shown the welcome message
        await context.globalState.update('hasShownWelcome', true);
        
        // Automatically show welcome message on first installation
        showWelcomeMessage();
    }
}

/**
 * Shows the welcome message in a webview panel
 */
function showWelcomeMessage() {
    const panel = vscode.window.createWebviewPanel(
        'auroraBorealisWelcome',
        '🌌 Aurora Borealis Theme',
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true
        }
    );
    
    panel.webview.html = getWelcomeHtml();
    
    // Handle messages from the webview
    panel.webview.onDidReceiveMessage(
        message => {
            switch (message.command) {
                case 'activateTheme':
                    vscode.commands.executeCommand('workbench.action.selectTheme');
                    break;
                case 'openSettings':
                    vscode.commands.executeCommand('workbench.action.openSettings', 'workbench.colorTheme');
                    break;
            }
        }
    );
}

/**
 * Generates the HTML content for the welcome webview
 */
function getWelcomeHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aurora Borealis Theme</title>
        <style>
            body {
                background: linear-gradient(135deg, #0B1426 0%, #1A2332 50%, #0F1B2E 100%);
                color: #E8F4FD;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 20px;
                min-height: 100vh;
                overflow-x: hidden;
                position: relative;
            }
            
            /* Animated aurora effect */
            .aurora {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                opacity: 0.3;
            }
            
            .aurora-wave {
                position: absolute;
                width: 200%;
                height: 100px;
                background: linear-gradient(90deg, transparent, #64FFDA, #82B1FF, #B388FF, transparent);
                animation: aurora-flow 8s ease-in-out infinite;
                border-radius: 50px;
            }
            
            .aurora-wave:nth-child(1) {
                top: 20%;
                animation-delay: 0s;
                animation-duration: 12s;
            }
            
            .aurora-wave:nth-child(2) {
                top: 40%;
                animation-delay: -4s;
                animation-duration: 10s;
                background: linear-gradient(90deg, transparent, #B388FF, #64FFDA, #FFE082, transparent);
            }
            
            .aurora-wave:nth-child(3) {
                top: 60%;
                animation-delay: -8s;
                animation-duration: 14s;
                background: linear-gradient(90deg, transparent, #82B1FF, #FF8A80, #64FFDA, transparent);
            }
            
            @keyframes aurora-flow {
                0%, 100% {
                    transform: translateX(-50%) translateY(0px) rotate(0deg);
                    opacity: 0.2;
                }
                50% {
                    transform: translateX(-30%) translateY(-20px) rotate(2deg);
                    opacity: 0.6;
                }
            }
            
            /* Floating particles */
            .particles {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            }
            
            .particle {
                position: absolute;
                width: 3px;
                height: 3px;
                background: #64FFDA;
                border-radius: 50%;
                animation: float 6s infinite;
                opacity: 0.7;
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px) translateX(0px);
                    opacity: 0.3;
                }
                50% {
                    transform: translateY(-30px) translateX(10px);
                    opacity: 1;
                }
            }
            
            .container {
                max-width: 900px;
                margin: 0 auto;
                text-align: center;
                position: relative;
                z-index: 1;
            }
            
            .aurora-title {
                font-size: 3.5em;
                font-weight: bold;
                background: linear-gradient(45deg, #64FFDA, #82B1FF, #B388FF, #FFE082);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 20px;
                animation: aurora-glow 3s ease-in-out infinite alternate;
                text-shadow: 0 0 30px rgba(100, 255, 218, 0.5);
                letter-spacing: 2px;
            }
            
            @keyframes aurora-glow {
                from { 
                    filter: drop-shadow(0 0 10px #64FFDA) drop-shadow(0 0 20px #82B1FF);
                }
                to { 
                    filter: drop-shadow(0 0 20px #B388FF) drop-shadow(0 0 30px #64FFDA);
                }
            }
            
            .subtitle {
                font-size: 1.3em;
                color: #B2DFDB;
                margin-bottom: 30px;
                font-style: italic;
            }
            
            .welcome-box {
                background: rgba(26, 35, 50, 0.9);
                border: 2px solid #64FFDA;
                border-radius: 20px;
                padding: 40px;
                margin: 30px 0;
                box-shadow: 
                    0 0 40px rgba(100, 255, 218, 0.3),
                    inset 0 0 30px rgba(100, 255, 218, 0.1);
                backdrop-filter: blur(15px);
                position: relative;
                overflow: hidden;
            }
            
            .welcome-box::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, #64FFDA 0%, transparent 70%);
                opacity: 0.05;
                animation: pulse 4s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.05; }
                50% { transform: scale(1.1); opacity: 0.1; }
            }
            
            .feature-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .feature-item {
                background: rgba(130, 177, 255, 0.1);
                border: 1px solid #82B1FF;
                border-radius: 15px;
                padding: 25px;
                transition: all 0.4s ease;
                position: relative;
                overflow: hidden;
            }
            
            .feature-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);
                transition: left 0.6s;
            }
            
            .feature-item:hover::before {
                left: 100%;
            }
            
            .feature-item:hover {
                transform: translateY(-8px);
                border-color: #64FFDA;
                box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
            }
            
            .feature-icon {
                font-size: 2em;
                margin-bottom: 15px;
                display: block;
            }
            
            .feature-title {
                color: #64FFDA;
                font-size: 1.2em;
                font-weight: bold;
                margin-bottom: 10px;
            }
            
            .button {
                background: linear-gradient(45deg, #64FFDA, #82B1FF);
                border: none;
                color: #0B1426;
                padding: 18px 35px;
                margin: 15px;
                border-radius: 30px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.4s ease;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                position: relative;
                overflow: hidden;
                font-size: 1em;
            }
            
            .button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                transition: left 0.5s;
            }
            
            .button:hover::before {
                left: 100%;
            }
            
            .button:hover {
                transform: translateY(-4px) scale(1.05);
                box-shadow: 0 15px 35px rgba(100, 255, 218, 0.4);
            }
            
            .button-secondary {
                background: linear-gradient(45deg, #B388FF, #FFE082);
            }
            
            .theme-preview {
                display: flex;
                justify-content: space-around;
                margin: 40px 0;
                flex-wrap: wrap;
            }
            
            .theme-card {
                background: rgba(15, 27, 46, 0.9);
                border: 2px solid #B388FF;
                border-radius: 20px;
                padding: 30px;
                margin: 15px;
                flex: 1;
                min-width: 280px;
                max-width: 400px;
                transition: all 0.4s ease;
                position: relative;
                overflow: hidden;
            }
            
            .theme-card::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, #B388FF 0%, transparent 70%);
                opacity: 0;
                transition: opacity 0.4s ease;
                z-index: -1;
            }
            
            .theme-card:hover::before {
                opacity: 0.15;
            }
            
            .theme-card:hover {
                transform: translateY(-10px) scale(1.02);
                border-color: #64FFDA;
                box-shadow: 0 25px 50px rgba(179, 136, 255, 0.4);
            }
            
            .theme-name {
                color: #FFE082;
                font-size: 1.4em;
                font-weight: bold;
                margin-bottom: 15px;
            }
            
            .color-palette {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin: 20px 0;
            }
            
            .color-dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 2px solid rgba(255, 255, 255, 0.3);
            }
            
            .instructions {
                background: rgba(130, 177, 255, 0.1);
                border: 2px solid #82B1FF;
                border-radius: 15px;
                padding: 30px;
                margin: 30px 0;
                text-align: left;
            }
            
            .step {
                margin: 15px 0;
                padding: 10px 0;
                font-size: 1.1em;
            }
            
            .step-number {
                color: #FFE082;
                font-weight: bold;
                font-size: 1.2em;
            }
            
            .ascii-art {
                font-family: 'Courier New', monospace;
                font-size: 0.4em;
                color: #64FFDA;
                white-space: pre;
                margin: 30px 0;
                text-shadow: 0 0 15px #64FFDA;
                line-height: 1.1;
                opacity: 0.8;
            }
            
            .footer {
                margin-top: 50px;
                padding: 20px;
                border-top: 1px solid #37474F;
                color: #90A4AE;
            }
        </style>
    </head>
    <body>
        <!-- Animated aurora background -->
        <div class="aurora">
            <div class="aurora-wave"></div>
            <div class="aurora-wave"></div>
            <div class="aurora-wave"></div>
        </div>
        
        <!-- Floating particles -->
        <div class="particles" id="particles"></div>
        
        <div class="container">
            <div class="aurora-title">AURORA BOREALIS</div>
            <div class="subtitle">✨ Experience the mystical beauty of the Northern Lights in your code ✨</div>
            
            <div class="ascii-art">
    ░█████╗░██╗░░░██╗██████╗░░█████╗░██████╗░░█████╗░
    ██╔══██╗██║░░░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗
    ███████║██║░░░██║██████╔╝██║░░██║██████╔╝███████║
    ██╔══██║██║░░░██║██╔══██╗██║░░██║██╔══██╗██╔══██║
    ██║░░██║╚██████╔╝██║░░██║╚█████╔╝██║░░██║██║░░██║
    ╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝
    
    ██████╗░░█████╗░██████╗░███████╗░█████╗░██╗░░░░░██╗░██████╗
    ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██║░░░░░██║██╔════╝
    ██████╦╝██║░░██║██████╔╝█████╗░░███████║██║░░░░░██║╚█████╗░
    ██╔══██╗██║░░██║██╔══██╗██╔══╝░░██╔══██║██║░░░░░██║░╚═══██╗
    ██████╦╝╚█████╔╝██║░░██║███████╗██║░░██║███████╗██║██████╔╝
    ╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝╚═╝╚═════╝░
            </div>
            
            <div class="welcome-box">
                <h2>🌌 Welcome to the Arctic Coding Experience 🌌</h2>
                <p>Thank you for installing the <strong>Aurora Borealis Theme</strong>!</p>
                <p>🌟 You've just unlocked a mystical coding environment where ethereal greens dance with arctic blues and mystical purples.</p>
            </div>
            
            <div class="theme-preview">
                <div class="theme-card">
                    <div class="theme-name">🌌 Aurora Borealis</div>
                    <div class="color-palette">
                        <div class="color-dot" style="background: #64FFDA;"></div>
                        <div class="color-dot" style="background: #82B1FF;"></div>
                        <div class="color-dot" style="background: #B388FF;"></div>
                        <div class="color-dot" style="background: #FFE082;"></div>
                        <div class="color-dot" style="background: #FF8A80;"></div>
                    </div>
                    <p>Full intensity Northern Lights experience with deep arctic backgrounds and vibrant aurora colors.</p>
                </div>
                <div class="theme-card">
                    <div class="theme-name">✨ Aurora Borealis Soft</div>
                    <div class="color-palette">
                        <div class="color-dot" style="background: #81C784;"></div>
                        <div class="color-dot" style="background: #64B5F6;"></div>
                        <div class="color-dot" style="background: #BA68C8;"></div>
                        <div class="color-dot" style="background: #FFB74D;"></div>
                        <div class="color-dot" style="background: #FFAB91;"></div>
                    </div>
                    <p>Gentle aurora variant perfect for extended coding sessions with muted mystical colors.</p>
                </div>
            </div>
            
            <div class="feature-grid">
                <div class="feature-item">
                    <div class="feature-icon">🌌</div>
                    <div class="feature-title">Arctic Night Backgrounds</div>
                    <p>Deep blue-black backgrounds reminiscent of polar nights</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">💚</div>
                    <div class="feature-title">Ethereal Aurora Greens</div>
                    <p>Mystical green accents for strings and success states</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">💙</div>
                    <div class="feature-title">Arctic Blue Highlights</div>
                    <p>Cool blue tones for functions and information</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">💜</div>
                    <div class="feature-title">Mystical Purple Glow</div>
                    <p>Enchanting purple for constants and special elements</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">👁️</div>
                    <div class="feature-title">Eye-Friendly Design</div>
                    <p>Optimized for long coding sessions in any lighting</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🎨</div>
                    <div class="feature-title">Dual Variants</div>
                    <p>Choose between full intensity and soft aurora experiences</p>
                </div>
            </div>
            
            <div class="instructions">
                <h3>🎯 How to activate your Aurora theme:</h3>
                <div class="step"><span class="step-number">1.</span> Open VS Code Command Palette (Ctrl+Shift+P / Cmd+Shift+P)</div>
                <div class="step"><span class="step-number">2.</span> Type "Preferences: Color Theme"</div>
                <div class="step"><span class="step-number">3.</span> Select "Aurora Borealis" or "Aurora Borealis Soft"</div>
                <div class="step"><span class="step-number">4.</span> Enjoy coding under the Northern Lights! ✨</div>
            </div>
            
            <div style="margin: 40px 0;">
                <button class="button" onclick="activateTheme()">🎨 Choose Theme</button>
                <button class="button button-secondary" onclick="openSettings()">⚙️ Open Settings</button>
            </div>
            
            <div class="footer">
                <p>🌟 May your code shine as bright as the Aurora Borealis! 🌟</p>
                <p><em>Created with ❄️ by Aurora Themes</em></p>
            </div>
        </div>
        
        <script>
            const vscode = acquireVsCodeApi();
            
            // Generate floating particles
            function createParticles() {
                const particlesContainer = document.getElementById('particles');
                const numberOfParticles = 50;
                
                for (let i = 0; i < numberOfParticles; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 6 + 's';
                    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                    
                    // Random colors from aurora palette
                    const colors = ['#64FFDA', '#82B1FF', '#B388FF', '#FFE082', '#FF8A80'];
                    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                    
                    particlesContainer.appendChild(particle);
                }
            }
            
            function activateTheme() {
                vscode.postMessage({
                    command: 'activateTheme'
                });
            }
            
            function openSettings() {
                vscode.postMessage({
                    command: 'openSettings'
                });
            }
            
            // Initialize particles when page loads
            createParticles();
        </script>
    </body>
    </html>
    `;
}

/**
 * Called when the extension is deactivated
 */
function deactivate() {
    console.log('🌌 Aurora Borealis Theme extension deactivated');
}

module.exports = {
    activate,
    deactivate
};
