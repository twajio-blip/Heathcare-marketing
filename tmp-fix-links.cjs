const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = [
    'index.html',
    'about.html',
    'contact.html',
    'service.html',
    'process.html',
    'work.html',
    'whowehelp.html',
    'technology.html',
    'login.html',
    'signup.html',
    'dental-marketing.html',
    'hospital-growth.html',
    'telehealth-scaling.html',
    'public/components/header.html',
    'public/components/footer.html'
];

const replaceMap = {
    'href="/"': 'href="./index.html"',
    'href="/index"': 'href="./index.html"',
    'href="/about"': 'href="./about.html"',
    'href="/contact"': 'href="./contact.html"',
    'href="/service"': 'href="./service.html"',
    'href="/process"': 'href="./process.html"',
    'href="/work"': 'href="./work.html"',
    'href="/whowehelp"': 'href="./whowehelp.html"',
    'href="/technology"': 'href="./technology.html"',
    'href="/login"': 'href="./login.html"',
    'href="/signup"': 'href="./signup.html"',
    'href="/dental-marketing"': 'href="./dental-marketing.html"',
    'href="/hospital-growth"': 'href="./hospital-growth.html"',
    'href="/telehealth-scaling"': 'href="./telehealth-scaling.html"',
    'href="/favicon.ico"': 'href="./favicon.ico"'
};

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        for (const [key, value] of Object.entries(replaceMap)) {
            // Use regex to catch optional single/double quotes, but here we can just do global replace
            const re = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            if (content.match(re)) {
                content = content.replace(re, value);
                modified = true;
            }
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
});
console.log('Done!');
