/**
 * Generate placeholder images for projects
 * Run: node scripts/generate-placeholders.js
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const projects = [
  { name: 'optimalmd', title: 'OptimalMD\nPortal', gradient: ['#0ea5e9', '#6366f1'] },
  { name: 'octopi-hrms', title: 'Octopi\nHRMS', gradient: ['#8b5cf6', '#ec4899'] },
  { name: 'monkeymans', title: 'Monkeymans\nHR', gradient: ['#f59e0b', '#ef4444'] },
  { name: 'one-crm', title: 'ONE\nCRM', gradient: ['#10b981', '#0ea5e9'] },
  { name: 'optimalmd-mobile', title: 'OptimalMD\nMobile', gradient: ['#06b6d4', '#3b82f6'] },
  { name: 'dcn', title: 'DCN\nMobile', gradient: ['#6366f1', '#8b5cf6'] },
  { name: 'epay', title: 'ePay\nWeb', gradient: ['#14b8a6', '#06b6d4'] },
  { name: 'epay-apk', title: 'ePay\nAndroid', gradient: ['#10b981', '#14b8a6'] },
  { name: 'ai-copilot', title: 'AI\nCopilot', gradient: ['#8b5cf6', '#d946ef'] },
];

function generateSVG(title, gradient) {
  const [color1, color2] = gradient;
  return `<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle" opacity="0.9">${title}</text>
</svg>`;
}

const projectsDir = path.join(__dirname, '../public/projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

projects.forEach(project => {
  const svgContent = generateSVG(project.title, project.gradient);
  const svgPath = path.join(projectsDir, `${project.name}.svg`);
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✓ Created ${project.name}.svg`);
});

console.log('\n✨ All placeholder images generated!');
console.log('Replace them with actual screenshots in public/projects/');
