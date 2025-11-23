#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app', 'services');

// Fix imports in all generated service pages
const serviceDirs = [
  'interior-deep-cleansing',
  'paint-correction', 
  'ceramic-coating',
  'headlight-restoration',
  'full-detail-package'
];

serviceDirs.forEach(serviceDir => {
  const filePath = path.join(servicesDir, serviceDir, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the import statement
    content = content.replace(
      "import { CONTACT_INFO } from '@/lib/data';",
      "import { businessInfo as CONTACT_INFO } from '../../lib/data';"
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed import in: ${serviceDir}/page.tsx`);
  }
});

console.log('\n✅ All service pages fixed!');
