import { test } from 'vitest';
import fs from 'fs';
import path from 'path';
import { blogPosts, categoryMeta } from '../data/blog-posts';

test('inject blog posts to DE, ES, FR, IT', () => {
  const langs = ['de', 'es', 'fr', 'it'];
  
  for (const lang of langs) {
    const filePath = path.resolve(__dirname, `../i18n/data/content-${lang}.ts`);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // First remove any existing blog: { ... } block at the end of the file if it exists
    // This is a naive regex but works since the blog block is at the very end
    if (content.includes('  blog: {\n')) {
      content = content.replace(/,\n  blog: \{[\s\S]*\}\n\};\n\nexport default content/, '\n};\n\nexport default content');
    }
    
    let blogObj = '  blog: {\n';
    
    // Add category meta
    blogObj += '    category: {\n';
    for (const [key, val] of Object.entries(categoryMeta)) {
      const safeKey = key.toLowerCase().replace(/[&\\s]+/g, "-").replace(/-+/g, "-");
      blogObj += `      "${safeKey}": {\n`;
      blogObj += `        title: ${JSON.stringify(`[${lang.toUpperCase()}] ` + val.title)},\n`;
      blogObj += `        description: ${JSON.stringify(`[${lang.toUpperCase()}] ` + val.description)}\n`;
      blogObj += `      },\n`;
    }
    blogObj += '    },\n';
    
    for (const post of blogPosts) {
      blogObj += `    "${post.slug}": {\n`;
      blogObj += `      title: ${JSON.stringify(`[${lang.toUpperCase()}] ` + post.title)},\n`;
      blogObj += `      excerpt: ${JSON.stringify(`[${lang.toUpperCase()}] ` + post.excerpt)},\n`;
      blogObj += `      category: ${JSON.stringify(`[${lang.toUpperCase()}] ` + post.category)}\n`;
      blogObj += `    },\n`;
    }
    blogObj += '  },\n';
    
    // Inject before the last closing brace
    const regex = /  \},\n\};\n/g;
    if (content.match(regex)) {
        content = content.replace(regex, `  },\n${blogObj}};\n`);
    } else {
        const altRegex = /\n\};\nexport default content/g;
        content = content.replace(altRegex, `,\n${blogObj}};\nexport default content`);
    }
    
    fs.writeFileSync(filePath, content);
  }
});