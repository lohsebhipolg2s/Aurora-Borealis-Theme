# Aurora Borealis Theme for Visual Studio Code

> 🌌 Experience the mystical beauty of the Northern Lights in your code

![Aurora Borealis Theme](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/blob/main/icons/bg-banner.jpg)

## ✨ Overview

The **Aurora Borealis Theme** brings the ethereal beauty of the Northern Lights to your VS Code editor. Inspired by the dancing colors of the aurora in the arctic sky, this theme combines deep polar night backgrounds with vibrant aurora greens, mystical purples, and arctic blues to create a truly magical coding experience.

## 🎨 Color Palette

### Main Theme Colors
- **Arctic Night**: `#0B1426` - Deep polar night background
- **Aurora Green**: `#64FFDA` - Ethereal green for strings and success
- **Arctic Blue**: `#82B1FF` - Cool blue for functions and information  
- **Mystical Purple**: `#B388FF` - Enchanting purple for constants
- **Aurora Gold**: `#FFE082` - Warm gold for numbers and warnings
- **Polar Pink**: `#FF8A80` - Soft pink for keywords and errors
![Example](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/blob/main/icons/preview-1.png)
### Soft Variant Colors
- **Gentle Night**: `#1A2332` - Softer background for extended sessions
- **Muted Aurora**: `#81C784` - Gentle green tones
- **Calm Blue**: `#64B5F6` - Relaxed blue highlights
- **Soft Purple**: `#BA68C8` - Muted mystical accents
![Example](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/blob/main/icons/preview-2.png)
## 🌟 Features
![Icon](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/blob/main/icons/icon.png)
- **🌌 Two Beautiful Variants**
  - **Aurora Borealis**: Full intensity Northern Lights experience
  - **Aurora Borealis Soft**: Gentle variant for extended coding sessions

- **💚 Carefully Crafted Color Harmony**
  - High contrast ratios for excellent readability
  - Eye-friendly design optimized for long coding sessions
  - Consistent color temperature throughout the interface

- **🎯 Comprehensive Language Support**
  - JavaScript/TypeScript
  - Python
  - HTML/CSS
  - JSON
  - Markdown
  - And many more...

- **🔧 Advanced Features**
  - Full semantic highlighting support
  - Bracket pair colorization
  - Git integration colors
  - Terminal color scheme
  - Integrated debugging colors

## 📦 Installation

### Via VS Code Marketplace
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Aurora Borealis"
4. Click Install
5. Reload VS Code

### Manual Installation
1. Download the `.vsix` file from releases
2. Open VS Code
3. Press `Ctrl+Shift+P` / `Cmd+Shift+P`
4. Type "Extensions: Install from VSIX"
5. Select the downloaded file

## 🎯 Activation

1. Open VS Code Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Preferences: Color Theme"
3. Select either:
   - **Aurora Borealis** (full intensity)
   - **Aurora Borealis Soft** (gentle variant)

## 🖼️ Screenshots

### JavaScript/TypeScript
```javascript
// Aurora Borealis Theme showcasing JavaScript
class AuroraEffect {
    constructor(intensity = 'full') {
        this.colors = ['#64FFDA', '#82B1FF', '#B388FF'];
        this.intensity = intensity;
    }
    
    /**
     * Creates mystical aurora animation
     * @param {number} duration - Animation duration in ms
     */
    animate(duration = 3000) {
        const waves = this.generateWaves();
        return new Promise(resolve => {
            setTimeout(() => resolve(waves), duration);
        });
    }
}
```

### Python
```python
# Aurora Borealis Theme showcasing Python
import numpy as np
from typing import List, Optional

class NorthernLights:
    """Simulates the beautiful Aurora Borealis phenomenon"""
    
    def __init__(self, latitude: float = 69.0):
        self.latitude = latitude
        self.colors = ["#64FFDA", "#82B1FF", "#B388FF"]
        
    def generate_aurora(self, intensity: str = "moderate") -> List[str]:
        """Generate aurora colors based on solar activity"""
        if intensity == "high":
            return self.colors * 3
        elif intensity == "low":
            return [color + "80" for color in self.colors]  # Add transparency
        return self.colors
```

### CSS
```css
/* Aurora Borealis Theme showcasing CSS */
.aurora-container {
    background: linear-gradient(135deg, #0B1426 0%, #1A2332 100%);
    color: #E8F4FD;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.3);
}

.aurora-wave {
    animation: aurora-flow 8s ease-in-out infinite;
    background: linear-gradient(90deg, 
        transparent, 
        #64FFDA, 
        #82B1FF, 
        #B388FF, 
        transparent
    );
}

@keyframes aurora-flow {
    0%, 100% { transform: translateX(-50%) rotate(0deg); }
    50% { transform: translateX(-30%) rotate(2deg); }
}
```

## ⚙️ Recommended Settings

For the best Aurora Borealis experience, add these settings to your VS Code `settings.json`:

```json
{
    "editor.semanticHighlighting.enabled": true,
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.fontLigatures": true,
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    "workbench.iconTheme": "material-icon-theme",
    "terminal.integrated.minimumContrastRatio": 4.5
}
```

## 🎨 Customization

You can customize the theme colors by adding color overrides to your `settings.json`:

```json
{
    "workbench.colorCustomizations": {
        "[Aurora Borealis]": {
            "editor.background": "#0A1220",
            "sideBar.background": "#0E1A2D"
        }
    },
    "editor.tokenColorCustomizations": {
        "[Aurora Borealis]": {
            "comments": "#546E7A",
            "strings": "#64FFDA"
        }
    }
}
```

## 🌍 Accessibility

The Aurora Borealis theme is designed with accessibility in mind:

- **High Contrast**: All color combinations meet WCAG AA standards
- **Color Blind Friendly**: Tested with various types of color blindness
- **Reduced Eye Strain**: Optimized for long coding sessions
- **Clear Hierarchy**: Distinct colors for different code elements

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report Issues**: Found a bug or have a suggestion? [Open an issue](https://github.com/aurora-themes/aurora-borealis-vscode/issues)
2. **Submit Pull Requests**: Improvements and fixes are always welcome
3. **Share Feedback**: Let us know how we can make the theme better
4. **Spread the Word**: Share the theme with fellow developers

### Development Setup

```bash
# Clone the repository
git clone https://github.com/aurora-themes/aurora-borealis-vscode.git

# Install dependencies
npm install

# Package the extension
vsce package

# Install locally for testing
code --install-extension aurora-borealis-theme-1.0.0.vsix
```

## 📝 Changelog

### [1.0.0] - 2024-12-03
#### Added
- Initial release of Aurora Borealis theme
- Main theme variant with full intensity colors
- Soft theme variant for extended coding sessions
- Comprehensive language support
- Interactive welcome screen
- Full semantic highlighting support
- Terminal color integration
- Git decoration colors

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## 🙏 Acknowledgments

- Inspired by the natural phenomenon of Aurora Borealis
- Color palette influenced by arctic photography
- Thanks to the VS Code team for the excellent theming API
- Special thanks to all beta testers and contributors

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/issues)
- **Discussions**: [GitHub Discussions](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/discussions)
- **Email**: aurora.themes.dev@gmail.com

---

<div align="center">

**🌟 May your code shine as bright as the Aurora Borealis! 🌟**

Made with ❄️ by [Aurora Themes](github.com/lohsebhipolg2s/Aurora-Borealis-Theme)

[⭐ Star on GitHub](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme) | [🐛 Report Bug](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/issues) | [💡 Request Feature](https://github.com/lohsebhipolg2s/Aurora-Borealis-Theme/issues)

</div>
