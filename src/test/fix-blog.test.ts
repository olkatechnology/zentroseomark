import { test } from 'vitest';
import fs from 'fs';
import path from 'path';

test('fix duplicate blog key', () => {
  const langs = ['de', 'es', 'fr', 'it'];
  
  for (const lang of langs) {
    const filePath = path.resolve(__dirname, `../i18n/data/content-${lang}.ts`);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // The previous script added a new `blog: { ... }` block but there was already one.
    // Let's remove the second one that was added at the very end
    const parts = content.split('  blog: {\n');
    
    if (parts.length > 2) {
      // Keep everything up to the second "blog: {"
      const newContent = parts[0] + '  blog: {\n' + parts[1].replace(/,\n\s*}\n};\n\nexport default content/, '\n};\n\nexport default content');
      fs.writeFileSync(filePath, newContent);
    }
  }
});
